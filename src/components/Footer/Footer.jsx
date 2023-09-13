"use client";

import React from "react";
import { fadeInAndSlideDownVariants } from "../../animations/animations";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="flex justify-center items-center flex-col w-screen  bg-gray-900 bg-opacity-30 py-12 glow"
    >
      <div className="w-fit flex justify-center flex-col items-center font-semibold relative">
        <h2 className="text-3xl m-8 font-bold text-center">Contact Me</h2>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInAndSlideDownVariants}
          className="cool_title_underline"
        ></motion.div>
      </div>
      <div className=" grid just text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-center">
        <a
          href="https://www.linkedin.com/in/thalesrodriguescardoso/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors text-center hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Linkedin{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 text-sm opacity-50`}>Access my Linkedin Profile</p>
        </a>
        <a
          href="https://www.instagram.com/thalescardris/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors text-center hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Instagram{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 text-sm opacity-50`}>
            Access my Instagram Profile
          </p>
        </a>
        <a
          href="mailto:contact@thalescardris.com"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors text-center hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Email{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 text-sm opacity-50 break-words`}>
            Click to send me an email, or use the chat on the right
          </p>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
