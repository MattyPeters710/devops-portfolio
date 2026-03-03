"use client";

import { motion } from "framer-motion";
import Hero3D from "./components/Hero3D";

export default function Home() {
  return (
    <main className="relative min-h-screen flex overflow-hidden">

      {/* 3D Background */}
      <Hero3D />

      {/* LEFT GLASS SIDEBAR */}
      <aside className="hidden md:flex flex-col justify-center gap-6 px-8 py-10 bg-white/5 backdrop-blur-xl border-r border-white/10 w-64 min-h-screen fixed">
        <a href="#home" className="hover:text-cyan-400 transition">Home</a>
        <a href="#about" className="hover:text-cyan-400 transition">About</a>
        <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
        <a href="#skills" className="hover:text-cyan-400 transition">Skills</a>
        <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
      </aside>

      {/* MAIN CONTENT */}
      <div className="flex-1 md:ml-64 px-6 py-20 relative z-10">

        {/* HERO SECTION */}
        <section id="home" className="min-h-screen flex flex-col justify-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text"
          >
            Mathew Peters
          </motion.h1>

          <p className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto">
            DevOps Engineer building scalable Azure infrastructure using Terraform,
            Kubernetes and CI/CD automation.
          </p>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-20">
          <h2 className="text-3xl font-semibold mb-6">About Me</h2>
          <div className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10">
            <p className="text-gray-300 leading-relaxed">
              I specialize in designing and automating cloud infrastructure.
              My focus is on Infrastructure as Code, cloud networking, Kubernetes
              deployments and reducing MTTR through automation.
            </p>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-20">
          <h2 className="text-3xl font-semibold mb-10">Projects</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Terraform Azure Infrastructure",
              "Kubernetes Microservices Deployment",
              "CI/CD Pipeline Automation",
              "Terraform Drift Detection Tool"
            ].map((project) => (
              <div
                key={project}
                className="p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:scale-105 transition duration-300"
              >
                <h3 className="text-xl font-semibold">{project}</h3>
                <p className="text-gray-400 mt-3">
                  Built production-ready infrastructure with automation, monitoring,
                  and scalability best practices.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="py-20">
          <h2 className="text-3xl font-semibold mb-8">Tech Stack</h2>

          <div className="flex flex-wrap gap-4">
            {[
              "Azure",
              "Terraform",
              "Kubernetes",
              "Docker",
              "GitHub Actions",
              "Linux",
              "Helm",
              "Monitoring"
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-cyan-500/10 border border-cyan-400/30 rounded-xl text-cyan-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-20">
          <h2 className="text-3xl font-semibold mb-6">Contact</h2>
          <div className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10">
            <p>Email: mathewpeters22@gmail.com</p>
            <p className="mt-2">Available for freelance and full-time roles.</p>
          </div>
        </section>

      </div>
    </main>
  );
}