"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

export const dynamic = "force-dynamic";

const Hero3D = dynamic(() => import("./components/Hero3D"), {
  ssr: false,
});

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">

      {/* 3D BACKGROUND */}
      <div className="fixed inset-0 -z-10">
        <Hero3D />
      </div>

      {/* MOBILE MENU BUTTON */}
      <button
        className="md:hidden fixed top-5 left-5 z-50 bg-white/10 p-3 rounded-lg"
        onClick={() => setOpen(!open)}
      >
        {open ? "✕" : "☰"}
      </button>

      {/* SIDEBAR */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-64 bg-white/5 backdrop-blur-lg border-r border-white/10
          transform transition-transform duration-300 z-40
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        <div className="pt-24 px-6 space-y-6">
          <a href="#home" className="block hover:text-cyan-400">Home</a>
          <a href="#about" className="block hover:text-cyan-400">About</a>
          <a href="#projects" className="block hover:text-cyan-400">Projects</a>
          <a href="#skills" className="block hover:text-cyan-400">Skills</a>
          <a href="#contact" className="block hover:text-cyan-400">Contact</a>
        </div>
      </aside>

      {/* CONTENT */}
      <div className="md:ml-64 px-6 py-24 space-y-32 relative z-10">

        <section id="home" className="min-h-screen flex items-center justify-center">
          <h1 className="text-6xl font-bold">Mathew Peters</h1>
        </section>

        <section id="about">
          <h2 className="text-3xl mb-4">About</h2>
          <p>DevOps Engineer specializing in Azure, Terraform and Kubernetes.</p>
        </section>

        <section id="projects">
          <h2 className="text-3xl mb-4">Projects</h2>
          <p>Cloud automation and infrastructure projects.</p>
        </section>

        <section id="skills">
          <h2 className="text-3xl mb-4">Skills</h2>
          <p>Azure, Terraform, Kubernetes, Docker, CI/CD.</p>
        </section>

        <section id="contact">
          <h2 className="text-3xl mb-4">Contact</h2>
          <p>mathewpeters22@gmail.com</p>
        </section>

      </div>
    </div>
  );
}