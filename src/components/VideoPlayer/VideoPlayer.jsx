"use client";

import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { motion } from "framer-motion";
import { fadeInAndSlideDownVariants } from "../../animations/animations";
import "react-tabs/style/react-tabs.css"; // Import the default styles

const VideoPlayer = () => {
  return (
    <>
      <div className="flex justify-center flex-col items-center font-semibold relative">
        <motion.h2
          initial="hidden"
          animate="visible"
          variants={fadeInAndSlideDownVariants}
          className="text-3xl m-8 font-bold text-center"
        >
          My Demo Reels
        </motion.h2>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInAndSlideDownVariants}
          className="cool_title_underline max-w-[250px]"
        ></motion.div>
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInAndSlideDownVariants}
      >
        <Tabs className={"glow rounded-lg"}>
          <TabList className="flex flex-col md:flex-row lg:flex-row flex-wrap justify-center md:justify-center lg:justify-center hover:cursor-pointe rounded-t-lg gap-3 bg-gray-950">
            <Tab className="text-[.8rem] flex text-center items-center h-[40px] justify-center lg:text-[1.3rem] md:text-[1rem] sm:text-[1rem] p-[5px] bg-purple-700 bg-opacity-[0.4] cursor-pointer outline-none transition-all rounded md:rounded-none lg:rounded-none sm:rounded-lg md:rounded-t-lg lg:rounded-t-lg">
              Jazz
            </Tab>

            <Tab className="text-[.8rem] flex text-center items-center h-[40px] justify-center lg:text-[1.3rem] md:text-[1rem] sm:text-[1rem] p-[5px] bg-purple-700 bg-opacity-[0.4] cursor-pointer outline-none transition-all rounded md:rounded-none lg:rounded-none sm:rounded-lg md:rounded-t-lg lg:rounded-t-lg">
              Musical Theatre
            </Tab>
            <Tab className="text-[.8rem] flex text-center items-center h-[40px] justify-center lg:text-[1.3rem] md:text-[1rem] sm:text-[1rem] p-[5px] bg-fuchsia-700 bg-opacity-[0.4] cursor-pointer outline-none transition-all rounded md:rounded-none lg:rounded-none sm:rounded-lg md:rounded-t-lg lg:rounded-t-lg">
              Game Music Composition
            </Tab>
          </TabList>
          {/* DEMO REEL 1 */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInAndSlideDownVariants}
            className="w-[90vw] lg:w-[60vw] m-0 mini_phone_reels"
          >
            <TabPanel className={"w-[100%]"}>
              <div className="px-4 lg:px-10 py-4 border-purple-700 border border-opacity-[0.3] min-w-[100] rounded-b-lg blur-bg">
                <h3 className="p-4 text-[1rem] text-center font-medium">
                  GEORGIA ON MY MIND 🔊
                </h3>
                <iframe width="100%" height="600"
                  src="https://www.youtube.com/embed/uvU6qvFSd0Y">
                </iframe>
                <br />
              </div>
            </TabPanel>
          </motion.div>
    
          {/*DEMO REEL 2*/}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInAndSlideDownVariants}
            className="w-[90vw] lg:w-[60vw] m-0 mini_phone_reels"
          >
            <TabPanel className={"w-[100%]"}>
              <div className="px-4 lg:px-10 py-4 border-purple-700 border border-opacity-[0.3] min-w-[100] rounded-b-lg blur-bg">
                <h3 className="p-4 text-[1rem] text-center font-medium">
                  If I didn&apos;t believe in you 🎼
                </h3>
                <iframe width="100%" height="600"
                  src="https://www.youtube.com/embed/8M-vKPGCsjw">
                </iframe>
                <br />
              </div>
            </TabPanel>
          </motion.div>
           {/*DEMO REEL 3*/}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInAndSlideDownVariants}
            className="w-[90vw] lg:w-[60vw] m-0 mini_phone_reels"
          >
            <TabPanel className={"w-[100%]"}>
              <div className="px-4 lg:px-10 py-4 border-purple-700 border border-opacity-[0.3] min-w-[100] rounded-b-lg blur-bg">
                <h3 className="p-4 text-[1rem] text-center font-medium">
                  Game music made in for LOJAM, a 7 day game jam 😎
                </h3>
                <iframe width="100%" height="600"
                  src="https://www.youtube.com/embed/WnTV9bNGUlU">
                </iframe>
                <br />
              </div>
            </TabPanel>
          </motion.div>


        </Tabs>
      </motion.div>
    </>
  );
};

export default VideoPlayer;
