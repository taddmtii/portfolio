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
                    <div className="flex flex-col w-[80vw] items-center">
                        <div className="flex flex-row">
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
