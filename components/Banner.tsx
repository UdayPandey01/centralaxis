import React from 'react';
import Image from 'next/image';

const Banner = () => {
  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 my-8 sm:my-12 lg:my-16">
      <div className="relative rounded-2xl overflow-hidden h-48 sm:h-56 lg:h-[248px]">
        <Image
          src="/background.png"
          alt="Demo Banner"
          fill
          className="object-cover opacity-30"
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 1200px) 1200px, 1400px"
        />

        {/* Centered Content on top of image */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-2xl sm:text-3xl lg:text-[36px] text-white font-semibold">Book a Demo</h1>
          <p className="text-base sm:text-lg lg:text-[20px] text-[#cfcfd2] max-w-[800px] mt-2">
            See how CentralAxis can revolutionize your data center operations.
          </p>
          <button className="bg-white text-[#18181B] text-sm sm:text-base lg:text-[16px] font-medium py-2 sm:py-3 px-4 sm:px-6 rounded-lg mt-4">
            Schedule Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;