import ExperienceCard from "./ExperienceCard";

export default function Experience() {
    return (
        <>
            <div className="flex flex-col gap-8">
                <h1 className="font-bold text-3xl">Experience</h1>
                <ExperienceCard
                    dateRange="2025 - Present"
                    positionName="Scholar Intern"
                    company="Unum"
                    technologies={["Python", "SQL", "GraphQL"]}
                />
                <ExperienceCard
                    dateRange="2024"
                    positionName="Software Engineer Intern"
                    company="Southern Adventist University"
                    technologies={["C#", "ASP.NET", "SQL"]}
                />
            </div>
        </>
    );
}
