import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 py-4 transition-all duration-300 ${
        scrolled ? "glass" : "bg-transparent"
      }`}
    >
      <a href="#home" className="text-xl font-bold gradient-text">
        Umair.dev
      </a>
      <ul className="hidden md:flex gap-8 text-sm text-gray-300">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="hover:text-white transition-colors relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-full transition-all duration-300" />
            </a>
          </li>
        ))}
      </ul>
      <a
        href="#contact"
        className="text-sm px-4 py-2 rounded-full glass glow-border hover:scale-105 transition-transform"
      >
        Let's talk
      </a>
    </motion.nav>
  );
}