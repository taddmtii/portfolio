import { Github, Linkedin } from "lucide-react";
import { Link } from "react-router";

export function Header() {
    return (
        <>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <Link to="/">
                        <a className="btn btn-ghost text-xl">TT</a>
                    </Link>
                </div>
                <div className="navbar-center">
                    <ul className="menu menu-horizontal">
                        <li>
                            <Link to="/">
                                <a>Home</a>
                            </Link>
                        </li>
                        <li>
                            <Link to="/aboutme">
                                <a>About Me</a>
                            </Link>
                        </li>
                        <li>
                            <Link to="/projects">
                                <a>Projects</a>
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact">
                                <a>Contact</a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end gap-2">
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
            </div>
        </>
    );
}
