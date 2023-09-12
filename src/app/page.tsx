import VideoPlayer from "../components/VideoPlayer/VideoPlayer";
import  Nav  from "../components/Nav/Nav"
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-12">
      <Nav />

      <main className="relative flex flex-col items-center justify-center m-6 rounded-custom">
        <h2 className="text-3xl m-10 font-bold">My Demo Reels</h2>
        <div className="sm:w-[95vw] md:w-[90%] lg:max-w-[90%] lg:w-[90%]">
          <VideoPlayer></VideoPlayer>
        </div>
      </main>

      <main className="relative flex flex-col items-center justify-center m-12 rounded-custom">
        <h2 className="text-3xl m-10 font-bold opacity-70">Resumé</h2>
        <div className="flex justify-center items-center">
          <a
            href={
              "https://firebasestorage.googleapis.com/v0/b/thalescardrisportfol.appspot.com/o/THALESCARDRISRESUME.pdf?alt=media&token=dd4816d2-ff1d-459d-9ecd-69897de47434"
            }
            target="_blank"
            download={"Thales_Cardris_Resume.pdf"}
            className="bg-red-500 p-12 rounded-2xl text-2xl transition-all hover:scale-105 active:scale-95"
          >
            OPEN PDF 📄
          </a>
        </div>
      </main>

      <footer className="py-24 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-center">
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
          href="https://www.instagram.com/thalescardris/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors text-center hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Instagram{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 text-sm opacity-50`}>
            Access my Instagram Profile
          </p>
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
          <p className={`m-0 text-sm opacity-50 break-words`}>
            Click to send me an email, or use the chat on the right
          </p>
        </a>
      </footer>
    </div>
  );
}
