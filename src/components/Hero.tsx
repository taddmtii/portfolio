import { Github, Linkedin } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import avatar from "../assets/avatar.png";

export function Hero() {
    return (
        <div className="flex flex-col gap-7">
            <div className="flex items-center gap-7">
                <div className="avatar">
                    <div className="ring-white ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
                        <img src={avatar} alt="My Picture" />
                    </div>
                </div>
                <div className="font-bold text-5xl">
                    <Typewriter
                        words={["Hi, I'm Tadd."]}
                        cursor
                        typeSpeed={125}
                        cursorBlinking={true}
                    />
                </div>
            </div>
            <div className="flex items-center gap-4">
                <p className="text-xl opacity-50">Aspiring Software Engineer</p>
                <div className="btn btn-ghost">
                    <a target="_blank" href="https://github.com/taddmtii">
                        <Github size={20} />
                    </a>
                </div>
                <div className="btn btn-ghost">
                    <a
                        target="_blank"
                        href="https://www.linkedin.com/in/tadd-trumbull-ii-7228a2300/"
                    >
                        <Linkedin size={20} />
                    </a>
                </div>
            </div>
            <div>
                <p className="text-xl opacity-50">
                    Building all sorts of things with many modern technologies.
                    Passionate about continuous learning and great user
                    experience.
                </p>
            </div>
            <div className="flex flex-row gap-2">
                <div className="badge badge-lg badge-accent">Python</div>
                <div className="badge badge-lg badge-accent">C++</div>
                <div className="badge badge-lg badge-accent">React</div>
                <div className="badge badge-lg badge-accent">TypeScript</div>
                <div className="badge badge-lg badge-accent">C#</div>
            </div>
        </div>
    );
}
