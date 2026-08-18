import { useTypewriter, Cursor } from "react-simple-typewriter";

export function Hero() {

  const [text] = useTypewriter({
    words: ["Hello, I'm Tadd."],
    loop: 1
  })

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col items-center gap-5">
        <span className="md:text-lg gradient-text text-md">Software Engineer</span>
        <div className="flex items-center gap-7">
          <div className="font-bold md:text-5xl text-4xl">
            <span className="gradient-text">{text}</span>
            <Cursor cursorColor="#60a5fa" cursorBlinking={true} />
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
    </div>
  );
}
