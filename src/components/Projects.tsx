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
    <section id="projects" className="section">
      <div className="section-heading"><div><span className="section-kicker">02 / Projects</span><h2>Cool stuff<br />I have built.</h2></div></div>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.name}
              index={projects.indexOf(project) + 1}
              name={project.name}
              link={project.link}
              description={project.description}
              technologies={project.technologies}
              inProgress={project.inProgress}
            />
          ))}
        </div>
    </section>
  );
}
