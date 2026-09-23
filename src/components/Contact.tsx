import { FileUser, Github, Linkedin, Mail } from "lucide-react";
import resume from "../assets/tadd_trumbull_resume.pdf";

const contactLinks = [
  { icon: Mail, label: "Email", href: "mailto:taddtrumbullii@gmail.com" },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/tadd-trumbull-ii-7228a2300/",
  },
  { icon: Github, label: "GitHub", href: "https://github.com/taddmtii" },
  {
    icon: FileUser,
    label: "Resume",
    href: resume,
    download: "Tadd_Resume.pdf",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-18 md:py-24">
      <div className="mb-10 flex flex-col items-center gap-9 border-b border-[#343a45] pb-9 text-center md:flex-row md:items-end md:justify-between md:pb-12 md:text-left">
        <div>
          <h2 className="text-4xl font-semibold text-[#f2f4f8]">
            Say hi.
          </h2>
          <p className="mt-4 text-sm text-[#9da4af]">
            I'm always up for a chat, collaboration, or a good idea.
          </p>
        </div>
        <div className="flex w-full flex-wrap justify-center gap-3 md:w-auto">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.download ? undefined : "_blank"}
              rel={link.download ? undefined : "noopener noreferrer"}
              download={link.download}
              aria-label={link.label}
              className="flex size-14 items-center justify-center rounded border border-[#424a57] text-[#d8dde5] hover:border-[#9dc5ff] hover:bg-[#202837] hover:text-[#9dc5ff]"
            >
              <link.icon size={20} />
            </a>
          ))}
        </div>
      </div>
      <footer className="flex flex-col items-center gap-2 pb-9 text-center text-xs text-[#7d8591] md:flex-row md:justify-between md:text-left">
        <span>© 2026 Tadd Trumbull</span>
        <span>Built with React and Typescript</span>
      </footer>
    </section>
  );
}