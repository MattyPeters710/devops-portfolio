export default function Home() {
  return (
    <main className="bg-gray-950 text-white min-h-screen">

      {/* HERO SECTION */}
      <section className="text-center py-24">
        <h1 className="text-5xl font-bold">Mathew Peters</h1>
        <p className="text-xl text-gray-400 mt-4">
          DevOps Engineer | Azure | Terraform | Kubernetes
        </p>
        <p className="text-gray-500 mt-4">
          Building scalable cloud infrastructure & automation pipelines.
        </p>
      </section>

      {/* ABOUT SECTION */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-400">
          DevOps engineer with experience in Azure cloud infrastructure,
          Terraform automation, CI/CD pipelines, and disaster recovery
          environments. Passionate about reliability engineering and
          infrastructure as code.
        </p>
      </section>

      {/* SKILLS SECTION */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold mb-6">Technical Skills</h2>

        <div className="grid md:grid-cols-3 gap-4">
          {[
            "Azure",
            "Terraform",
            "Docker",
            "Kubernetes",
            "GitHub Actions",
            "Linux",
            "Ansible",
            "Networking",
            "CI/CD",
          ].map(skill => (
            <div
              key={skill}
              className="bg-blue-600 p-4 rounded-xl text-center"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold mb-6">Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <Project
            title="Terraform Drift Detection Automation"
            desc="Automated drift detection across multiple Azure subscriptions using Terraform and GitHub Actions."
          />
          <Project
            title="Azure DR Failover Architecture"
            desc="Designed and tested disaster recovery failover between primary and DR regions using Infrastructure as Code."
          />
          <Project
            title="CI/CD Pipeline Implementation"
            desc="Built end-to-end CI/CD pipelines for containerized applications using GitHub Actions and Docker."
          />
          <Project
            title="Kubernetes Deployment Demo"
            desc="Deployed scalable applications on Kubernetes with rolling updates and monitoring setup."
          />
        </div>
      </section>

      {/* RESUME SECTION */}
      <section className="text-center py-16">
        <a
          href="/resume.pdf"
          className="bg-green-600 hover:bg-green-700 px-8 py-3 rounded-lg text-lg"
        >
          Download Resume
        </a>
      </section>

    </main>
  );
}

function Project({ title, desc }: any) {
  return (
    <div className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-400 mt-3">{desc}</p>
    </div>
  );
}