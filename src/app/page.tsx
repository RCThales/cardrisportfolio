import VideoPlayer from "../components/VideoPlayer/VideoPlayer"


export default function Home() {
  
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-12">
      <nav className="z-10 max-w-5xl w-full items-center justify-between text-sm lg:flex">
        <div className="pointer-events-none flex-col flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0 justify-center items-center">
          <h1 className="font-bold text-[2.4rem]">THALES CARDRIS</h1>
          <h2 className="font-light text-[.95rem]">
            Musician | Sound Engineer | Sound Designer
          </h2>
        </div>
        <div className="text-[1.2rem] flex items-center justify-center gap-2 p-8 lg:pointer-events-auto lg:p-0">
          Language:
          <select className="rounded bg-black hover:cursor-pointer">
            <option value="">English </option>
            <option value="">French</option>
          </select>
        </div>
      </nav>

      <main className="relative flex flex-col items-center justify-center m-24 rounded-custom">
        <div className="sm:w-[95vw] md:w-[90%] lg:max-w-[90%] lg:w-[90%]">
          <VideoPlayer></VideoPlayer>
        </div>
      </main>

      <footer className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-center">
        <a
          href="https://www.linkedin.com/in/thalesrodriguescardoso/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors text-center hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Linkedin{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 text-sm opacity-50`}>Access my Linkedin Profile</p>
        </a>
        <a
          href="mailto:contact@thalescardris.com"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors text-center hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Email{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 text-sm opacity-50 break-words`}>Click to send me an email, or use the chat on the right</p>
        </a>
      </footer>
    </div>
  );
}
