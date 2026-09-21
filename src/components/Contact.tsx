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
    <section id="contact" className="section contact-section">
      <div className="contact"><div className="contact-inner"><div><h2>Let's work together.</h2><p>Have an idea or opportunity? I'd love to hear about it.</p></div><div className="contact-links">
        {contactLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.download ? undefined : "_blank"}
            rel={link.download ? undefined : "noopener noreferrer"}
            download={link.download}
            className="contact-link"
          >
            <link.icon size={20} />
          </a>
        ))}
      </div></div></div>
      <footer className="footer"><span>© 2026 Tadd Trumbull</span><span>Built with React and Typescript</span></footer>
    </section>
  );
}
