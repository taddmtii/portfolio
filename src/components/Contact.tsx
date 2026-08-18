import { FileUser, Github, Linkedin, Mail } from "lucide-react";
import resume from "../assets/tadd_trumbull_resume.pdf";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    sublabel: "taddtrumbullii@gmail.com",
    href: "mailto:taddtrumbullii@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    sublabel: "@tadd-trumbull-ii",
    href: "https://www.linkedin.com/in/tadd-trumbull-ii-7228a2300/",
  },
  {
    icon: Github,
    label: "GitHub",
    sublabel: "@taddmtii",
    href: "https://github.com/taddmtii",
  },
  {
    icon: FileUser,
    label: "Resume",
    sublabel: "Download PDF",
    href: resume,
    download: "Tadd_Resume.pdf",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="flex flex-col items-center gap-8">
      <h2 className="font-bold text-3xl">Let's Connect</h2>

      <p className="max-w-lg text-sm text-center text-white/50 md:text-base">
        I'm always interested in hearing about new opportunities,
        collaborations, or just chatting about tech.
      </p>

      <div className="flex gap-4">
        {contactLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.download ? undefined : "_blank"}
            rel={link.download ? undefined : "noopener noreferrer"}
            download={link.download}
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors duration-200 hover:border-white/20 md:p-8"
          >
            <div className="flex items-center gap-4">
              <link.icon
                size={20}
                className="shrink-0 text-white/40 transition-colors duration-200 group-hover:text-[#60a5fa]"
              />
            </div>
          </a>
        ))}
      </div>

      <p className="text-sm text-white/40">
        © 2026 Tadd Trumbull. Built with React and Tailwind CSS.
      </p>
    </section>
  );
}
