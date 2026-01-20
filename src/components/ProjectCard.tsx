import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
    name: string;
    thumbnail: string;
    link: string;
    description: string;
}

export default function ProjectCard({
    name,
    thumbnail,
    link,
    description,
}: ProjectCardProps) {
    return (
        <>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure className="h-50">
                    <img
                        className="min-h-60 max-h-60 min-w-100 max-w-100"
                        src={thumbnail}
                        alt={name}
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <a href={link} target="_blank">
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
