import ProjectCard from "./ProjectCard";

const projects = [
    {
    name: "RunBench",
    link: "https://github.com/taddmtii/RunBench",
    description:
      "Personal coding practice platform for solving algorithm problems in the browser",
    technologies: ["React", "TypeScript", "Go"],
    inProgress: true,
  },
  {
    name: "Soundprint",
    link: "https://github.com/taddmtii/Soundprint",
    description:
      "A live insight dashboard for your Spotify listening stats.",
    technologies: ["React", "TypeScript", "PostgreSQL"],
    inProgress: false,
  },
  {
    name: "Code Visualizer",
    link: "https://github.com/taddmtii/CodeVisualizer",
    description:
      "General code visualization tool with emphasis on array operations utilizing custom made language.",
    technologies: ["React", "TypeScript", "Nearley"],
    inProgress: false,
  },
  {
    name: "Cadence",
    link: "https://github.com/taddmtii/Cadence",
    description:
      "Full-stack task management, habit tracking, and accountability app.",
    technologies: ["React", "TypeScript", "PostgreSQL"],
    inProgress: false,
  },
  {
    name: "Nuclear Simulator",
    link: "https://github.com/taddmtii/NuclearSimulator",
    description:
      "Simulates nuclear power plant operations using live external API data.",
    technologies: ["React", "TypeScript"],
    inProgress: false,
  },
  {
    name: "Samurai Sprint",
    link: "https://github.com/taddmtii/Samurai-Sprint",
    description:
      "A 2D platformer passion project where you play as a Samurai.",
    technologies: ["Godot", "GDScript"],
    inProgress: false,
  },
];

export function Projects() {
  return (
    <>
      <div className="flex flex-col gap-8">
        <h1 className="font-bold text-3xl" id="projects">Projects</h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.name}
              name={project.name}
              link={project.link}
              description={project.description}
              technologies={project.technologies}
              inProgress={project.inProgress}
            />
          ))}
        </div>
      </div>
    </>
  );
}
