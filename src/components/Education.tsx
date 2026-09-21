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
    <section id="education" className="section">
      <div className="section-heading compact-heading">
        <div>
          <span className="section-kicker">03 / Education</span>
          <h2>Education</h2>
        </div>
      </div>
      <div>
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
