"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeInAndSlideDownVariants } from "../../animations/animations";

const Skill = () => {
  return (
    <section
      id="skills"
      className="relative flex flex-col items-center gap-24 justify-center p-20 pb-28 border border-gray-700 border-opacity-50  bg-gray-900 bg-opacity-30 h-full w-screen rounded-custom"
    >
      <div className="w-fit flex justify-center flex-col items-center font-semibold relative">
        <h2 className="text-3xl m-8 font-bold">Skills</h2>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInAndSlideDownVariants}
          className="cool_title_underline"
        ></motion.div>
      </div>

      <ul className="max-w-[80%] w-[800px] flex flex-wrap justify-center gap-24 text-justify pt-8">
        <div>
          <li className="font-bold">MUSIC</li>
          <li>Composition</li>
          <li>Singing (high tenor)</li>
          <li>Guitar (Acoustic and Electric)</li>
          <li>Bass</li>
          <br />
        </div>
        <div>
          <li className="font-bold">SOUND DESIGN</li>
          <li>REAPER</li>
          <li>Midi</li>
          <li>VSTi</li>
          <li>Foley</li>
          <li>Mixing</li>
          <li>Mastering</li>
          <li>Fmod</li>
          <li>Wwise</li>
          <br />
        </div>
        <div>
          <li className="font-bold">SOFTWARE DEVELOPMENT</li>
          <li>Javascript Programming</li>
          <li>C# Programming</li>
          <li>REACT</li>
          <li>UNITY</li>
          <br />
        </div>
      </ul>
    </section>
  );
};

export default Skill;
