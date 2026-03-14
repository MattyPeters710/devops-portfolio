"use client";

import { useState } from "react";
import {
  Home,
  User,
  Briefcase,
  Mail,
  Menu,
  X,
  Wrench,
} from "lucide-react";

const navItems = [
  { name: "Home", icon: Home, id: "home" },
  { name: "About", icon: User, id: "about" },
  { name: "Projects", icon: Briefcase, id: "projects" },
  { name: "Skills", icon: Wrench, id: "skills" },
  { name: "Contact", icon: Mail, id: "contact" },
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="fixed top-5 left-5 z-50 md:hidden bg-white/10 backdrop-blur-lg p-3 rounded-xl border border-white/20"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Overlay for mobile */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          group fixed top-0 left-0 h-full z-40
          w-64 md:w-20 md:hover:w-64
          bg-white/5 backdrop-blur-xl border-r border-white/10
          flex flex-col pt-24 gap-2 px-4
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
            className="flex items-center gap-4 w-full px-3 py-3 rounded-xl
              hover:bg-cyan-400/20 transition-all duration-300 text-gray-300 hover:text-white"
          >
            <item.icon size={20} className="shrink-0" />
            <span className="whitespace-nowrap opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
              {item.name}
            </span>
          </a>
        ))}
      </aside>
    </>
  );
}
