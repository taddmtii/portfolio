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
      <main className="mx-auto w-[min(72.5rem,calc(100%_-_3rem))] max-md:w-[min(72.5rem,calc(100%_-_2rem))]">
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
