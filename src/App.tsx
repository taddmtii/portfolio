import "./App.css";
import Header from "./components/Header";
import { BrowserRouter } from "react-router";
import { Hero } from "./components/Hero";
import { Divider } from "./components/Divider";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import { TerminalCard } from "./components/TerminalCard";

function App() {
    return (
        <>
            <BrowserRouter>
                <div className="sticky top-0 left-0 w-full">
                    <Header />
                </div>
                <div className="flex w-screen items-center justify-center">
                    <div className="flex flex-col w-full max-w-6xl mx-auto px-6 py-20">
                        <div className="flex flex-col md:flex-row gap-12 items-start">
                            <Hero />
                            <TerminalCard />
                        </div>
                        <Divider />
                        <AboutMe />
                        <Divider />
                        <Experience />
                        <Divider />
                    </div>
                </div>
            </BrowserRouter>
        </>
    );
}

export default App;
