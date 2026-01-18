export function Hero() {
    return (
        <div className="flex flex-col gap-7 w-lg h-lg">
            <h1 className="font-bold text-6xl">Tadd Trumbull</h1>
            <div>
                <p className="text-xl opacity-50">Aspiring Software Engineer</p>
            </div>
            <div>
                <p className="text-xl opacity-50">
                    Building all sorts of things with many modern technologies.
                    passionate about continuous learning and great user
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
