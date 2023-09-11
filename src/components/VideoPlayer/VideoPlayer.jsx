"use client";

import React from "react";
import { MediaOutlet, MediaPlayer, MediaCommunitySkin, MediaPoster } from "@vidstack/react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "vidstack/styles/defaults.css";
import "vidstack/styles/community-skin/video.css";

const VideoPlayer = () => {

  const FRENCH = {
    Audio: "Audio",
    Auto: "Automatique",
    Captions: "Sous-titres",
    Chapters: "Chapitres",
    Default: "Défaut",
    Mute: "Muet",
    Normal: "Normal",
    Off: "Désactivé",
    Pause: "Pause",
    Play: "Lecture",
    Speed: "Vitesse",
    Quality: "Qualité",
    Settings: "Paramètres",
    Unmute: "Activer le son",
    "Seek Forward": "Avancer",
    "Seek Backward": "Reculer",
    "Closed-Captions On": "Sous-titres activés",
    "Closed-Captions Off": "Sous-titres désactivés",
    "Enter Fullscreen": "Passer en plein écran",
    "Exit Fullscreen": "Quitter le plein écran",
    "Enter PiP": "Passer en mode PiP",
    "Exit PiP": "Quitter le mode PiP",
  };

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

            <MediaPlayer
              src="https://media-files.vidstack.io/720p.mp4"
              poster="https://media-files.vidstack.io/poster.png"
              crossorigin=""
            >
              <MediaOutlet>
                <MediaCommunitySkin translations={FRENCH} />;
                <MediaPoster alt="Agent 327 blowing flames with a hair dryer." />
              </MediaOutlet>
            </MediaPlayer>
          </div>
        </TabPanel>
        <TabPanel className={""}>
          <div className="px-10 py-4 border-fuchsia-700 border border-opacity-[0.3] rounded-b-lg">
            <h3 className="p-4">
              DEMO REEL with music composed by me only (no sound design) 🎼
            </h3>
            <MediaPlayer
              src="https://media-files.vidstack.io/720p.mp4"
              poster="https://media-files.vidstack.io/poster.png"
              crossorigin=""
            >
              <MediaOutlet>
                <MediaCommunitySkin translations={FRENCH} />;
                <MediaPoster alt="Agent 327 blowing flames with a hair dryer." />
              </MediaOutlet>
            </MediaPlayer>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="px-10 py-4 border-pink-700 border border-opacity-[0.3] rounded-b-lg">
            <h3 className="p-4">
              DEMO REEL with all of the sounds together for the complete
              experience 😎
            </h3>
            <MediaPlayer
              src="https://media-files.vidstack.io/720p.mp4"
              poster="https://media-files.vidstack.io/poster.png"
              crossorigin=""
            >
              <MediaOutlet>
                <MediaCommunitySkin translations={FRENCH} />;
                <MediaPoster alt="Agent 327 blowing flames with a hair dryer." />
              </MediaOutlet>
            </MediaPlayer>
          </div>
        </TabPanel>
      </Tabs>
    </>
  );
};

export default VideoPlayer;
