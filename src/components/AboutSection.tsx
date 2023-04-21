import React from "react";

const AboutSection = () => {
  return (
    <div className="justify-center items-center flex w-full">
      <div className="w-1/2">
        <img src="./mypic.png" className="w-10 h-28" />
      </div>
      <div className="w-1/2">
        <p className="font-bold text-primary text-xl">About Me</p>
        <p className="font-bold text-base">
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
