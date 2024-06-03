import React from "react";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row p-4 lg:p-10">
        <div className="flex flex-col items-center lg:items-start">
          <div className="ml-5 lg:ml-20 mt-5">
            <img src="./m.png" alt="m" />
          </div>
          <div className="ml-5 lg:ml-20 mt-5">
            <img src="./p.png" alt="p" />
          </div>
          <div className="flex flex-col lg:flex-row items-center lg:items-center lg:ml-20">
            <button className="bg-black text-white p-2 mt-5 rounded-sm w-40 font-light">
              Get Started →
            </button>
            <div className="mt-5 lg:mt-5 lg:ml-10 font-semibold flex flex-row gap-2 items-center">
              <img src="./Group 3.png" alt="Group 3" />
              <button>Watch Video</button>
            </div>
          </div>
          <div className="relative mt-10 lg:mt-20">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 lg:translate-x-0 lg:ml-48 lg:mt-24 z-50">
              <img src="./Star 8.png" alt="Star" />
            </div>
            <div className="relative scale-90">
              <img src="./Group 35924.png" alt="Group 35924" />
            </div>
          </div>
        </div>
        <div className="ml-10 lg:mt-[-10vh]">
          <img src="./every.png" />
        </div>
      </div>
    </>
  );
};

export default Hero;
