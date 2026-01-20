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
            <div className="card bg-base-100 md:w-96 w-full shadow-sm">
                <figure className="h-50">
                    <img
                        className="md:min-h-60 md:max-h-60 md:min-w-100 md:max-w-100 max-h-100"
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
