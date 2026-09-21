interface ExperienceCardProps {
  dateRange: string;
  positionName: string;
  description: string;
  company: string;
  technologies: string[];
}

export default function ExperienceCard({
  dateRange,
  positionName,
  description,
  company,
  technologies,
}: ExperienceCardProps) {
  return (
    <article className="experience-card">
      <span className="date">{dateRange}</span>
      <div className="experience-content">
        <h3>{positionName}<span className="company">/ {company}</span></h3>
        <p>{description}</p>
        <div className="tags">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="tag"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
