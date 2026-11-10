import { MapPin } from "lucide-react";

interface ExperienceCardProps {
  dateRange: string;
  positionName: string;
  description: string;
  company: string;
  location: string;
  technologies: string[];
}

export default function ExperienceCard({
  dateRange,
  positionName,
  description,
  company,
  location,
  technologies,
}: ExperienceCardProps) {
  return (
  <article className="flex flex-col gap-3 border-t border-[#343a45] px-4 py-7 transition-colors duration-200 hover:border-blue-300/40 hover:bg-blue-300/5 motion-reduce:transition-none md:flex-row md:gap-7 md:px-6">
    <span className="shrink-0 text-xs text-[#7f8793] md:w-40">
      {dateRange}
    </span>
    <div>
      <h3 className="text-lg text-[#e9ecf1]">
        {positionName}
        <span className="ml-2 text-sm font-medium text-[#9dc5ff]">
          / {company}
        </span>
      </h3>
      <p className="mt-2 flex items-center gap-2 text-xs text-[#7f8793]">
        <MapPin className="size-3 shrink-0" aria-hidden="true" />
        {location}
      </p>
      <p className="mt-3 mb-4 max-w-170 text-sm text-[#a8afba]">
        {description}
      </p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="rounded border border-[#3b4350] px-2 py-1 text-xs font-medium text-[#aeb5c0]"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </article>
  );
}
