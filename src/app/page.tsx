

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <a
          href="#home"
          className="text-xl font-bold tracking-tight text-cyan-400"
        >
          GP
        </a>

        <div className="flex gap-6 text-sm text-slate-300">
          <a className="transition hover:text-cyan-400" href="#about">
            About
          </a>
          <a className="transition hover:text-cyan-400" href="#projects">
            Projects
          </a>
          <a className="transition hover:text-cyan-400" href="#skills">
            Skills
          </a>
          <a className="transition hover:text-cyan-400" href="#contact">
            Contact
          </a>
        </div>
      </nav>

      <section
        id="home"
        className="mx-auto flex min-h-[80vh] max-w-6xl items-center px-6 py-20"
      >
        <div className="max-w-4xl">
          <p className="mb-4 font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Cloud Security Engineer
          </p>

          <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-7xl">
            Hi, I&apos;m Gloria Page.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            I design secure, scalable AWS environments using infrastructure as
            code, automation, and cloud security best practices.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Explore My Projects
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-slate-600 px-6 py-3 font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-3 text-sm text-slate-300">
            {[
              "AWS",
              "Cloud Security",
              "TypeScript",
              "Terraform",
              "AWS CDK",
              "DevSecOps",
              "GRC",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
      <section
 id="about"
  className="border-t border-slate-800 bg-slate-900/50 px-6 py-24"
>
  <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
    <div>
      <p className="font-semibold uppercase tracking-[0.25em] text-cyan-400">
        About Me
      </p>

      <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
        Building secure cloud environments with purpose.
      </h2>
    </div>

    <div className="space-y-6 text-lg leading-8 text-slate-300">
      <p>
        I am a cybersecurity and cloud professional with more than 20 years of
        IT operations experience supporting enterprise applications, systems,
        and solving technical problems.
      </p>

      <p>
        My work focuses on AWS cloud security, infrastructure as code,
        DevSecOps, identity and access management, and governance, risk, and
        compliance. I enjoy transforming security requirements into practical,
        repeatable cloud solutions.
      </p>

      <p>
        I hold a bachelor&apos;s degree in cybersecurity and am advancing my
        cloud expertise through graduate study, certifications, and hands-on
        AWS engineering projects.
      </p>
    </div>
  </div>

  <div className="mx-auto mt-16 grid max-w-6xl gap-6 sm:grid-cols-3">
    {[
      ["20+", "Years in Technology"],
      ["AWS", "Cloud Engineering Focus"],
      ["IaC", "Repeatable Infrastructure"],
    ].map(([value, label]) => (
      <div
        key={label}
        className="rounded-2xl border border-slate-800 bg-slate-950 p-6"
      >
        <p className="text-3xl font-bold text-cyan-400">{value}</p>
        <p className="mt-2 text-slate-400">{label}</p>
      </div>
    ))}
  </div>
</section>

<section id="about">
        {/* About content */}
      </section>
<section id="projects" className="px-6 py-24">
  <div className="mx-auto max-w-6xl">
    <p className="font-semibold uppercase tracking-[0.25em] text-cyan-400">
      Featured Projects
    </p>

    <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
      Cloud engineering in action.
    </h2>

    <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
      These projects demonstrate how I apply cloud architecture, automation,
      security, and infrastructure-as-code principles to real-world scenarios.
    </p>

    <div className="mt-12 grid gap-6 lg:grid-cols-3">
      {[
        {
          title: "TechHealth AWS Modernization",
          description:
            "Rebuilt a manually configured patient portal using AWS CDK, segmented networking, isolated database resources, least-privilege security groups, and repeatable deployment workflows.",
          technologies: ["AWS CDK", "TypeScript", "EC2", "RDS", "VPC"],
        },
        {
          title: "StartupCo IAM Remediation",
          description:
            "Replaced shared root access with role-based IAM users, groups, and least-privilege policies tailored to development, operations, finance, and analytics teams.",
          technologies: ["Terraform", "AWS IAM", "MFA", "S3", "RBAC"],
        },
        {
          title: "Secure AWS Portfolio",
          description:
            "Developing a cloud-native professional portfolio with Next.js, TypeScript, AWS Amplify Hosting, automated testing, and GitHub-driven CI/CD.",
          technologies: ["Next.js", "Amplify", "GitHub", "CI/CD", "AWS CDK"],
        },
      ].map((project) => (
        <article
          key={project.title}
          className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900 p-7 transition hover:-translate-y-1 hover:border-cyan-400"
        >
          <h3 className="text-xl font-bold">{project.title}</h3>

          <p className="mt-4 flex-1 leading-7 text-slate-400">
            {project.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full bg-slate-800 px-3 py-1 text-xs text-cyan-300"
              >
                {technology}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  </div>
</section>
<section
  id="skills"
  className="border-y border-slate-800 bg-slate-900/50 px-6 py-24"
>
  <div className="mx-auto max-w-6xl">
    <p className="font-semibold uppercase tracking-[0.25em] text-cyan-400">
      Technical Skills
    </p>

    <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
      Technologies backed by hands-on experience.
    </h2>

    <div className="mt-12 grid gap-6 md:grid-cols-2">
      {[
        {
          category: "Cloud Infrastructure",
          skills: [
            "AWS",
            "VPC",
            "EC2",
            "S3",
            "RDS",
            "CloudFront",
            "AWS Amplify",
          ],
        },
        {
          category: "Cloud Security",
          skills: [
            "IAM",
            "Least Privilege",
            "MFA",
            "Security Groups",
            "Encryption",
            "CloudTrail",
            "GuardDuty",
          ],
        },
        {
          category: "Infrastructure & Automation",
          skills: [
            "AWS CDK",
            "Terraform",
            "CloudFormation",
            "TypeScript",
            "Python",
            "GitHub Actions",
            "CI/CD",
          ],
        },
        {
          category: "Governance & Security Frameworks",
          skills: [
            "NIST CSF",
            "ISO 27001",
            "PCI DSS",
            "HIPAA",
            "Risk Management",
            "GRC",
            "Incident Response",
          ],
        },
      ].map((group) => (
        <article
          key={group.category}
          className="rounded-2xl border border-slate-800 bg-slate-950 p-7"
        >
          <h3 className="text-xl font-bold text-cyan-400">
            {group.category}
          </h3>

          <div className="mt-5 flex flex-wrap gap-3">
            {group.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-lg border border-slate-700 px-3 py-2 text-sm text-slate-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  </div>
</section>

<section id="contact" className="px-6 py-24">
  <div className="mx-auto max-w-4xl text-center">
    <p className="font-semibold uppercase tracking-[0.25em] text-cyan-400">
      Let&apos;s Connect
    </p>

    <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
      Let&apos;s build something secure.
    </h2>

    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
      I am open to individual-contributor opportunities in cloud security,
      cybersecurity, AWS cloud engineering, GRC, and security operations.
    </p>

    <a
      href="mailto:Gloria.Page1902@outlook.com"
      className="mt-6 inline-block text-lg font-semibold text-cyan-400 hover:text-cyan-300"
    >
      Gloria.Page1902@outlook.com
    </a>

    <div className="mt-10 flex flex-wrap justify-center gap-4">
      <a
        href="mailto:Gloria.Page1902@outlook.com"
        className="rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
      >
        Send Email
      </a>

      <a
        href="https://www.linkedin.com/in/gloriapage-cloudsec/"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-lg border border-slate-600 px-6 py-3 font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
      >
        LinkedIn
      </a>

      <a
        href="https://github.com/Gees1902"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-lg border border-slate-600 px-6 py-3 font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
      >
        GitHub
      </a>
    </div>
  </div>
</section>

<footer className="border-t border-slate-800 px-6 py-8">
  <div className="mx-auto flex max-w-6xl flex-col gap-3 text-center text-sm text-slate-500 sm:flex-row sm:justify-between">
    <p>© {new Date().getFullYear()} Gloria Page. All rights reserved.</p>
    <p>Built with Next.js, TypeScript, Tailwind CSS, and AWS.</p>
  </div>
</footer>
    </main>
  );
}