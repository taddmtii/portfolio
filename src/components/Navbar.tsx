

export default function Navbar() {
    return (
        <div className="flex bg-black/80 justify-between px-10 items-center top-0 w-full h-20" id="home">
            <div>
                <a className="font-semibold" href="#home">Tadd Trumbull</a>
            </div>
            <div className="flex gap-2">
                <div className="flex gap-2">
                    <a href="#experience">Experience</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </div>
                <div>
                    {/* Icons */}
                </div>
            </div>
        </div>
    )
}