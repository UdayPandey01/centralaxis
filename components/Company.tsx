"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const Company = () => {
  const scrollContainer = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const container = scrollContainer.current;
    if (!container) return;

    setIsLoaded(true);

    const logos = container.querySelectorAll<HTMLDivElement>(".logo-item");
    logos.forEach((logo) => {
      const clone = logo.cloneNode(true);
      container.appendChild(clone);
    });

    let totalWidth = 0;
    logos.forEach((logo) => {
      totalWidth += logo.offsetWidth + 40;
    });

    let scrollPos = 0;
    const scrollSpeed = 0.5;

    const scroll = () => {
      scrollPos += scrollSpeed;

      if (scrollPos >= totalWidth) {
        scrollPos = 0;
      }

      container.style.transform = `translateX(${-scrollPos}px)`;
      requestAnimationFrame(scroll);
    };

    const animation = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animation);
  }, [isLoaded]);

  const logos = [
    { src: "/amd.svg", alt: "amd" },
    { src: "/cisco.svg", alt: "cisco" },
    { src: "/dell.svg", alt: "dell" },
    { src: "/hp.svg", alt: "hp" },
    { src: "/lenovo.svg", alt: "lenovo" },
    { src: "/nvidia.svg", alt: "nvidia" },
    { src: "/supermicro.svg", alt: "supermicro" },
    { src: "/schneider.svg", alt: "schneider" },
    { src: "/intel.svg", alt: "intel" },
  ];

  return (
    <div className="w-full py-12 relative bg-[#09090B]">
      <div className="container mx-auto px-4">
        <p className="text-zinc-500 text-base font-normal mb-10 text-center">
          Seamless integrations with any data center hardware
        </p>

        <div className="overflow-hidden relative mt-8">
          <div ref={scrollContainer} className="flex items-center space-x-10">
            {logos.map((logo, index) => (
              <div key={index} className="logo-item flex-shrink-0">
                <div className="h-16 w-32 relative">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    style={{ objectFit: "contain" }}
                    priority={index < 4}
                    sizes="128px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
