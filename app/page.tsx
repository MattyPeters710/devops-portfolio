"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import dynamic from "next/dynamic";
import { Github, Linkedin, Mail, Download, ExternalLink } from "lucide-react";
import Sidebar from "./components/Sidebar";

const Hero3D = dynamic(() => import("./components/Hero3D"), {
  ssr: false,
});

function Section({
  id,
  children,
  className = "",
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

const projects = [
  {
    title: "Terraform Azure Infrastructure",
    description:
      "Production-grade IaC modules provisioning VNets, AKS clusters, Key Vaults and storage accounts with remote state in Azure Blob Storage.",
    tags: ["Terraform", "Azure", "IaC"],
    link: "https://github.com/MattyPeters710",
  },
  {
    title: "Kubernetes Microservices",
    description:
      "Multi-service application deployed on AKS with Helm charts, Ingress controllers, HPA autoscaling and namespace isolation.",
    tags: ["Kubernetes", "Helm", "Docker"],
    link: "https://github.com/MattyPeters710",
  },
  {
    title: "CI/CD Automation Pipeline",
    description:
      "End-to-end GitHub Actions workflows for building, testing, scanning and deploying containerised apps to Azure with zero-downtime rollouts.",
    tags: ["GitHub Actions", "Docker", "Azure"],
    link: "https://github.com/MattyPeters710",
  },
  {
    title: "Drift Detection System",
    description:
      "Scheduled Terraform plan jobs that detect infrastructure drift, post Slack alerts and auto-create remediation PRs.",
    tags: ["Terraform", "GitHub Actions", "Automation"],
    link: "https://github.com/MattyPeters710",
  },
];

const skillCategories = [
  {
    category: "Cloud",
    skills: ["Azure", "Azure DevOps", "ARM Templates"],
  },
  {
    category: "Infrastructure as Code",
    skills: ["Terraform", "Helm"],
  },
  {
    category: "Containers & Orchestration",
    skills: ["Docker", "Kubernetes", "AKS"],
  },
  {
    category: "CI/CD",
    skills: ["GitHub Actions", "Azure Pipelines"],
  },
  {
    category: "OS & Scripting",
    skills: ["Linux", "Bash", "PowerShell"],
  },
  {
    category: "Monitoring",
    skills: ["Prometheus", "Grafana"],
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen flex bg-transparent text-white overflow-hidden">
      {/* 3D BACKGROUND */}
      <Hero3D />

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <div className="flex-1 md:ml-20 px-6 py-20 relative z-10">
        {/* HOME / HERO */}
        <section
          id="home"
          className="min-h-screen flex flex-col justify-center items-center text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text"
          >
            Mathew Peters
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-xl text-gray-300 max-w-2xl"
          >
            DevOps Engineer building scalable Azure infrastructure using
            Terraform, Kubernetes and CI/CD automation.
          </motion.p>

          {/* Social / CTA Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <a
              href="https://github.com/MattyPeters710"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition"
            >
              <Github size={18} /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition"
            >
              <Linkedin size={18} /> LinkedIn
            </a>
            <a
              href="mailto:mathewpeters22@gmail.com"
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition"
            >
              <Mail size={18} /> Email
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition font-medium"
            >
              <Download size={18} /> Resume
            </a>
          </motion.div>
        </section>

        {/* ABOUT */}
        <Section id="about" className="py-24">
          <h2 className="text-3xl font-semibold mb-8">About Me</h2>

          <div className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10 space-y-4">
            <p className="text-gray-300 leading-relaxed">
              I&apos;m a DevOps engineer focused on building reliable, automated
              cloud infrastructure. I specialise in designing Infrastructure as
              Code with Terraform, orchestrating containerised workloads on
              Kubernetes, and creating CI/CD pipelines that ship code safely and
              fast.
            </p>
            <p className="text-gray-300 leading-relaxed">
              My day-to-day revolves around Azure — from provisioning scalable
              AKS clusters and networking to setting up monitoring with
              Prometheus and Grafana. I enjoy turning manual processes into
              repeatable, version-controlled automation.
            </p>
            <p className="text-gray-400 leading-relaxed">
              When I&apos;m not in the terminal, I&apos;m exploring new DevOps
              tooling, contributing to open-source projects, and sharpening my
              skills through hands-on labs and certifications.
            </p>
          </div>
        </Section>

        {/* PROJECTS */}
        <Section id="projects" className="py-24">
          <h2 className="text-3xl font-semibold mb-10">Projects</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-cyan-400/40 hover:scale-[1.03] transition-all duration-300"
              >
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <ExternalLink
                    size={16}
                    className="text-gray-500 group-hover:text-cyan-400 transition-colors mt-1"
                  />
                </div>
                <p className="text-gray-400 mt-3 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-400/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </Section>

        {/* SKILLS */}
        <Section id="skills" className="py-24">
          <h2 className="text-3xl font-semibold mb-10">Tech Stack</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((cat) => (
              <div
                key={cat.category}
                className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10"
              >
                <h3 className="text-sm font-semibold uppercase tracking-wider text-cyan-400 mb-4">
                  {cat.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-cyan-500/10 border border-cyan-400/20 rounded-lg text-cyan-300 text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* CONTACT */}
        <Section id="contact" className="py-24">
          <h2 className="text-3xl font-semibold mb-8">Get in Touch</h2>

          <div className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10 space-y-4">
            <p className="text-gray-300 leading-relaxed">
              I&apos;m open to freelance engagements, full-time DevOps roles and
              interesting collaboration opportunities. Feel free to reach out!
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="mailto:mathewpeters22@gmail.com"
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition text-gray-300 hover:text-white"
              >
                <Mail size={18} /> mathewpeters22@gmail.com
              </a>
              <a
                href="https://github.com/MattyPeters710"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition text-gray-300 hover:text-white"
              >
                <Github size={18} /> GitHub
              </a>
            </div>
          </div>
        </Section>

        {/* FOOTER */}
        <footer className="mt-20 py-8 border-t border-white/10 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Mathew Peters. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
}
