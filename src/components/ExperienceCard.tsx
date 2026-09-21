interface ExperienceCardProps {
  dateRange: string;
  positionName: string;
  description: string;
  company: string;
  technologies: string[];
}

export default function ExperienceCard({
  dateRange,
  positionName,
  description,
  company,
  technologies,
}: ExperienceCardProps) {
  return (
    <article className="grid grid-cols-[10.75rem_1fr] gap-7 border-t border-[#343a45] py-7 max-md:grid-cols-1 max-md:gap-3">
      <span className="text-xs leading-[1.5] text-[#7f8793]">{dateRange}</span>
      <div>
        <h3 className="m-0 text-lg tracking-[-.035em] text-[#e9ecf1]">
          {positionName}
          <span className="ml-2 text-sm font-medium text-[#9dc5ff]">
            / {company}
          </span>
        </h3>
        <p className="mt-3 mb-4 max-w-[42.5rem] text-sm leading-[1.6] text-[#a8afba]">
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
