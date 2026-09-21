import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  name: string;
  link: string;
  description: string;
  technologies: string[];
  inProgress: boolean;
  index: number;
}

export default function ProjectCard({
  name,
  link,
  description,
  technologies,
  inProgress,
  index,
}: ProjectCardProps) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="project-card" aria-label={`View ${name} on GitHub`}>
      <div className="project-top"><span className="project-index">0{index}</span><ArrowUpRight className="project-arrow" size={20} /></div>
      <div><h3>{name}</h3><p>{description}</p></div>
      <div className="tags">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="tag"
            >
              {tech}
            </span>
          ))}
          {inProgress && (
            <span className="tag status">
              In progress
            </span>
          )}
      </div>
    </a>
  );
}
