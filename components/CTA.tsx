import React from "react";

const CTA = () => {
  return (
    <div className="w-[1472px] h-[156px] bg-[#2D0F5C]/30 backdrop-blur-sm mt-[146px] ml-[20px] flex justify-between items-center rounded-2xl px-[40px] mb-[72px]">
      <div>
        <h1 className="text-white text-[30px] font-medium leading-tight">
          We&apos;ve Built the Future of Data Centers
        </h1>
        <p className="text-[#A1A1AA] text-[20px] mt-[10px]">
          Contact our team for a demo
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <button className="bg-[#8B5CF6] font-extralight text-white px-3 py-1 rounded-2xl">
          Set Up a Time
        </button>
        <button className="bg-[#18181B] font-extralight text-white px-2 py-1 rounded-2xl">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default CTA;
