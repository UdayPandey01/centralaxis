import React from "react";

const Give = () => {
  return (
    <div className="w-[1400px] h-[968px] mx-auto">
      <div className="grid grid-cols-2 h-full">
        <div className="w-[588px] h-[744px] ml-[112px] mt-[112px] bg-[##09090B] rounded-2xl">
          <p className="text-[#71717A] bg-[#18181B] font-medium rounded-4xl px-2 py-0.5 inline-block text-[16px]">
            Built for Scale
          </p>
          <h1 className="text-white text-[36px] font-medium">
            Dynamic Resource Management
          </h1>
          <p className="text-[#71717A] mt-[12px] mx-auto text-[20px] font-extralight max-w-3xl">
            Seamlessly expand from racks to data centers. Our system grows with
            you, automatically managing resources across your entire
            infrastructure
          </p>
        </div>
        <div className="w-[588px] h-[744px] mr-[112px] mt-[112px] bg-[#09090B] rounded-2xl space-y-[40px] p-[8px]">
          {[
            {
              icon: "mail.svg",
              title: "Resource Management",
              desc: "See all of your resources in one place, update issues, and dynamically plan your resources.",
            },
            {
              icon: "zap.svg",
              title: "Deployment Automation",
              desc: "From design, sourcing, supply, manufacutinring, and deployment - our system automates the entire process.",
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
              className="w-[588px] h-[121px] bg-[#18181B] rounded-2xl px-6 py-4 flex flex-col justify-center"
            >
              <div className="flex items-center gap-4 mb-1">
                <div className="bg-[#27272A] p-2 rounded-full mt-[10px] ">
                  <img src={icon} alt={title} className="w-6 h-6 invert" />
                </div>
                <p className="text-white text-[18px] font-medium">{title}</p>
              </div>
              <p className="text-[#71717A] text-[16px] leading-snug ml-[56px]">
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
