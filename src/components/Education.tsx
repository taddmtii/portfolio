import EducationCard from "./EducationCard";

const educations = [
  {
    dateRange: "2022 - 2026",
    universityName: "Southern Adventist University",
    degree: "BA Computer Science",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="border-t border-[#343a45] py-18 md:py-24"
    >
      <div className="mb-6">
        <span className="text-xs font-semibold text-[#9dc5ff]">
          03 / EDUCATION
        </span>
        <h2 className="mt-2 text-4xl font-semibold text-[#f2f4f8]">
          Education
        </h2>
      </div>
      <div>
        {educations.map((education) => (
          <EducationCard key={education.degree} {...education} />
        ))}
      </div>
    </section>
  );
}