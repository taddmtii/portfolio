import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  name: string;
  link: string;
  description: string;
  technologies: string[];
  inProgress: boolean;
}

export default function ProjectCard({
  name,
  link,
  description,
  technologies,
  inProgress,
}: ProjectCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors duration-200 hover:border-white/20 md:p-8">
      <div className="flex flex-col gap-2">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-semibold text-white/90 md:text-xl">
            {name}
          </h3>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-white/40 transition-colors duration-200 hover:text-[#60a5fa]"
            aria-label={`View ${name} on GitHub`}
          >
            <ArrowUpRight size={18} />
          </a>
        </div>

        <p className="text-sm leading-relaxed text-white/50 md:text-base">
          {description}
        </p>

        <div className="mt-2 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-white/60"
            >
              {tech}
            </span>
          ))}
          {inProgress && (
            <span className="rounded-md border border-amber-500/30 bg-amber-500/10 px-2.5 py-1 text-xs font-medium text-amber-400">
              In Progress
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
