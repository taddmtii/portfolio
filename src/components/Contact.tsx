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
    <section
      id="contact"
      className="scroll-mt-5 py-[94px] max-[720px]:py-[72px]"
    >
      <div className="mb-[38px] flex items-end justify-between gap-[35px] border-b border-[#343a45] pb-12 max-[720px]:flex-col max-[720px]:items-start max-[720px]:pb-[35px]">
        <div>
          <h2 className="text-[clamp(2.2rem,4vw,3.4rem)] leading-[.98] tracking-[-.065em] text-[#f2f4f8]">
            Let's work together.
          </h2>
          <p className="mt-[15px] text-[14px] text-[#9da4af]">
            Have an idea or opportunity? I'd love to hear about it.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 max-[720px]:w-full">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.download ? undefined : "_blank"}
              rel={link.download ? undefined : "noopener noreferrer"}
              download={link.download}
              aria-label={link.label}
              className="grid size-14 place-items-center rounded-[7px] border border-[#424a57] text-[#d8dde5] transition-colors hover:border-[#9dc5ff] hover:bg-[#202837] hover:text-[#9dc5ff]"
            >
              <link.icon size={20} />
            </a>
          ))}
        </div>
      </div>
      <footer className="flex justify-between pb-[34px] text-[12px] text-[#7d8591] max-[720px]:flex-col max-[720px]:gap-2.5">
        <span>© 2026 Tadd Trumbull</span>
        <span>Built with React and Typescript</span>
      </footer>
    </section>
  );
}
