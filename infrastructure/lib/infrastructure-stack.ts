import * as path from "path";
import * as cdk from "aws-cdk-lib";
import * as apigwv2 from "aws-cdk-lib/aws-apigatewayv2";
import * as integrations from "aws-cdk-lib/aws-apigatewayv2-integrations";
import * as iam from "aws-cdk-lib/aws-iam";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as nodejs from "aws-cdk-lib/aws-lambda-nodejs";
import * as logs from "aws-cdk-lib/aws-logs";
import { Construct } from "constructs";

export class InfrastructureStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const contactEmail = new cdk.CfnParameter(this, "ContactEmail", {
      type: "String",
      noEcho: true,
      description: "Verified Amazon SES destination email address",
    });

    const contactFunction = new nodejs.NodejsFunction(
      this,
      "ContactFunction",
      {
        runtime: lambda.Runtime.NODEJS_22_X,
        entry: path.join(__dirname, "../lambda/contact-handler.ts"),
        handler: "handler",
        memorySize: 256,
        timeout: cdk.Duration.seconds(10),
        logRetention: logs.RetentionDays.ONE_WEEK,
        environment: {
          CONTACT_EMAIL: contactEmail.valueAsString,
        },
        bundling: {
          minify: true,
          sourceMap: true,
        },
      },
    );

    contactFunction.addToRolePolicy(
      new iam.PolicyStatement({
        actions: ["ses:SendEmail"],
        resources: [
          cdk.Stack.of(this).formatArn({
            service: "ses",
            resource: "identity",
            resourceName: contactEmail.valueAsString,
          }),
        ],
      }),
    );

    const contactApi = new apigwv2.HttpApi(this, "ContactApi", {
      corsPreflight: {
        allowOrigins: ["http://localhost:3000"],
        allowHeaders: ["content-type"],
        allowMethods: [
          apigwv2.CorsHttpMethod.POST,
          apigwv2.CorsHttpMethod.OPTIONS,
        ],
        maxAge: cdk.Duration.days(1),
      },
    });

    const contactIntegration = new integrations.HttpLambdaIntegration(
      "ContactIntegration",
      contactFunction,
    );

    contactApi.addRoutes({
      path: "/contact",
      methods: [apigwv2.HttpMethod.POST],
      integration: contactIntegration,
    });

    const defaultStage = contactApi.defaultStage?.node
      .defaultChild as apigwv2.CfnStage;

    defaultStage.defaultRouteSettings = {
      throttlingBurstLimit: 5,
      throttlingRateLimit: 2,
    };

    new cdk.CfnOutput(this, "ContactApiUrl", {
      value: `${contactApi.apiEndpoint}/contact`,
      description: "Contact form API endpoint",
    });
  }
}
