import "./App.css";
import Header from "./components/Header";
import { BrowserRouter } from "react-router";
import { Hero } from "./components/Hero";
import { Divider } from "./components/Divider";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import { TerminalCard } from "./components/TerminalCard";
import ExperienceCard from "./components/ExperienceCard";

function App() {
    return (
        <>
            <BrowserRouter>
                <div className="sticky top-0 left-0 w-full">
                    <Header />
                </div>
                <div className="flex w-screen justify-center">
                    <div className="flex flex-col w-[80vw] items-center">
                        <div className="flex flex-row">
                            <Hero />
                            <TerminalCard />
                        </div>
                        <Divider />
                        <AboutMe />
                        <Divider />
                        <div className="flex flex-col gap-8">
                            <Experience />
                            <ExperienceCard
                                dateRange="2025 - Present"
                                positionName="Scholar Intern"
                                company="Unum"
                                description="Built data automation pipeline with Python and SQL to streamline business operations for 700+ users. Focused on extracting company data from Teradata and constructed several GraphQL queries."
                                technologies={["Python", "SQL", "GraphQL"]}
                            />
                            <ExperienceCard
                                dateRange="2024"
                                positionName="Software Engineer Intern"
                                company="Southern Adventist University"
                                description="Reengineered an internal faculty planning tool using ASP.NET Core Blazor, modernizing both the backend architecture and UI/UX. Gained hands-on experience with full-stack development using C# and server-side rendering."
                                technologies={[
                                    "C#",
                                    "ASP.NET",
                                    "SQL",
                                    "HTML",
                                    "CSS",
                                ]}
                            />
                        </div>
                        <Divider />
                    </div>
                </div>
            </BrowserRouter>
        </>
    );
}

export default App;
