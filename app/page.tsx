"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const Hero3D = dynamic(() => import("./components/Hero3D"), {
  ssr: false,
});

export default function Home() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Skills", id: "skills" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <main className="relative min-h-screen flex bg-black text-white overflow-hidden">
      
      {/* 3D BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Hero3D />
      </div>

      {/* MOBILE MENU BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden fixed top-5 left-5 z-50 bg-white/10 backdrop-blur-lg p-3 rounded-xl border border-white/20"
      >
        {open ? "✕" : "☰"}
      </button>

      {/* SIDEBAR */}
      <aside
        className={`
          group
          fixed md:static top-0 left-0 h-full w-64 md:w-20 md:hover:w-64
          bg-white/5 backdrop-blur-xl border-r border-white/10
          flex flex-col pt-24 gap-6 px-4 z-40
          transform transition-all duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={() => setOpen(false)}
            className="flex items-center gap-4 w-full px-3 py-3 rounded-lg hover:bg-white/10 transition-all duration-300"
          >
            <span className="whitespace-nowrap opacity-100 md:opacity-0 md:group-hover:opacity-100 transition">
              {item.name}
            </span>
          </a>
        ))}
      </aside>

      {/* MAIN CONTENT */}
      <div className="flex-1 md:ml-20 px-6 py-20 relative z-20">

        {/* HOME */}
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

          <p className="mt-6 text-xl text-gray-300 max-w-2xl">
            DevOps Engineer building scalable Azure infrastructure using
            Terraform, Kubernetes and CI/CD automation.
          </p>
        </section>

        {/* ABOUT */}
        <section id="about" className="py-24">
          <h2 className="text-3xl font-semibold mb-8">About Me</h2>

          <div className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10">
            <p className="text-gray-300">
              DevOps engineer focused on Infrastructure as Code, Kubernetes,
              cloud automation and scalable Azure environments.
            </p>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-24">
          <h2 className="text-3xl font-semibold mb-10">Projects</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Terraform Azure Infrastructure",
              "Kubernetes Microservices",
              "CI/CD Automation Pipeline",
              "Drift Detection System",
            ].map((project) => (
              <div
                key={project}
                className="p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:scale-105 transition duration-300"
              >
                <h3 className="text-xl font-semibold">{project}</h3>
                <p className="text-gray-400 mt-3">
                  Production-grade cloud automation project.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="py-24">
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

        {/* CONTACT */}
        <section id="contact" className="py-24">
          <h2 className="text-3xl font-semibold mb-6">Contact</h2>

          <div className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10">
            <p className="text-gray-300">📧 mathewpeters22@gmail.com</p>
            <p className="mt-3 text-gray-400">
              Open to freelance and DevOps opportunities.
            </p>
          </div>
        </section>

      </div>
    </main>
  );
}