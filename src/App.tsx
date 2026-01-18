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
                <Header />
                <div className="flex flex-row">
                    <Hero />
                    <TerminalCard />
                </div>

                <Divider />
                <AboutMe />
                <Divider />
                <Experience />
                <Divider />
            </BrowserRouter>
        </>
    );
}

export default App;
