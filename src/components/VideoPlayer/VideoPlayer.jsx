"use client";

import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const VideoPlayer = () => {

  return (
    <>
      <Tabs className={"glow rounded-lg"}>
        <TabList className="flex flex-row hover:cursor-pointe rounded-t-lg gap-3 bg-gray-950">
          <Tab className="text-[1rem] flex text-center items-center justify-center lg:text-2xl md:text-[1rem] sm:text-[1rem] p-4 bg-purple-700 bg-opacity-[0.4] hover:bg-purple-600 hover:bg-opacity-[0.4] hover:text-white cursor-pointer outline-none transition-all rounded-t-lg">
            Sound Design
          </Tab>
          <Tab className="text-[1rem] flex text-center items-center justify-center lg:text-2xl md:text-[1rem] sm:text-[1rem] p-4 bg-fuchsia-700 bg-opacity-[0.4] hover:bg-fuchsia-600 hover:bg-opacity-[0.4]  hover:text-white cursor-pointer outline-none transition-all rounded-t-lg">
            Composition
          </Tab>
          <Tab className="text-[1rem] flex text-center items-center justify-center lg:text-2xl md:text-[1rem] sm:text-[1rem] p-4 bg-pink-700 bg-opacity-[0.4] hover:bg-pink-600 hover:bg-opacity-[0.4] hover:text-white cursor-pointer outline-none transition-all rounded-t-lg">
            Full Experience
          </Tab>
        </TabList>

        <TabPanel className={"min-w-[100%]"}>
          <div className="px-10 py-4 border-purple-700 border border-opacity-[0.3] rounded-b-lg blur-bg">
            <h3 className="p-4">
              DEMO REEL with sound design only (no music) 🔊
            </h3>

            <video width="1500" controls>
              <source
                src="https://media-files.vidstack.io/720p.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </TabPanel>
        <TabPanel className={""}>
          <div className="px-10 py-4 border-fuchsia-700 border border-opacity-[0.3] rounded-b-lg">
            <h3 className="p-4">
              DEMO REEL with music composed by me only (no sound design) 🎼
            </h3>
            <video width="1500" controls>
              <source
                src="https://media-files.vidstack.io/720p.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="px-10 py-4 border-pink-700 border border-opacity-[0.3] rounded-b-lg">
            <h3 className="p-4">
              DEMO REEL with all of the sounds together for the complete
              experience 😎
            </h3>
            <video width="1500" controls>
              <source
                src="https://media-files.vidstack.io/720p.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </TabPanel>
      </Tabs>
    </>
  );
};

export default VideoPlayer;
