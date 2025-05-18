import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#09090B] py-6 sm:py-8">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-white text-xs sm:text-sm">
        <div className="flex items-center gap-2">
          <div className="relative w-8 h-9 sm:w-9 sm:h-10 lg:w-[36px] lg:h-[41px]">
            <Image src="/logo.png" alt="CentralAxis Logo" fill />
          </div>
          <span>CentralAxis © 2025</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;