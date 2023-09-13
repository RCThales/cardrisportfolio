import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import Skill from "../components/Skill/Skill";
import Resume from "../components/Resume/Resume";
import Hero from "../components/Hero/Hero";
import Reel from "../components/Reel/Reel";
import Projects from "../components/Projects/Projects";
import AboutMe from "../components/AboutMe/AboutMe";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center pt-12">
      <select className="rounded z-[99999999] fixed left-5 bottom-5 text-1xl bg-black hover:cursor-pointer">
        <option value="">English</option>
        <option value="">French</option>
      </select>
      <Nav />
      <Hero></Hero>

      <Reel></Reel>
      <Projects></Projects>
      <Resume></Resume>
      <AboutMe></AboutMe>

      <Skill></Skill>
      <Footer></Footer>
    </div>
  );
}
