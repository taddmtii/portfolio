import { FileUser, Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
    return (
        <>
            <div className="flex items-center flex-col gap-8">
                <h1 className="font-bold text-3xl">Let's Connect</h1>
                <p className="max-w-xl text-center text-xl mx-auto opacity-50">
                    I'm always interested in hearing about new opportunities,
                    collaborations, or just chatting about tech.
                </p>
                <div className="flex p-10 flex-col border border-[#323544] justify-between gap-2 shadow-md bg-[#252839] rounded-2xl w-[70%] h-70">
                    <div className="flex justify-evenly">
                        <a
                            className="flex p-5 hover:cursor-pointer duration-300 ease-in border border-[#323544] shadow-md bg-[#252839] hover:bg-[#3dd4ce] rounded-2xl w-[40%] h-20"
                            href="mailto:taddtrumbullii@gmail.com"
                            target="_blank"
                        >
                            <div className="flex items-center gap-4 w-full">
                                <Mail size={20} />
                                <div className="flex flex-col">
                                    <p>Email</p>
                                    <p className="text-sm opacity-50">
                                        taddtrumbullii@gmail.com
                                    </p>
                                </div>
                            </div>
                        </a>

                        <a
                            className="flex p-5 hover:cursor-pointer duration-300 ease-in border border-[#323544] shadow-md bg-[#252839] hover:bg-[#3dd4ce] rounded-2xl w-[40%] h-20"
                            href="https://www.linkedin.com/in/tadd-trumbull-ii-7228a2300/"
                            target="_blank"
                        >
                            <div className="flex items-center gap-4 w-full">
                                <Linkedin size={20} />
                                <div className="flex flex-col">
                                    <p>Linkedin</p>
                                    <p className="text-sm opacity-50">
                                        @tadd-trumbull-ii
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="flex justify-evenly">
                        <a
                            className="flex p-5 hover:cursor-pointer duration-300 ease-in border border-[#323544] shadow-md bg-[#252839] hover:bg-[#3dd4ce] rounded-2xl w-[40%] h-20"
                            href="https://github.com/taddmtii"
                            target="_blank"
                        >
                            <div className="flex items-center gap-4 w-full">
                                <Github size={20} />
                                <div className="flex flex-col">
                                    <p>GitHub</p>
                                    <p className="text-sm opacity-50">
                                        @taddmtii
                                    </p>
                                </div>
                            </div>
                        </a>

                        <a
                            className="flex p-5 hover:cursor-pointer duration-300 ease-in border border-[#323544] shadow-md bg-[#252839] hover:bg-[#3dd4ce] rounded-2xl w-[40%] h-20"
                            href="/assets/tadd_trumbull_ii_resume.pdf"
                            download="Tadd_Resume.pdf"
                        >
                            <div className="flex items-center gap-4 w-full">
                                <FileUser size={20} />
                                <div className="flex flex-col">
                                    <p>Resume</p>
                                    <p className="text-sm opacity-50">
                                        Download Resume
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="text-sm opacity-50">
                    © 2026 Tadd Trumbull. Built with React and Tailwind CSS.
                </div>
            </div>
        </>
    );
}
