"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { fadeInAndSlideDownVariants } from "../../animations/animations";

const Nav = () => {

  return (
    <>
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={fadeInAndSlideDownVariants}
        className=" h-screen fixed z-20 left-0 top-0 invisible md:invisible lg:visible bg-gray-900 bg-opacity-100 lg:bg-opacity-10 w-screen lg:w-28 shadow-black shadow-lg items-center justify-between flex flex-col"
      >
        <div className="flex flex-col justify-evenly items-center h-full text-[1xl]">
          <Link
            href={"#"}
            className="flex font-semibold transition-all justify-center items-center flex-col hover:scale-105 rounded-lg cursor-pointer w-full p-[5px] hover:bg-pink-900"
          >
            <span>REEL</span>
            <img
              className="invert w-5"
              alt="icon"
              src="https://firebasestorage.googleapis.com/v0/b/thalescardrisportfol.appspot.com/o/film.svg?alt=media&token=5e34cd7b-dbe6-40cf-9d01-c99363019a2f"
            ></img>
          </Link>

          <Link
            href={"#projects"}
            className="flex font-semibold transition-all justify-center items-center flex-col hover:scale-105 rounded-lg cursor-pointer w-full p-[5px] hover:bg-pink-900"
          >
            <span>PROJECTS</span>
            <img
              className="invert w-5"
              alt="icon"
              src="https://firebasestorage.googleapis.com/v0/b/thalescardrisportfol.appspot.com/o/briefcase%20(1).svg?alt=media&token=e20764ba-c84d-43b9-991a-f640b64f4a95"
            ></img>
          </Link>

          <Link
            href={"#resume"}
            className="flex font-semibold transition-all justify-center items-center flex-col hover:scale-105 rounded-lg cursor-pointer w-full p-[5px] hover:bg-pink-900"
          >
            <span>RESUMÉ</span>
            <img
              className="invert w-5"
              alt="icon"
              src="https://firebasestorage.googleapis.com/v0/b/thalescardrisportfol.appspot.com/o/book-open.svg?alt=media&token=19990fa5-4ef9-44e6-8ad5-cb882e6ceeeb"
            ></img>
          </Link>

          <Link
            href={"#aboutme"}
            className="flex font-semibold transition-all justify-center items-center flex-col hover:scale-105 rounded-lg cursor-pointer w-full p-[5px] hover:bg-pink-900"
          >
            <span> ABOUT ME</span>
            <img
              className="invert w-5"
              alt="icon"
              src="https://firebasestorage.googleapis.com/v0/b/thalescardrisportfol.appspot.com/o/user%20(1).svg?alt=media&token=c40e32ad-c415-44e5-8790-7e1c5927ed31"
            ></img>
          </Link>

          <Link
            href={"#skills"}
            className="flex font-semibold transition-all justify-center items-center flex-col hover:scale-105 rounded-lg cursor-pointer w-full p-[5px] hover:bg-pink-900"
          >
            <span>SKILLS</span>
            <img
              className="invert w-5"
              alt="icon"
              src="https://firebasestorage.googleapis.com/v0/b/thalescardrisportfol.appspot.com/o/star%20(1).svg?alt=media&token=121c4ca1-0d2e-400e-92c5-ed24d0fd190a"
            ></img>
          </Link>

          <Link
            href={"#contact"}
            className="flex font-semibold transition-all justify-center items-center flex-col hover:scale-105 rounded-lg cursor-pointer w-full p-[5px] hover:bg-pink-900"
          >
            <span>CONTACT</span>
            <img
              className="invert w-5"
              alt="icon"
              src="https://firebasestorage.googleapis.com/v0/b/thalescardrisportfol.appspot.com/o/at-sign.svg?alt=media&token=b9797d1e-a716-43ce-b44d-728a8ef25709"
            ></img>
          </Link>

        </div>
      </motion.nav>
    </>
  );
};

export default Nav;
