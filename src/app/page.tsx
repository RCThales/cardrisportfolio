import VideoPlayer from "../components/VideoPlayer/VideoPlayer";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer"
import Image from "next/image";
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center pt-12">
      <Nav />

      <main className="relative w-screen flex flex-col items-center justify-center m-6 rounded-custom bg_image">
        <div className="sm:w-[80vw] lg:min-h-screen md:w-[80%] lg:max-w-[90%] lg:w-[60%] flex items-center flex-col">
          <VideoPlayer></VideoPlayer>
        </div>
      </main>

      <section className="relative flex flex-col items-center justify-center p-20 pb-28 bg-gray-900 border border-gray-700 border-opacity-50 bg-opacity-30 h-full w-screen rounded-custom">
        <div className="w-fit flex justify-center flex-col items-center font-semibold relative">
          <h2 className="text-3xl m-8 font-bold">Resumé</h2>
          <div className="cool_title_underline"></div>
        </div>

        <div className="flex justify-center items-center">
          <a
            href={
              "https://firebasestorage.googleapis.com/v0/b/thalescardrisportfol.appspot.com/o/THALESCARDRISRESUME.pdf?alt=media&token=dd4816d2-ff1d-459d-9ecd-69897de47434"
            }
            target="_blank"
            download={"Thales_Cardris_Resume.pdf"}
            className="bg-red-500 p-8 rounded-2xl text-2xl transition-all hover:scale-105 active:scale-95 text-center"
          >
            CLICK TO SEE 📄
          </a>
        </div>
      </section>

      <section className="relative flex flex-col items-center justify-center p-20 pb-28 border border-gray-700 border-opacity-50 bg_image_magic bg-black glow bg-opacity-50 h-full w-screen rounded-custom">
        <div className="w-fit flex justify-center flex-col items-center font-semibold relative">
          <h2 className="text-3xl m-8 font-bold">About me</h2>
          <div className="cool_title_underline"></div>
        </div>

        <div className="flex justify-center items-center glow">
          <Image
            width={300}
            height={300}
            alt="Thales Cardris picture"
            className="rounded-xl"
            src="https://firebasestorage.googleapis.com/v0/b/thalescardrisportfol.appspot.com/o/profile%20thales.jpeg?alt=media&token=bce3e0dd-5507-47be-a0f3-b0fd81eeac3f"
          ></Image>
        </div>

        <p className="max-w-[80%] w-[600px] text-center pt-8">
          I'm a sound enthusiast, skilled in sound design, engineering, and
          music. I'm all about diving into the exciting worlds of game and film
          sound creation. My goal? To craft mind-blowing sound experiences that
          truly grip people and make them a part of the story. It's all about
          bringing fresh, captivating sounds to the gaming and filmmaking
          scenes. 🎵🎮🎥
        </p>
      </section>

      <section className="relative flex flex-col items-center justify-center p-20 pb-28 border border-gray-700 border-opacity-50  bg-gray-900 bg-opacity-30 h-full w-screen rounded-custom">
        <div className="w-fit flex justify-center flex-col items-center font-semibold relative">
          <h2 className="text-3xl m-8 font-bold">Skills</h2>
          <div className="cool_title_underline"></div>
        </div>

        <ul className="max-w-[80%] w-[600px] text-center pt-8">
          <li className="font-bold">SOUND</li>
          <li>REAPER</li>
          <li>Midi Programming</li>
          <li>VSTi</li>
          <li>Foley</li>
          <li>Mixing</li>
          <li>Mastering</li>
          <li>Fmod</li>
          <li>Wwise</li>
          <br />
          <li className="font-bold">MUSIC</li>
          <li>Music Composition</li>
          <li>Singing professionaly (high tenor)</li>
          <li>Guitar (Acoustic and Electric)</li>
          <li>Bass</li>
          <br />
          <li className="font-bold">DEVELOPMENT</li>
          <li>Javascript Programming</li>
          <li>C# Programming</li>
          <li>REACT</li>
          <li>UNITY</li>
        </ul>
      </section>

      <Footer></Footer>
    </div>
  );
}
