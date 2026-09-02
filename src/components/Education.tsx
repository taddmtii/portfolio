import EducationCard from "./EducationCard";

const educations = [
  {
    dateRange: "2022 - 2026",
    universityName: "Southern Adventist University",
    degree: "BA Computer Science"
  }
]

export default function Education() {
  return (
    <section id="experience" className="flex flex-col gap-8">
      <h2 className="font-bold text-3xl">Education</h2>
      <div className="flex flex-col gap-4">
        {educations.map((edu) => (
          <EducationCard
            key={`${edu.degree}`}
            dateRange={edu.dateRange}
            universityName={edu.universityName}
            degree={edu.degree}
          />
        ))}
      </div>
    </section>
  );
}
