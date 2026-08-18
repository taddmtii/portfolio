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
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors duration-200 hover:border-white/20 md:p-8">
      <div className="flex flex-col gap-2">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <h3 className="text-lg font-semibold text-white/90 md:text-xl">
            {positionName}
          </h3>
          <span className="hidden text-white/20 md:inline">·</span>
          <span className="text-[#60a5fa]">{company}</span>
        </div>

        <p className="text-sm text-white/40">{dateRange}</p>
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
        </div>
      </div>
    </div>
  );
}
