import React from "react";

const AboutSection = () => {
  return (
    <div className=" flex w-full px-44 gap-3 mt-6">
      <div className="w-1/2  flex  items-center justify-center">
        {/* <div className="">
          <img src="./bgSvg2.png" className="w-72  h-72 rounded-md" />
          <div className="absolute bottom-4 left-60 rotate-2 overflow-hidden">
            <img src="./mypic.png" className="w-52 h-72 rounded-3xl" />
          </div>
        </div> */}
        <img src="./myBgImg.jpg" className="w-96 h-64 rounded-3xl" />
      </div>
      <div className="w-1/2">
        <p className="font-bold text-primary text-2xl">About Me</p>
        <div className="w-16 h-0.5 bg-red-600 mb-3"></div>
        <p className="font-bold text-base text-justify">
          I am a mobile app developer with expertise in creating native apps for
          Android and iOS platforms. I have experience in various app categories
          and proficiency in development tools and third-party APIs. I am a
          strong communicator and team player, passionate about delivering
          high-quality apps that meet user needs and business goals.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
