"use client";
import React from "react";
import { motion } from "framer-motion";

const Nav = () => {
    const fadeInAndSlideDownVariants = {
      hidden: {
        opacity: 0,
        y: -50, // Initial position above the element
      },
      visible: {
        opacity: 1,
        y: 0, // Final position at the element's natural position
        transition: {
          type: "spring", // You can choose a different transition type
          duration: 1, // Animation duration in seconds
          delay: 0.2, // Delay the animation by 0.5 seconds
        },
      },
    };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={fadeInAndSlideDownVariants}
      className="z-10 max-w-5xl w-full items-center justify-between lg:flex"
    >
      <div className="pointer-events-none flex-col flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0 justify-center items-center">
        <h1 className="font-bold text-clamp-lg ">THALES CARDRIS</h1>
        <h2 className="font-light text-clamp-sm">
          Musician | Sound Engineer | Sound Designer
        </h2>
      </div>
      <div className="text-[1.2rem] flex items-center justify-center gap-2 p-8 lg:pointer-events-auto lg:p-0">
        😁 Language:
        <select className="rounded bg-black hover:cursor-pointer">
          <option value="">English</option>
          <option value="">French</option>
        </select>
      </div>
    </motion.nav>
  );
};

export default Nav;
