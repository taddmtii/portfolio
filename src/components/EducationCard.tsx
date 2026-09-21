interface EducationCardProps {
  dateRange: string;
  universityName: string;
  degree: string;
}

export default function EducationCard({
  dateRange,
  universityName,
  degree
}: EducationCardProps) {
  return (
    <article className="education-card">
      <span className="date">{dateRange}</span>
      <div>
        <h3>{degree}</h3>
        <p>{universityName}</p
      ></div>
      <span className="degree-mark">↗</span>
    </article>
  );
}
