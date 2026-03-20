import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  name: string;
  link: string;
  description: string;
  technologies: string[];
}

export default function ProjectCard({
  name,
  link,
  description,
  technologies,
}: ProjectCardProps) {
  return (
    <>
      <div className="card bg-[#2D2D2D] md:w-96 w-full shadow-lg">
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <div className="flex flex-row gap-2">
            {technologies.map((tech) => {
              return (
                <div
                  key={tech}
                  className="badge badge-sm badge-outline badge-accent"
                >
                  {tech}
                </div>
              );
            })}
          </div>
          <div className="card-actions justify-end">
            <a href={link} target="_blank">
              <button className="btn btn-accent">
                <ArrowUpRight />
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
