import { Github, Linkedin } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

export function Hero() {
  return (
    <div className="flex flex-col items-center gap-7">
      <div className="flex items-center gap-7">
        <div className="font-bold gradient-text md:text-5xl text-4xl">
          <Typewriter
            words={["Hi, I'm Tadd!"]}
            cursor
            typeSpeed={150}
            cursorBlinking={true}
          />
        </div>
      </div>
      <div className="flex items-center gap-2 md:justify-start justify-center">
        <p className="md:text-xl gradient-text text-md">Software Engineer</p>
        <div>
          <a target="_blank" href="https://github.com/taddmtii">
            <button className="btn glass-card w-14 btn-ghost opacity-50 hover:bg-info">
              <Github />
            </button>
          </a>
        </div>
        <div>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/tadd-trumbull-ii-7228a2300/"
          >
            <button className="btn w-14 btn-ghost opacity-50 hover:bg-info">
              <Linkedin />
            </button>
          </a>
        </div>
      </div>
      <div>
        <p className="md:text-xl md:max-w-xl text-center text-md opacity-50">
          Building all sorts of things with many modern technologies. Passionate
          about full-stack web development, continuous learning, and great user
          experience.
        </p>
        <br />
      </div>
    </div>
  );
}
