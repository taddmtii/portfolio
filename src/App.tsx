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
                <Header />
                <div className="flex w-screen justify-center">
                    <div className="flex flex-col w-[80vw] items-center">
                        <div className="flex flex-row">
                            <Hero />
                            <TerminalCard />
                        </div>
                        <Divider />
                        <AboutMe />
                        <Divider />
                        <Experience />
                        <div className="flex flex-col gap-8 justify-center">
                            <ExperienceCard
                                dateRange="March 2025 - Present"
                                positionName="Scholar Intern"
                                company="Unum"
                                description="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum "
                                technologies={["Python", "SQL", "GraphQL"]}
                            />
                            <ExperienceCard
                                dateRange="June 2024 - August 2024"
                                positionName="Software Engineer Intern"
                                company="Southern Adventist University"
                                description="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum "
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
