import ProjectCard from "./ProjectCard";

export function Projects() {
  return (
    <>
      <div className="flex flex-col gap-8">
        <h1 className="font-bold text-3xl">Projects</h1>
        <div className="flex flex-col items-center md:flex-row gap-8 md:justify-evenly">
          <ProjectCard
            name="Code Visualizer"
            link="https://github.com/taddmtii/CodeVisualizer"
            description="
            General code visualization tool with emphasis on array operations utilizing custom made language."
            technologies={["React", "TypeScript", "Nearley"]}
          />
          <ProjectCard
            name="Cadence"
            link="https://github.com/taddmtii/Cadence"
            description="
            Full-stack task management, habit tracking, and accountability app."
            technologies={["React", "TypeScript", "PostgreSQL"]}
          />
        </div>
        <div className="flex flex-col items-center md:flex-row gap-8 md:justify-evenly">
          <ProjectCard
            name="Nuclear Simulator"
            link="https://github.com/taddmtii/NuclearSimulator"
            description="Simulates nuclear power plant operations using live external API data."
            technologies={["React", "TypeScript"]}
          />
          <ProjectCard
            name="Samurai Sprint"
            link="https://github.com/taddmtii/Samurai-Sprint"
            description="A 2D platformer passion project where you play as a Samurai."
            technologies={["Godot", "GDScript"]}
          />
        </div>
        <div className="flex flex-col items-center md:flex-row gap-8 md:justify-evenly">
          <ProjectCard
            name="FlowFinder"
            link="https://github.com/taddmtii/FlowFinder"
            description="Web application to provide users with insights into their Spotify usage and statistics."
            technologies={["Python", "Flask", "HTML"]}
          />
          <ProjectCard
            name="CareerConnector"
            link="https://github.com/taddmtii/CareerConnector"
            description="Job listing web application. Create, view, and manage job postings with a user-friendly interface."
            technologies={["C#", "SQLite", "ASP.NET"]}
          />
        </div>
      </div>
    </>
  );
}
