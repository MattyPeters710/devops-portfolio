"use client";

import { motion } from "framer-motion";
import Hero3D from "./components/Hero3D";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden">

      {/* 3D Background */}
      <Hero3D />

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl">

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text"
        >
          Mathew Peters
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-xl text-gray-300"
        >
          DevOps Engineer specializing in Azure, Terraform, Kubernetes and cloud automation.
          I build scalable, automated infrastructure for modern cloud teams.
        </motion.p>

        <div className="mt-8 flex gap-4 flex-wrap justify-center">
          <a
            href="/resume.pdf"
            className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold shadow-lg transition"
          >
            📄 Download Resume
          </a>

          <a
            href="mailto:mathewpeters22@gmail.com"
            className="px-6 py-3 rounded-xl border border-gray-500 hover:border-cyan-400 transition"
          >
            ✉️ Contact Me
          </a>
        </div>

      </div>

      {/* Tech Stack Section */}
      <section className="py-20 px-6 grid md:grid-cols-3 gap-6 max-w-6xl w-full mt-20 relative z-10">

        {["Azure", "Terraform", "Kubernetes"].map((tech, index) => (
          <motion.div
            key={tech}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:scale-105 transition duration-300"
          >
            <h3 className="text-xl font-semibold">{tech}</h3>
            <p className="text-gray-400 mt-2">
              Building scalable and automated cloud infrastructure using {tech}.
            </p>
          </motion.div>
        ))}

      </section>

    </main>
  );
}