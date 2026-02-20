import ProjectCard from "./ProjectCard";

export function Projects() {
  return (
    <>
      <div className="flex flex-col gap-8">
        <h1 className="font-bold text-3xl">Projects</h1>
        <div className="flex flex-col items-center md:flex-row gap-8 md:justify-evenly">
          <ProjectCard
            name="CodeLens"
            thumbnail="https://github.com/user-attachments/assets/fdf39753-8bc7-40fb-8337-0016d53ad0bc"
            link="https://github.com/taddmtii/CodeLens"
            description="
            General code visualization tool with emphasis on array operations utilizing custom made language PyViz. Created primarily using React and Typescript."
          />
          <ProjectCard
            name="Cadence"
            thumbnail="https://github.com/user-attachments/assets/4ed8daff-c1e2-4271-9a0e-a3b0de834252"
            link="https://github.com/taddmtii/Cadence"
            description="
            Full-stack habit tracking and accountability app built with Next.js, React, TypeScript, NestJS, and PostgreSQL."
          />
        </div>
        <div className="flex flex-col items-center md:flex-row gap-8 md:justify-evenly">
          <ProjectCard
            name="Nuclear Simulator"
            thumbnail="https://github.com/user-attachments/assets/b278419b-c8d1-4968-9abe-aa5c3395ed23"
            link="https://github.com/taddmtii/NuclearSimulator"
            description="React and TypeScript application that simulates nuclear power plant operations using live external API data. Displays plant metrics in a clean, interactive UI."
          />
          <ProjectCard
            name="Samurai Sprint"
            thumbnail="https://github.com/user-attachments/assets/b3432a23-c114-4fe9-93f1-9150c17c1724"
            link="https://github.com/taddmtii/NuclearSimulator"
            description="A 2D platformer game made with Godot Engine and GDScript, a scripting language similar to Python and Typescript."
          />
        </div>
        <div className="flex flex-col items-center md:flex-row gap-8 md:justify-evenly">
          <ProjectCard
            name="FlowFinder"
            thumbnail="https://github.com/user-attachments/assets/2a6b7c57-8fd1-4d87-8a49-074d03516399"
            link="https://github.com/taddmtii/FlowFinder"
            description="Web application built with Python and Flask to provide users with insights into thier Spotify usage and statistics."
          />
          <ProjectCard
            name="CareerConnector"
            thumbnail="https://github.com/taddmtii/CareerConnector/assets/122894305/3d68e774-d821-4ad7-b016-815d2f69b18e"
            link="https://github.com/taddmtii/CareerConnector"
            description="Job listing web application. Built with ASP.NET Razor Pages, C#, and SQLite.
            Supports creating, viewing, and managing job postings with a user-friendly interface."
          />
        </div>
      </div>
    </>
  );
}
