import ProjectCard from "./ProjectCard";

export function Projects() {
    return (
        <>
            <div className="flex flex-col gap-8">
                <h1 className="font-bold text-3xl">Projects</h1>
                <div className="flex flex-col items-center md:flex-row gap-8 md:justify-evenly">
                    <ProjectCard
                        name="ArrayViz"
                        thumbnail="https://github.com/user-attachments/assets/fdf39753-8bc7-40fb-8337-0016d53ad0bc"
                        link="https://github.com/taddmtii/ArrayViz"
                        description="Visualization of array operations and sorting algorithms utilizing custom made language. Created using React and Typescript."
                    />
                    <ProjectCard
                        name="Samurai Sprint"
                        thumbnail="https://github.com/user-attachments/assets/b3432a23-c114-4fe9-93f1-9150c17c1724"
                        link="https://github.com/taddmtii/Samurai-Sprint"
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
                        description="Web application built with ASP.NET Razor Pages, C# and SQlite."
                    />
                </div>
            </div>
        </>
    );
}
