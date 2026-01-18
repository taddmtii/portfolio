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
            <div className="flex flex-row justify-center bg-[#252839] rounded-2xl w-[80%]">
                <div>{dateRange}</div>
                <div className="flex flex-col">
                    <div>{positionName}</div>
                    <div>{company}</div>
                    <div>{description}</div>
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
