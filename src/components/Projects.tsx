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
    description: "A live insight dashboard for your Spotify listening stats.",
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
    description: "A 2D platformer passion project where you play as a Samurai.",
    technologies: ["Godot", "GDScript"],
    inProgress: false,
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-5 border-t border-[#343a45] py-24 max-md:py-18"
    >
      <div className="mb-10 max-md:mb-8">
        <span className="text-xs font-semibold tracking-[.13em] text-[#9dc5ff] uppercase">
          02 / Projects
        </span>
        <h2 className="mt-2 text-[clamp(2rem,3.4vw,2.85rem)] leading-none tracking-[-.06em] text-[#f2f4f8]">
          Cool stuff
          <br />I have built.
        </h2>
      </div>
      <div className="grid grid-cols-3 gap-3 max-md:grid-cols-1">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} index={index + 1} {...project} />
        ))}
      </div>
    </section>
  );
}
