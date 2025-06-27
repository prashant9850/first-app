import React from "react";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <>
      <div className="flex flex-col mt-5 items-center lg:mt-20">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
          VirtualR build tools
        </h1>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
          <span className="bg-gradient-to-r from-orange-500 to bg-orange-800 text-transparent bg-clip-text">
            {" "}
            for developers
          </span>
        </h1>
        <div>
          <p className="text-center mt-9 text-2xl">
            Enpower your creativity and bring your VR apps ideas to life with
            our invite development tools.
          </p>
          <p className="text-center mt-3 text-2xl">
            Get startes today and turn your imagination into immersive reality!
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8 px-4 w-full">
          <video
            src={video1}
            autoPlay
            loop
            muted
            playsInline
            className="w-full md:w-[550px] lg:w-[600px] rounded-lg border-4 border-orange-500"
          />
          <video
            src={video2}
            autoPlay
            loop
            muted
            playsInline
            className="w-full md:w-[550px] lg:w-[600px] rounded-lg border-4 border-orange-500"
          />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
