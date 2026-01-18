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
                    description="Built data automation pipeline with Python and SQL to streamline business operations for 700+ users. Focused on extracting company data from Teradata and constructed several GraphQL queries."
                    technologies={["Python", "SQL", "GraphQL"]}
                />
                <ExperienceCard
                    dateRange="2024"
                    positionName="Software Engineer Intern"
                    company="Southern Adventist University"
                    description="Reengineered an internal faculty planning tool using ASP.NET Core Blazor, modernizing both the backend architecture and UI/UX. Gained hands-on experience with full-stack development using C# and server-side rendering."
                    technologies={["C#", "ASP.NET", "SQL", "HTML", "CSS"]}
                />
            </div>
        </>
    );
}
