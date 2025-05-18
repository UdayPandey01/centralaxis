import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#09090B] mt-[27px] mb-[27px]">
      <div className="w-[1400px] mx-auto flex items-center justify-between text-white text-sm">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="CentralAxis Logo" width={36} height={41} />
          <span>CentralAxis © 2025</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
