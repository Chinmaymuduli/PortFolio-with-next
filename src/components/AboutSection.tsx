import React from "react";

const AboutSection = () => {
  return (
    <div className="mx-auto container">
      <div className="relative overflow-hidden pb-14 text-center mt-10">
        <h2 className="relative z-10 mb-2 uppercase font-bold text-2xl text-primary">
          About Me
        </h2>
        <span className="relative z-10 inline-block h-1.5 w-32 overflow-hidden rounded-full bg-primary bg-opacity-20">
          <span className="absolute left-0 top-0 inline-block h-full w-1.5 animate-leftToRight rounded-full bg-primary"></span>
        </span>
        {/* <span className="pointer-events-none absolute left-1/2 -top-2 z-0 -translate-x-1/2 transform text-9xl font-bold uppercase text-hea">Skills</span> */}
      </div>

      <div className="grid grid-cols-2 items-center  gap-7 px-44">
        {/* <div className="w-1/2  flex  items-center justify-center">
          <img src="./myBgImg.jpg" className="w-96 h-64 rounded-3xl" />
        </div> */}
        <div className="col-span-2 lg:col-span-1">
          {/* <div
            className="overflow-hidden rounded-lg"
            style={{ opacity: 1, transform: "none" }}
          >
            <div className="fixImage relative border-10 border-primary border-opacity-20">
              <span className="absolute -top-2.5 left-0 z-10 h-2.5 w-10 animate-ledgerLeftToRight rounded-full bg-gradient-to-r from-transparent to-primary"></span>
              <span className="absolute top-auto -bottom-2.5 left-auto  z-10 h-2.5 w-10 animate-ledgerRightToLeft rounded-full bg-gradient-to-r from-primary to-transparent"></span>
              <span className="absolute top-auto  -left-2.5  z-10 h-10 w-2.5 animate-ledgerBottomTop rounded-full bg-gradient-to-t from-transparent to-primary"></span>
              <span className="absolute left-auto -right-2.5  z-10 h-10 w-2.5 animate-ledgerTopBottom rounded-full bg-gradient-to-b from-transparent to-primary"></span>
              <span className="imageBox">
                <span className="imageBoxSpan">
                  <img src="./myBgImg.jpg" className="imageStyle" />
                </span>
              </span>
            </div>
          </div> */}
          <div className="flex items-center justify-center">
            <img src="./myBgImg.jpg" className="w-full h-80 rounded-3xl" />
          </div>
        </div>
        <div className="col-span-2 lg:col-span-1">
          <p className="font-bold text-base text-justify">
            I am a mobile app developer with expertise in creating native apps
            for Android and iOS platforms. I have experience in various app
            categories and proficiency in development tools and third-party
            APIs. I am a strong communicator and team player, passionate about
            delivering high-quality apps that meet user needs and business
            goals.
          </p>
          <p className="font-bold text-base text-justify mt-3">
            In addition, I have excellent problem-solving and analytical skills,
            which enable me to troubleshoot and resolve complex issues. I am
            also proficient in working collaboratively with other team members
            and stakeholders to deliver projects within the given timeline and
            budget.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
