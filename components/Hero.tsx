import React from "react";

const Hero = () => {
  return (
    <div className="relative text-white w-full max-w-[1540px] h-[489px] mx-auto overflow-hidden">
      <div className="hidden md:block absolute top-0 bottom-0 left-[calc(50%-640px)] w-px bg-white/10"></div>
      <div className="hidden md:block absolute top-0 bottom-0 right-[calc(50%-640px)] w-px bg-white/10"></div>

      <div className="absolute inset-0 flex flex-col mt-[20px] items-center justify-start px-4 text-center">
        <h1
          className="text-[64px] font-medium mt-[114px] leading-tight bg-gradient-to-r from-[#7c7c7d] via-white to-[#7c7c7d] text-transparent bg-clip-text"
          style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif" }}
        >
          Data Center Management Software
        </h1>

        <p className="text-[#71717A] text-[18px] mt-[8px]">
          Increase uptime, reduce costs, automate operations, and stay
          compliant.
        </p>

        <p className="text-[#71717A] text-[18px] mt-[5px]">
          Built for colocations, data centers, and cloud providers.
        </p>

        <div className="relative mt-[107px] w-full flex justify-center">
          <div className="hidden md:block absolute top-0 left-0 right-0 h-px bg-white/10"></div>

          <div className="absolute w-[800px] h-[900px] rounded-full bg-gradient-to-r from-purple-600/30 via-purple-500/20 to-indigo-600/30 blur-[90px] opacity-60 -top-[220px]"></div>

          <button className="bg-[#8B5CF6] hover:bg-purple-500 text-white w-[392px] h-[56px] font-medium transition-colors duration-300 relative z-10">
            Request Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
