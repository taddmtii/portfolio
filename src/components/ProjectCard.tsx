import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  name: string;
  link: string;
  description: string;
  technologies: string[];
  inProgress: boolean;
  index: number;
}

export default function ProjectCard({
  name,
  link,
  description,
  technologies,
  inProgress,
  index,
}: ProjectCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      className="flex min-h-55 flex-col justify-between gap-6 border border-[#363d49] bg-[#1b1e25] p-5 hover:border-[#5677a4] hover:bg-[#1e222b]"
    >
      <div className="flex items-start justify-between">
        <span className="text-xs text-[#77808e]">0{index}</span>
        <ArrowUpRight size={20} className="text-[#9dc5ff]" />
      </div>
      <div>
        <h3 className="mb-2 text-xl text-[#ebedf2] hover:text-[#9dc5ff]">
          {name}
        </h3>
        <p className="max-w-88 text-sm text-[#a2a9b4]">{description}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="rounded border border-[#3b4350] px-2 py-1 text-xs font-medium text-[#aeb5c0]"
          >
            {tech}
          </span>
        ))}
        {inProgress && (
          <span className="rounded border border-[#4a6386] px-2 py-1 text-xs font-medium text-[#9dc5ff]">
            In progress
          </span>
        )}
      </div>
    </a>
  );
}