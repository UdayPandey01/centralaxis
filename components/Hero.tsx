import React from "react";

const Hero = () => {
  return (
    <div className="relative text-white w-full max-w-[1540px] h-auto min-h-[489px] mx-auto overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Vertical dividers - only visible on medium screens and up */}
      <div className="hidden md:block absolute top-0 bottom-0 left-[calc(50%-640px)] w-px bg-white/10"></div>
      <div className="hidden md:block absolute top-0 bottom-0 right-[calc(50%-640px)] w-px bg-white/10"></div>

      <div className="absolute inset-0 flex flex-col mt-[20px] items-center justify-start px-4 text-center">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-medium mt-16 sm:mt-20 lg:mt-[114px] leading-tight bg-gradient-to-r from-[#7c7c7d] via-white to-[#7c7c7d] text-transparent bg-clip-text"
          style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif" }}
        >
          Data Center Management Software
        </h1>

        <p className="text-[#71717A] text-base sm:text-lg mt-2 sm:mt-[8px] px-4">
          Increase uptime, reduce costs, automate operations, and stay
          compliant.
        </p>

        <p className="text-[#71717A] text-base sm:text-lg mt-1 sm:mt-[5px] px-4">
          Built for colocations, data centers, and cloud providers.
        </p>

        <div className="relative mt-16 sm:mt-20 lg:mt-[107px] w-full flex justify-center">
          <div className="hidden md:block absolute top-0 left-0 right-0 h-px bg-white/10"></div>

          <div className="absolute w-full sm:w-[600px] lg:w-[800px] h-[900px] rounded-full bg-gradient-to-r from-purple-600/30 via-purple-500/20 to-indigo-600/30 blur-[90px] opacity-60 -top-[220px]"></div>

          <button className="bg-[#8B5CF6] hover:bg-purple-500 text-white w-full max-w-[320px] sm:max-w-[360px] lg:w-[392px] h-[56px] font-medium transition-colors duration-300 relative z-10">
            Request Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;