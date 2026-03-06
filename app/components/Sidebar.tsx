"use client";

import { useState } from "react";
import { Home, User, Briefcase, Mail, Menu } from "lucide-react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const items = [
    { name: "Home", icon: <Home size={20} />, link: "#" },
    { name: "About", icon: <User size={20} />, link: "#about" },
    { name: "Projects", icon: <Briefcase size={20} />, link: "#projects" },
    { name: "Contact", icon: <Mail size={20} />, link: "#contact" },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="fixed top-5 left-5 z-50 md:hidden bg-white/10 backdrop-blur-lg p-2 rounded-lg"
        onClick={() => setOpen(!open)}
      >
        <Menu size={24} />
      </button>

      {/* Sidebar */}
      <div
        className={`
        fixed top-0 left-0 h-full z-40
        bg-white/5 backdrop-blur-xl
        border-r border-white/10
        transition-all duration-300
        ${open ? "w-64" : "w-20"}
        md:w-20 md:hover:w-64
        `}
      >
        <div className="flex flex-col mt-20 space-y-6 px-4">

          {items.map((item, i) => (
            <a
              key={i}
              href={item.link}
              className="flex items-center gap-4 p-3 rounded-xl
              hover:bg-cyan-400/20 transition-all duration-300"
            >
              {item.icon}

              <span
                className={`
                whitespace-nowrap
                transition-all duration-300
                ${open ? "opacity-100" : "opacity-0 md:group-hover:opacity-100"}
                `}
              >
                {item.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}