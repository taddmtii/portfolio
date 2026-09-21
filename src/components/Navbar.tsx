import { Github, Linkedin } from "lucide-react";

const navLinks = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <nav className="nav" id="home">
      <a className="brand" href="#home"><span className="brand-mark">TT</span>Tadd Trumbull</a>
      <div className="nav-links">
        {navLinks.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
      </div>
      <div className="nav-socials">
            <a
              href="https://github.com/taddmtii/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 text-white/40 transition-colors duration-200 hover:bg-white/5 hover:text-[#60a5fa]"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/tadd-trumbull-ii-7228a2300/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 text-white/40 transition-colors duration-200 hover:bg-white/5 hover:text-[#60a5fa]"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
      </div>
    </nav>
  );
}
