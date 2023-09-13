"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeInAndSlideDownVariants } from "../../animations/animations";

const Resume = () => {
  return (
    <section
      id="resume"
      className="relative flex flex-col items-center justify-center py-40 pb-48 bg-gray-900 border border-gray-700 border-opacity-50 bg-opacity-30 h-full w-screen rounded-custom"
    >
      <div className="w-fit flex justify-center flex-col items-center font-semibold relative">
        <h2 className="text-3xl m-8 font-bold">Resumé</h2>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInAndSlideDownVariants}
          className="cool_title_underline"
        ></motion.div>
      </div>

      <div className="flex justify-center items-center">
        <a
          href={
            "https://firebasestorage.googleapis.com/v0/b/thalescardrisportfol.appspot.com/o/THALESCARDRISRESUME.pdf?alt=media&token=dd4816d2-ff1d-459d-9ecd-69897de47434"
          }
          target="_blank"
          download={"Thales_Cardris_Resume.pdf"}
          className="bg-purple-800 glow p-8 rounded-2xl max-w-[80vw] min-w-[180px] text-1xl transition-all hover:scale-105 active:scale-95 text-center"
        >
          CLICK TO SEE 📄
        </a>
      </div>
    </section>
  );
};

export default Resume;
