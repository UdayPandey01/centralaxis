import React from "react";
import Image from "next/image";

const Give = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Card */}
        <div className="bg-[#09090B] rounded-2xl space-y-2">
          <p className="text-[#71717A] bg-[#18181B] font-medium rounded-4xl px-2 py-0.5 inline-block text-[16px] mt-[20px]">
            Built for Scale
          </p>
          <h1 className="text-white text-[28px] md:text-[36px] font-medium">
            Dynamic Resource Management
          </h1>
          <p className="text-[#71717A] text-[18px] md:text-[20px] font-extralight max-w-3xl">
            Seamlessly expand from racks to data centers. Our system grows with
            you, automatically managing resources across your entire
            infrastructure.
          </p>
        </div>

        {/* Right List */}
        <div className="bg-[#09090B] rounded-2xl p-4 space-y-6">
          {[
            {
              icon: "mail.svg",
              title: "Resource Management",
              desc: "See all of your resources in one place, update issues, and dynamically plan your resources.",
            },
            {
              icon: "zap.svg",
              title: "Deployment Automation",
              desc: "From design, sourcing, supply, manufacturing, and deployment — our system automates the entire process.",
            },
            {
              icon: "bar-chart-2.svg",
              title: "Networking",
              desc: "Ensure that your networking infrastructure is always in place and ready to scale with your deployments.",
            },
            {
              icon: "smile.svg",
              title: "Firmware Versioning",
              desc: "Ensure that your firmware is always up to date and secure with our automated versioning system.",
            },
            {
              icon: "command.svg",
              title: "Digital Twins",
              desc: "Plan capacity intelligently with our digital twin technology.",
            },
          ].map(({ icon, title, desc }) => (
            <div
              key={title}
              className="bg-[#18181B] rounded-2xl px-6 py-4 flex flex-col justify-center"
            >
              <div className="flex items-center gap-4 mb-2">
                <div className="bg-[#27272A] p-2 rounded-full mt-[4px]">
                  <Image
                    src={`/${icon}`}
                    alt={title}
                    width={24}
                    height={24}
                    className="invert"
                  />
                </div>
                <p className="text-white text-[18px] font-medium">{title}</p>
              </div>
              <p className="text-[#71717A] text-[16px] ml-[56px] leading-snug">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Give;
