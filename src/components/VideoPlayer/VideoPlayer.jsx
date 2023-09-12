"use client";

import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { motion } from "framer-motion"
import "react-tabs/style/react-tabs.css"; // Import the default styles

const VideoPlayer = () => {
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
        delay: 0.1,
      },
    },
  };

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
        <div className="cool_title_underline max-w-[250px]"></div>
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInAndSlideDownVariants}
      >
        <Tabs className={"glow rounded-lg"}>
          <TabList className="flex flex-row hover:cursor-pointe rounded-t-lg gap-3 bg-gray-950">
            <Tab className="text-[.8rem] flex text-center items-center h-[50px] justify-center lg:text-2xl md:text-[1rem] sm:text-[1rem] p-4 bg-purple-700 bg-opacity-[0.4] cursor-pointer outline-none transition-all rounded-t-lg">
              Sound Design
            </Tab>
            <Tab className="text-[.8rem] flex text-center items-center h-[50px] justify-center lg:text-2xl md:text-[1rem] sm:text-[1rem] p-4 bg-fuchsia-700 bg-opacity-[0.4] cursor-pointer outline-none transition-all rounded-t-lg">
              Composition
            </Tab>
            <Tab className="text-[.8rem] flex text-center items-center h-[50px] justify-center lg:text-2xl md:text-[1rem] sm:text-[1rem] p-4 bg-pink-700 bg-opacity-[0.4] cursor-pointer outline-none transition-all rounded-t-lg">
              Full Experience
            </Tab>
          </TabList>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInAndSlideDownVariants}
          >
            <TabPanel className={"min-w-[100%]"}>
              <div className="px-10 py-4 border-purple-700 border border-opacity-[0.3] rounded-b-lg blur-bg">
                <h3 className="p-4 text-[1rem] text-center font-medium">
                  REEL WITH ONLY SOUND DESIGN (NO MUSIC) 🔊
                </h3>

                <video
                  className="cursor-pointer transition-all hover:scale-[1.01]"
                  width="1500"
                  controls
                  poster="https://firebasestorage.googleapis.com/v0/b/thalescardrisportfol.appspot.com/o/sd_poster.jpg?alt=media&token=795387f9-25bb-473d-b5db-7d052996e00c"
                >
                  <source
                    src="https://firebasestorage.googleapis.com/v0/b/thalescardrisportfol.appspot.com/o/testvideo.mp4?alt=media&token=1e1444ff-7cc7-48b5-98b0-cfc7ec67d433"
                    type="video/mp4"
                  />
                </video>
                <br />
              </div>
            </TabPanel>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInAndSlideDownVariants}
          >
            <TabPanel className={""}>
              <div className="px-10 py-4 border-fuchsia-700 border border-opacity-[0.3] rounded-b-lg">
                <h3 className="p-4 text-[1rem] text-center font-medium">
                  REEL WITH ONLY MUSIC CREATED AND RECORDED BY ME (NO SOUND
                  DESIGN) 🎼
                </h3>
                <video
                  className="cursor-pointer transition-all hover:scale-[1.01]"
                  poster="https://firebasestorage.googleapis.com/v0/b/thalescardrisportfol.appspot.com/o/compo_poster.jpg?alt=media&token=3d0cd8e1-fea1-4918-9f54-ff13665684d6"
                  width="1500"
                  controls
                >
                  <source
                    src="https://firebasestorage.googleapis.com/v0/b/thalescardrisportfol.appspot.com/o/testvideo.mp4?alt=media&token=1e1444ff-7cc7-48b5-98b0-cfc7ec67d433"
                    type="video/mp4"
                  />
                </video>
                <br />
              </div>
            </TabPanel>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInAndSlideDownVariants}
          >
            <TabPanel>
              <div className="px-10 py-4 border-pink-700 border border-opacity-[0.3] rounded-b-lg">
                <h3 className="p-4 text-[1rem] text-center font-medium">
                  COMPLETE DEMO REEL WITH MUSIC AND SOUND DESIGN FOR THE FULL
                  EXPERIENCE 😎
                </h3>
                <video
                  className="cursor-pointer transition-all hover:scale-[1.01]"
                  poster="https://firebasestorage.googleapis.com/v0/b/thalescardrisportfol.appspot.com/o/both_poster.jpg?alt=media&token=3a3916f9-c6c7-4046-85d7-10d79cbca99a"
                  width="1500"
                  controls
                >
                  <source
                    src="https://firebasestorage.googleapis.com/v0/b/thalescardrisportfol.appspot.com/o/testvideo.mp4?alt=media&token=1e1444ff-7cc7-48b5-98b0-cfc7ec67d433"
                    type="video/mp4"
                  />
                </video>
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
