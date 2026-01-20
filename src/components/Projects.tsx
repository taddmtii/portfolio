import { ArrowRight } from "lucide-react";

export default function Projects() {
    return (
        <>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                        src="https://github.com/user-attachments/assets/b3432a23-c114-4fe9-93f1-9150c17c1724"
                        alt="SamuraiSprint"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Samurai Sprint</h2>
                    <p>
                        A 2D platformer game made with Godot Engine and
                        GDScript, a scripting language similar to Python and
                        Typescript.
                    </p>
                    <div className="card-actions justify-end">
                        <a href="https://github.com/taddmtii/Samurai-Sprint">
                            <button className="btn btn-primary">
                                <ArrowRight />
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
