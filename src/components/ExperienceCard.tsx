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
      <div className="flex p-10 flex-row shadow-lg bg-[#252525] rounded-2xl w-full md:h-45">
        <div className="flex flex-col gap-3">
          <div>
            <div className="flex items-center gap-2">
              <div className="font-bold text-lg">{positionName}</div>
              <div>•</div>
              <div className="text-info">{company}</div>
            </div>
            <div className="flex md:block w-50 opacity-50 shrink-0">
              <span>{dateRange}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex mt-2 opacity-50">{description}</div>
            </div>
          </div>
          <div className="flex flex-row gap-2">
            {technologies.map((tech) => {
              return (
                <div
                  key={tech}
                  className="badge badge-md badge-outline badge-info"
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
