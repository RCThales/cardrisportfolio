"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeInAndSlideDownVariants } from "../../animations/animations";

const Skill = () => {
  return (
    <section id="projects" className="relative flex flex-col items-center justify-center p-20 pb-28 border border-gray-700 border-opacity-50 bg_image_magic  bg-gray-900 bg-opacity-30 h-full w-screen rounded-custom">
      <div className="w-fit flex justify-center flex-col items-center font-semibold relative">
        <h2 className="text-3xl m-8 font-bold">Projects</h2>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInAndSlideDownVariants}
          className="cool_title_underline"
        ></motion.div>
      </div>
      <div className=" grid just text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-center">
        <div className="w-[200px] h-[200px] my-8 bg-white rounded-2xl transition-all cursor-pointer hover:scale-105"></div>
        <div className="w-[200px] h-[200px] my-8 bg-gray-500 rounded-2xl  transition-all cursor-pointer hover:scale-105"></div>
        <div className="w-[200px] h-[200px] my-8 bg-red-400 rounded-2xl  transition-all cursor-pointer hover:scale-105"></div>
        <div className="w-[200px] h-[200px] my-8 bg-blue-400 rounded-2xl  transition-all cursor-pointer hover:scale-105"></div>
        <div className="w-[200px] h-[200px] my-8 bg-yellow-400 rounded-2xl  transition-all cursor-pointer hover:scale-105"></div>
        <div className="w-[200px] h-[200px] my-8 bg-orange-400 rounded-2xl  transition-all cursor-pointer hover:scale-105"></div>
        <div className="w-[200px] h-[200px] my-8 bg-slate-400 rounded-2xl  transition-all cursor-pointer hover:scale-105"></div>
        <div className="w-[200px] h-[200px] my-8 bg-pink-400 rounded-2xl  transition-all cursor-pointer hover:scale-105"></div>
      </div>
    </section>
  );
};

export default Skill;
