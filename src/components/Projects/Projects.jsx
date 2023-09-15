"use client";

import React from "react";
import { Spotify } from "react-spotify-embed";
import { motion } from "framer-motion";
import { fadeInAndSlideDownVariants } from "../../animations/animations";
import Link from "next/link";
import Image from "next/image";

const Skill = () => {
  return (
    <section
      id="projects"
      className="relative flex flex-col items-center justify-center p-20 pb-28 border h-auto border-gray-700 border-opacity-50 bg_image_magic  bg-gray-900 bg-opacity-30 h-full w-screen rounded-custom"
    >
      <div className="w-fit flex justify-center flex-col items-center font-semibold relative">
        <h2 className="text-3xl m-8 font-boldt text-center">Listen to me</h2>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInAndSlideDownVariants}
          className="cool_title_underline"
        ></motion.div>
      </div>
      <Spotify
        className="w-[500px] max-w-[85vw]"
        link="https://open.spotify.com/artist/1pgvtOneo1dhcIp9An2xnC?si=XjoA_Av7Q6OPE-dypMgIeQ"
      />

      <div className="w-fit flex justify-center flex-col items-center font-semibold relative">
        <h2 className="text-3xl m-8 font-bold text-center">Projects</h2>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInAndSlideDownVariants}
          className="cool_title_underline"
        ></motion.div>
      </div>

      <div className=" flex flex-wrap text-center justify-center lg:w-full gap-10 max-w-[70vw] lg:mb-0 lg:grid-cols-4 lg:text-center">
        <Link
          href="https://thandoros.itch.io/jam-to-the-future"
          target="_blank"
          className="w-[300px] h-[200px] my-8 rounded-2xl transition-all cursor-pointer hover:scale-105"
        >
          <h3>JAM TO THE FUTURE</h3>
          <Image
            width={1000}
            height={1000}
            alt="Project picture"
            className="object-cover h-[200px] w-[400px] rounded-lg"
            src={
              "https://firebasestorage.googleapis.com/v0/b/thalescardrisportfol.appspot.com/o/JAM%20TO%20THE%20FUTURE%20PIC.jpg?alt=media&token=2d53a9d5-138d-4297-86bb-f0003c309f76"
            }
          ></Image>
        </Link>
        <Link
          href="https://thandoros.itch.io/compile-it"
          target="_blank"
          className="w-[300px] h-[200px] my-8 rounded-2xl transition-all cursor-pointer hover:scale-105"
        >
          <h3>COMPILE IT</h3>
          <Image
            width={1000}
            height={1000}
            alt="Project picture"
            className="object-cover h-[200px] w-[400px] rounded-lg"
            src={
              "https://firebasestorage.googleapis.com/v0/b/thalescardrisportfol.appspot.com/o/COMPILE%20IT%20PIC.jpg?alt=media&token=09f8b2cd-7feb-4d0e-acc6-e8ef94e00e64"
            }
          ></Image>
        </Link>
        
      </div>
      <br />
    </section>
  );
};

export default Skill;
