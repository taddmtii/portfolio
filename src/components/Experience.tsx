import ExperienceCard from "./ExperienceCard";

const experiences = [
  {
    dateRange: "June 2026 - Present",
    positionName: "Associate Software Engineer",
    description: "Developing and maintaining .NET APIs for quote software.",
    company: "Unum",
    technologies: ["C#", ".NET", "AWS"],
  },
  {
    dateRange: "March 2025 - June 2026",
    positionName: "Scholar Intern",
    description:
      "Maintain and optimize financial platforms while developing automation solutions.",
    company: "Unum",
    technologies: ["Python", "SQL", "GraphQL"],
  },
  {
    dateRange: "June 2024 - August 2024",
    positionName: "Software Engineer Intern",
    description:
      "Modernized internal academic platform by refactoring legacy tool.",
    company: "Southern Adventist University",
    technologies: ["C#", ".NET", "SQL"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-5 border-t border-[#343a45] py-24 max-md:py-18"
    >
      <div className="mb-10 max-md:mb-8">
        <span className="text-xs font-semibold tracking-[.13em] text-[#9dc5ff] uppercase">
          01 / Experience
        </span>
        <h2 className="mt-2 text-[clamp(2rem,3.4vw,2.85rem)] leading-none tracking-[-.06em] text-[#f2f4f8]">
          Making software
          <br />
          that matters.
        </h2>
      </div>
      <div>
        {experiences.map((experience) => (
          <ExperienceCard
            key={`${experience.company}-${experience.positionName}`}
            {...experience}
          />
        ))}
      </div>
    </section>
  );
}
