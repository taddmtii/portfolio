import { Github, Linkedin } from "lucide-react";

const navLinks = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <nav
      className="top-0 z-50 flex h-20 w-full items-center justify-center px-6 md:px-10"
      id="home"
    >
      <div className="flex max-w-5xl w-full items-center justify-between  px-8">
        <a
          href="#home"
          className="font-semibold text-white/90 transition-colors duration-200 hover:text-white"
        >
          Tadd Trumbull
        </a>

        <div className="flex items-center gap-4">
          <div className="items-center gap-4 hidden sm:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/50 transition-colors duration-200 hover:text-[#60a5fa]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="h-5 w-px bg-white/15" aria-hidden="true" />

          <div className="flex items-center gap-1">
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
        </div>
      </div>
    </nav>
  );
}
