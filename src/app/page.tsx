

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
    </main>
  );
}