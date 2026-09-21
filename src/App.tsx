import "./App.css";
import { Hero } from "./components/Hero";
import Experience from "./components/Experience";
import { Projects } from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Education from "./components/Education";

function App() {
  return (
    <div className="site-shell">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
    </div>
  );
}

export default App;
