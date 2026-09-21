import { ArrowDownRight, FileText } from "lucide-react";
import resume from "../assets/tadd_trumbull_resume.pdf";

export function Hero() {
  const skills = [
    { label: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
    { label: "Go", icon: "https://cdn.simpleicons.org/go/00ADD8" },
    { label: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" },
    { label: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
    { label: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
    { label: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
    { label: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
    { label: ".NET", icon: "https://cdn.simpleicons.org/dotnet/512BD4" },
  ];

  return (
    <section className="hero">
      <div>
        <div className="eyebrow">Software engineer</div>
        <h1>Building useful things for the <em>real world.</em></h1>
        <p className="hero-copy">I'm Tadd, a full-stack developer who enjoys turning complicated systems into clear, thoughtful experiences.</p>
        <div className="hero-actions"><a className="button primary" href="#projects">View projects <ArrowDownRight size={17} /></a><a className="button" href={resume} download="Tadds_Resume.pdf"><FileText size={16} /> Download resume</a></div>
      </div>
      <aside className="hero-aside" aria-label="Core technologies">
        <span className="skills-label">Core stack</span>
        <div className="skills-grid">
          {skills.map(({ label, icon }) => <div className="skill" key={label}><img src={icon} alt="" /><span>{label}</span></div>)}
        </div>
      </aside>
    </section>
  );
}
