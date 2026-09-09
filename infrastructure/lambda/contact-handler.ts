import type {
  APIGatewayProxyEventV2,
  APIGatewayProxyStructuredResultV2,
} from "aws-lambda";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const sesClient = new SESClient({});
const contactEmail = process.env.CONTACT_EMAIL;

function createResponse(
  statusCode: number,
  message: string,
): APIGatewayProxyStructuredResultV2 {
  return {
    statusCode,
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ message }),
  };
}

function readString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function handler(
  event: APIGatewayProxyEventV2,
): Promise<APIGatewayProxyStructuredResultV2> {
  if (!contactEmail) {
    console.error("CONTACT_EMAIL environment variable is not configured.");
    return createResponse(500, "The contact service is unavailable.");
  }

  if (!event.body || event.body.length > 10_000) {
    return createResponse(400, "The submitted request is invalid.");
  }

  try {
    const payload: unknown = JSON.parse(event.body);

    if (!payload || typeof payload !== "object") {
      return createResponse(400, "The submitted request is invalid.");
    }

    const fields = payload as Record<string, unknown>;
    const name = readString(fields.name);
    const email = readString(fields.email);
    const subject = readString(fields.subject);
    const message = readString(fields.message);
    const website = readString(fields.website);

    // Honeypot: real visitors leave this hidden field empty.
    if (website) {
      return createResponse(200, "Your message was received.");
    }

    if (
      name.length < 2 ||
      name.length > 100 ||
      !isValidEmail(email) ||
      email.length > 254 ||
      subject.length < 3 ||
      subject.length > 150 ||
      message.length < 10 ||
      message.length > 5_000
    ) {
      return createResponse(400, "Please check the submitted fields.");
    }

    const safeName = name.replace(/[\r\n]+/g, " ");
    const safeSubject = subject.replace(/[\r\n]+/g, " ");

    await sesClient.send(
      new SendEmailCommand({
        Source: contactEmail,
        Destination: {
          ToAddresses: [contactEmail],
        },
        ReplyToAddresses: [email],
        Message: {
          Subject: {
            Charset: "UTF-8",
            Data: `Portfolio message: ${safeSubject}`,
          },
          Body: {
            Text: {
              Charset: "UTF-8",
              Data: [
                `Name: ${safeName}`,
                `Email: ${email}`,
                "",
                "Message:",
                message,
              ].join("\n"),
            },
          },
        },
      }),
    );

    return createResponse(200, "Your message was sent successfully.");
  } catch (error) {
    const errorName =
      error instanceof Error ? error.name : "UnknownContactFormError";

    console.error("Contact form request failed:", errorName);

    return createResponse(
      500,
      "Your message could not be sent. Please try again later.",
    );
  }
}