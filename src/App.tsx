import { Hero } from "./components/Hero";
import Experience from "./components/Experience";
import { Projects } from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Education from "./components/Education";

function App() {
  return (
    <div className="min-h-screen bg-[#17191f]">
      <Navbar />
      <main className="mx-auto max-w-250 px-6 max-md:px-4">
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
