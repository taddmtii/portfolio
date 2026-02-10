import "./App.css";
import { Hero } from "./components/Hero";
import { Divider } from "./components/Divider";
import Experience from "./components/Experience";
import { TerminalCard } from "./components/TerminalCard";
import { Projects } from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <>

      <div className="animated-gradient-bg fixed inset-0 -z-10" />
      <div className="flex w-screen items-center justify-center">
        <div className="flex flex-col w-full max-w-6xl mx-auto px-6 py-20">
          <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
            <Hero />
            <TerminalCard />
          </div>
          <Divider />
          <Experience />
          <Divider />
          <Projects />
          <Divider />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
