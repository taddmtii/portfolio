import { Github, Linkedin } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import avatar from "../assets/IMG_5451.jpeg";

export function Hero() {
  return (
    <div className="flex flex-col gap-7">
      <div className="flex items-center gap-7">
        <div className="avatar">
          <div className="ring-white ring-offset-base-100 md:w-24 w-20 rounded-full ring-2 ring-offset-2">
            <img src={avatar} alt="My Picture" />
          </div>
        </div>
        <div className="font-bold md:text-5xl text-4xl">
          <Typewriter
            words={["Hi, I'm Tadd."]}
            cursor
            typeSpeed={125}
            cursorBlinking={true}
          />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <p className="md:text-xl text-md opacity-50">
          Aspiring Software Engineer
        </p>
        <div>
          <a target="_blank" href="https://github.com/taddmtii">
            <button className="btn w-14 btn-ghost opacity-50 hover:bg-info">
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
        <p className="md:text-xl md:text-left text-center text-md opacity-50">
          Building all sorts of things with many modern technologies.
          Passionate about full-stack web development, continuous learning, and great user
          experience.
        </p>
        <br />
      </div>
    </div>
  );
}
