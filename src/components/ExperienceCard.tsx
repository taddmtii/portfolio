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
    <>
      <div className="flex p-10 flex-row shadow-lg bg-[#2D2D2D] rounded-2xl w-full md:h-45">
        <div className="flex flex-col gap-3">
          <div>
            <div className="flex items-center gap-2">
              <div className="font-bold text-lg">{positionName}</div>
              <div className="text-muted-foreground">•</div>
              <div className="opacity-50 text-green">{company}</div>
            </div>
            <div className="flex md:block opacity-50 w-50 shrink-0">
              <span>{dateRange}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-muted-foreground">•</div>
              <div className="opacity-50">{description}</div>
            </div>
          </div>
          <div className="flex flex-row gap-2">
            {technologies.map((tech) => {
              return (
                <div
                  key={tech}
                  className="badge badge-md badge-outline badge-accent"
                >
                  {tech}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
