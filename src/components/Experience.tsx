import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  return (
    <>
      <div className="flex flex-col gap-8">
        <h1 className="font-bold text-3xl">Experience</h1>
        <ExperienceCard
          dateRange="June 2026 - Present"
          positionName="Associate Software Engineer"
          description="Developing and maintaining .NET APIs for quote software."
          company="Unum"
          technologies={["C#", ".NET", "REST APIs"]}
        />
        <ExperienceCard
          dateRange="March 2025 - June 2026"
          positionName="Scholar Intern"
          description="Maintain and optimize financial platforms while developing automation solutions."
          company="Unum"
          technologies={["Python", "SQL", "GraphQL"]}
        />
        <ExperienceCard
          dateRange="June 2024 - August 2024"
          positionName="Software Engineer Intern"
          description="Modernized internal academic platform by refactoring legacy tool."
          company="Southern Adventist University"
          technologies={["C#", ".NET", "SQL"]}
        />
      </div>
    </>
  );
}
