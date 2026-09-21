import { Github, Linkedin } from "lucide-react";

const navLinks = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <nav
      id="home"
      className="mx-auto flex h-21 w-[min(72.5rem,calc(100%_-_3rem))] items-center justify-between max-md:h-[4.625rem] max-md:w-[min(72.5rem,calc(100%_-_2rem))]"
    >
      <a
        href="#home"
        className="flex items-center gap-2.5 font-bold tracking-[-.04em] text-[#f2f4f8] no-underline"
      >
        <span className="grid size-7 place-items-center rounded-md border border-[#50617d] text-xs tracking-[-.06em] text-[#9dc5ff]">
          TT
        </span>
        Tadd Trumbull
      </a>
      <div className="flex items-center gap-5 max-md:hidden">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm text-[#9298a5] no-underline transition-colors hover:text-[#9dc5ff]"
          >
            {link.label}
          </a>
        ))}
      </div>
      <div className="flex items-center gap-1">
        <a
          href="https://github.com/taddmtii/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="grid size-9 place-items-center rounded-md text-[#aab0bb] transition-colors hover:bg-[#20242d] hover:text-[#f2f4f8]"
        >
          <Github size={18} />
        </a>
        <a
          href="https://www.linkedin.com/in/tadd-trumbull-ii-7228a2300/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="grid size-9 place-items-center rounded-md text-[#aab0bb] transition-colors hover:bg-[#20242d] hover:text-[#f2f4f8]"
        >
          <Linkedin size={18} />
        </a>
      </div>
    </nav>
  );
}
