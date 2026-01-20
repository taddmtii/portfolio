interface ExperienceCardProps {
    dateRange: string;
    positionName: string;
    company: string;
    description: string;
    technologies: string[];
}

export default function ExperienceCard({
    dateRange,
    positionName,
    company,
    description,
    technologies,
}: ExperienceCardProps) {
    return (
        <>
            <div className="flex p-10 flex-row border border-[#323544] shadow-md bg-[#252839] rounded-2xl w-full md:h-60 h-80">
                <div className="hidden md:block opacity-50 w-20 shrink-0">
                    {dateRange}
                </div>
                <div className="flex flex-col gap-3 md:pl-15">
                    <div>
                        <div className="font-bold text-lg">{positionName}</div>
                        <div className="opacity-50 text-accent">{company}</div>
                    </div>
                    <div className="opacity-50">{description}</div>
                    <div className="flex flex-row gap-2">
                        {technologies.map((tech) => {
                            return (
                                <div
                                    key={tech}
                                    className="badge badge-lg badge-accent"
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
