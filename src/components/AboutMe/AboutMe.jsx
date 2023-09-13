"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeInAndSlideDownVariants } from "../../animations/animations";
import Image from "next/image";

const AboutMe = () => {
  return (
    <section id="aboutme" className="relative flex flex-col items-center justify-center p-20 pb-28 border border-gray-700 border-opacity-50 bg_image_magic bg-black glow bg-opacity-50 h-full w-screen rounded-custom">
      <div className="w-fit flex justify-center flex-col items-center font-semibold relative">
        <h2 className="text-3xl m-8 font-bold">About me</h2>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInAndSlideDownVariants}
          className="cool_title_underline"
        ></motion.div>
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
        I&apos;m a sound enthusiast, skilled in sound design, engineering, and
        music. I&apos;m all about diving into the exciting worlds of game and
        film sound creation. My goal? To craft mind-blowing sound experiences
        that truly grip people and make them a part of the story. It&apos;s all
        about bringing fresh, captivating sounds to the gaming and filmmaking
        scenes. 🎵🎮🎥
      </p>
    </section>
  );
};

export default AboutMe;
