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
      <div className="card bg-[#252525] md:w-96 w-full shadow-lg">
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <div className="flex flex-row gap-2">
            {technologies.map((tech) => {
              return (
                <div
                  key={tech}
                  className="badge badge-sm badge-outline bg-info/10 badge-info"
                >
                  {tech}
                </div>
              );
            })}
          </div>
          <div className="card-actions justify-end">
            <a href={link} target="_blank">
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
