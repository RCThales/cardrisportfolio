"use client";

import { motion } from "framer-motion";
import { fadeInAndSlideDownVariants } from "../../animations/animations";

const Hero = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInAndSlideDownVariants}
      className="z-10 max-w-5xl w-full pb-10 lg:pb-8 flex-col items-center justify-between lg:flex"
    >
      <div className="pointer-events-none flex-col flex place-items-center gap-2 lg:pointer-events-auto justify-center items-center">
        <h1 className="font-bold text-clamp-lg">THALES CARDRIS</h1>
        <h2 className="font-light text-clamp-sm">
          Composer | Singer | Sound Designer
        </h2>
      </div>
    </motion.div>
  );
};

export default Hero;
