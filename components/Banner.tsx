import React from 'react';
import Image from 'next/image';

const Banner = () => {
  return (
    <div className="w-[1400px] h-[248px] mx-auto mt-[65px] relative rounded-2xl overflow-hidden mb-[57px]">
      <Image
        src="/background.png"
        alt="Demo Banner"
        fill
        className="object-cover opacity-30"
        priority
      />

      {/* Centered Content on top of image */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center">
        <h1 className="text-[36px] text-white font-semibold mt-[40px]">Book a Demo</h1>
        <p className="text-[20px] text-[#cfcfd2] max-w-[800px]">
          See how CentralAxis can revolutionize your data center operations.
        </p>
        <button className="bg-white text-[#18181B] text-[16px] font-medium py-3 px-6 rounded-lg mt-4">
          Schedule Now
        </button>
      </div>
    </div>
  );
};

export default Banner;
