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
      className="scroll-mt-5 border-t border-[#343a45] py-24 max-md:py-18"
    >
      <div className="mb-6">
        <span className="text-xs font-semibold tracking-[.13em] text-[#9dc5ff] uppercase">
          03 / Education
        </span>
        <h2 className="mt-2 text-[clamp(2rem,3vw,2.6rem)] leading-none tracking-[-.06em] text-[#f2f4f8]">
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
