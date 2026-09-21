import { ArrowDownRight, FileText } from "lucide-react";
import resume from "../assets/tadd_trumbull_resume.pdf";

const skills = [
  {
    label: "TypeScript",
    icon: "https://cdn.simpleicons.org/typescript/3178C6",
  },
  { label: "Go", icon: "https://cdn.simpleicons.org/go/00ADD8" },
  {
    label: "C#",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
  },
  { label: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
  { label: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
  {
    label: "AWS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  },
  { label: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
  { label: ".NET", icon: "https://cdn.simpleicons.org/dotnet/512BD4" },
];

export function Hero() {
  return (
    <section className="grid min-h-[33.75rem] grid-cols-[1fr_17.125rem] items-center gap-12 py-19 pb-23 max-md:min-h-0 max-md:grid-cols-1 max-md:gap-12 max-md:py-19 max-md:pb-20">
      <div>
        <div className="flex items-center gap-2.5 text-xs font-semibold tracking-[.13em] text-[#9dc5ff] uppercase before:h-px before:w-6 before:bg-current before:content-['']">
          Software engineer
        </div>
        <h1 className="mt-5 mb-6 max-w-[45rem] text-[clamp(3.2rem,6vw,5.7rem)] font-[620] leading-[.98] tracking-[-.075em] text-[#f2f4f8]">
          Building useful things for the{" "}
          <em className="not-italic text-[#9dc5ff]">real world.</em>
        </h1>
        <p className="max-w-[35.625rem] text-[1.0625rem] leading-[1.7] text-[#aeb4be] max-md:text-sm">
          I'm Tadd, a full-stack developer who enjoys turning complicated
          systems into clear, thoughtful experiences.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 border border-[#9dc5ff] bg-[#9dc5ff] px-4 py-3 text-[13px] font-semibold text-[#152033] no-underline transition-colors hover:bg-[#b3d4ff]"
          >
            View projects <ArrowDownRight size={17} />
          </a>
          <a
            href={resume}
            download="Tadds_Resume.pdf"
            className="inline-flex items-center gap-2 border border-[#3b4351] px-4 py-3 text-[13px] font-semibold text-[#e9ecf1] no-underline transition-colors hover:border-[#687993] hover:bg-[#20242d]"
          >
            <FileText size={16} /> Download resume
          </a>
        </div>
      </div>
      <aside
        aria-label="Core technologies"
        className="self-center max-md:w-full max-md:max-w-[26.875rem]"
      >
        <span className="mb-3 block text-[.625rem] font-semibold tracking-[.1em] text-[#7f8793] uppercase">
          Core stack
        </span>
        <div className="grid grid-cols-2 gap-2">
          {skills.map(({ label, icon }) => (
            <div
              className="flex min-h-11 items-center gap-2 border border-[#363d49] p-2 text-xs font-medium text-[#c0c6d0]"
              key={label}
            >
              <img
                src={icon}
                alt=""
                className="size-[1.125rem] object-contain"
              />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </aside>
    </section>
  );
}
