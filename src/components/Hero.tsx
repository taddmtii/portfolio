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
    <section className="flex min-h-dvh flex-col items-center justify-center gap-12 py-20 text-center md:min-h-135 md:flex-row md:justify-between md:text-left">
      <div>
        <div className="flex items-center justify-center gap-2 text-xs font-semibold text-[#9dc5ff] md:justify-start">
          SOFTWARE ENGINEER
        </div>
        <h1 className="my-6 max-w-180 text-6xl font-semibold text-[#f2f4f8]">
          Building useful things for the {" "}
          <span className="text-[#9dc5ff]">real world.</span>
        </h1>
        <p className="mx-auto max-w-135 text-sm text-[#aeb4be] md:mx-0 md:text-base">
          I'm Tadd, a full-stack developer who enjoys turning complicated
          systems into clear, thoughtful experiences.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
          <a
            href="#projects"
            className="flex items-center gap-2 border border-[#9dc5ff] bg-[#9dc5ff] px-4 py-3 text-xs font-semibold text-[#152033] hover:bg-[#b3d4ff]"
          >
            View projects <ArrowDownRight size={16} />
          </a>
          <a
            href={resume}
            download="tadd_trumbull_resume.pdf"
            className="flex items-center gap-2 border border-[#3b4351] px-4 py-3 text-xs font-semibold text-[#e9ecf1] hover:border-[#687993] hover:bg-[#20242d]"
          >
            <FileText size={16} /> Download resume
          </a>
        </div>
      </div>
      <aside className="w-full max-w-105 md:w-68 md:shrink-0">
        <span className="mb-3 block text-xs font-semibold text-[#7f8793]">
          CORE STACK
        </span>
        <div className="grid grid-cols-2 gap-2">
          {skills.map(({ label, icon }) => (
            <div
              className="flex min-h-11 items-center gap-2 border border-[#363d49] p-2 text-xs font-medium text-[#c0c6d0]"
              key={label}
            >
              <img src={icon} className="size-4" />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </aside>
    </section>
  );
}