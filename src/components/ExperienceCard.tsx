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
  <div className="flex flex-col gap-3 border-t border-[#343a45] py-7 md:flex-row md:gap-7">
    <span className="text-xs text-[#7f8793] md:w-40 ">
      {dateRange}
    </span>
    <div>
      <h3 className="text-lg text-[#e9ecf1]">
        {positionName}
        <span className="ml-2 text-sm font-medium text-[#9dc5ff]">
          / {company}
        </span>
      </h3>
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
  </div>
  );
}
