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
      rel="noopener noreferrer"
      aria-label={`View ${name} on GitHub`}
      className="flex min-h-[225px] flex-col justify-between border border-[#363d49] bg-[#1b1e25] p-5 no-underline transition-colors hover:border-[#5677a4] hover:bg-[#1e222b] group"
    >
      <div className="flex items-start justify-between">
        <span className="text-[11px] tracking-[.08em] text-[#77808e]">
          0{index}
        </span>
        <ArrowUpRight size={20} className="text-[#9dc5ff]" />
      </div>
      <div>
        <h3 className="mt-[30px] mb-[9px] text-[21px] tracking-[-.05em] text-[#ebedf2] transition-colors group-hover:text-[#9dc5ff]">
          {name}
        </h3>
        <p className="max-w-[350px] text-[13px] leading-[1.65] text-[#a2a9b4]">
          {description}
        </p>
      </div>
      <div className="flex flex-wrap gap-[7px]">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-[5px] border border-[#3b4350] px-2 py-1 text-[11px] font-[550] text-[#aeb5c0]"
          >
            {tech}
          </span>
        ))}
        {inProgress && (
          <span className="rounded-[5px] border border-[#4a6386] px-2 py-1 text-[11px] font-[550] text-[#9dc5ff]">
            In progress
          </span>
        )}
      </div>
    </a>
  );
}
