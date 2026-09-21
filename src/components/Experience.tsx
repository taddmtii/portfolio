import ExperienceCard from "./ExperienceCard";

const experiences = [
  {
    dateRange: "June 2026 - Present",
    positionName: "Associate Software Engineer",
    description: "Developing and maintaining .NET APIs for quote software.",
    company: "Unum",
    technologies: ["C#", ".NET", "AWS"]
  },
  {
    dateRange: "March 2025 - June 2026",
    positionName: "Scholar Intern",
    description: "Maintain and optimize financial platforms while developing automation solutions.",
    company: "Unum",
    technologies: ["Python", "SQL", "GraphQL"]
  }, 
  {
    dateRange: "June 2024 - August 2024",
    positionName: "Software Engineer Intern",
    description: "Modernized internal academic platform by refactoring legacy tool.",
    company: "Southern Adventist University",
    technologies: ["C#", ".NET", "SQL"]
  }
]

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section-heading">
        <div>
          <span className="section-kicker">01 / Experience</span>
          <h2>Making software<br />that matters.</h2>
        </div>
      </div>
      <div className="experience-list">
        {experiences.map((exp) => (
          <ExperienceCard
            key={`${exp.company}-${exp.positionName}`}
            dateRange={exp.dateRange}
            positionName={exp.positionName}
            description={exp.description}
            company={exp.company}
            technologies={exp.technologies}
          />
        ))}
      </div>
    </section>
  );
}
