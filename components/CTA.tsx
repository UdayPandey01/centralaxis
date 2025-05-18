import React from "react";

const CTA = () => {
  return (
    <div className="w-full max-w-[1472px] mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 lg:mb-[72px]">
      <div className="bg-[#2D0F5C]/30 backdrop-blur-sm flex flex-col sm:flex-row justify-between items-center rounded-2xl px-6 sm:px-8 lg:px-[40px] py-8 sm:py-10 lg:py-12 gap-6 sm:gap-4">
        <div>
          <h1 className="text-white text-xl sm:text-2xl lg:text-[30px] font-medium leading-tight text-center sm:text-left">
            We&apos;ve Built the Future of Data Centers
          </h1>
          <p className="text-[#A1A1AA] text-base sm:text-lg lg:text-[20px] mt-2 sm:mt-[10px] text-center sm:text-left">
            Contact our team for a demo
          </p>
        </div>

        <div className="flex lg:flex-col sm:flex-row gap-2">
          <button className="bg-[#8B5CF6] font-extralight text-white px-6 py-2 rounded-2xl w-full sm:w-auto">
            Set Up a Time
          </button>
          <button className="bg-[#18181B] font-extralight text-white px-6 py-2 rounded-2xl w-full sm:w-auto">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTA;