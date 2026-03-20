import "./App.css";
import { Hero } from "./components/Hero";
import Experience from "./components/Experience";
import { TerminalCard } from "./components/TerminalCard";
import { Projects } from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <div className="flex w-full items-center justify-center">
        <div className="flex flex-col w-full max-w-6xl mx-auto px-8 py-20">
          <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
            <Hero />
            <TerminalCard />
          </div>
          <div className="divider my-20"></div>
          <Experience />
          <div className="divider my-20"></div>
          <Projects />
          <div className="divider my-20"></div>
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
