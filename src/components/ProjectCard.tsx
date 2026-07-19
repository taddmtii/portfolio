import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  name: string;
  link: string;
  description: string;
  technologies: string[];
  inProgress: boolean;
}

export default function ProjectCard({
  name,
  link,
  description,
  technologies,
  inProgress
}: ProjectCardProps) {
  return (
    <>
      <div className="card md:w-105 w-full shadow-lg">
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <div className="flex flex-col gap-2">
          <div className="flex flex-row gap-2">
            {technologies.map((tech) => {
              return (
                <div
                  key={tech}
                  className="badge badge-sm badge-outline badge-info"
                >
                  {tech}
                </div>
              );
            })}
            </div>
            {inProgress && (
              <div className="badge badge-sm badge-outline badge-warning">In Progress</div>
            )}
          </div>
          <div className="card-actions justify-end">
            <a href={link} target="_blank" rel="noopener noreferrer">
              <button className="btn btn-info">
                <ArrowUpRight />
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
