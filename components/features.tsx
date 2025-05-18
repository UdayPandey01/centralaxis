import React from "react";
import { Check } from "lucide-react";

const Features = () => {
  return (
    <div>
      <div className="bg-[#09090B] max-w-[1472px] text-center px-4 mr-[22px] rounded-2xl">
        <p className="text-[#71717A] bg-[#18181B] font-medium rounded-4xl px-2 py-0.5 inline-block mt-[72px] mb-[8px] text-[16px]">
          Built for AI
        </p>

        <h1 className="text-white text-[36px] font-semibold">
          Modernizing the Digital Backbone
        </h1>

        <p className="text-[#71717A] mt-[12px] mx-auto text-[16px] font-extralight max-w-3xl">
          Data center software (DCIM, BMS and EPMS) has stagnated. We&apos;ve
          built a better way
        </p>

        {/* Advanced Monitoring */}
        <div className="w-[1472px] h-[384px] bg-[#18181B] mt-[40px] mx-auto flex justify-between items-start mr-[40px] rounded-xl">
          <div className="text-left max-w-[720px]">
            <div className="mt-[40px] ml-[40px]">
              <h1 className="text-white text-[32px] font-semibold mb-4">
                Advanced Monitoring
              </h1>
              <p className="text-[#A1A1AA] text-[16px]">
                CentralAxis provides cutting-edge monitoring solutions for your
                data center, offering real-time insights and comprehensive
                analytics to optimize performance, reduce costs, and enhance
                reliability.
              </p>
              <div className="text-[16px] mt-[32px] text-[#A1A1AA] space-y-[12px]">
                {[
                  "Real-time performance metrics and predictive analytics",
                  "Automated alerts and intelligent incident response",
                  "Comprehensive reporting and trend analysis",
                ].map((point, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Check className="text-[#71717A] w-5 h-5 p-1 rounded-full bg-[#27272A]" />
                    <p>{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <video
              src="vid1.mp4"
              className="rounded-lg object-cover w-[544px] h-[364px] mt-[10px] mb-[10px] mr-[30px]"
              autoPlay
              muted
              loop
              playsInline
            ></video>
          </div>
        </div>

        {/* Network Management and Monitoring */}
        <div className="w-[1472px] h-[384px] bg-[#18181B] mt-[26px] mx-auto flex justify-between items-start rounded-xl">
          <div>
            <video
              src="vid2.mp4"
              className="rounded-lg object-cover w-[544px] h-[364px] mt-[10px] mb-[10px] ml-[30px]"
              autoPlay
              muted
              loop
              playsInline
            ></video>
          </div>
          <div className="text-left max-w-[720px] mr-[90px]">
            <div className="mt-[40px] ml-[40px]">
              <h1 className="text-white text-[32px] font-semibold mb-4">
                Network Management and Monitoring
              </h1>
              <p className="text-[#A1A1AA] text-[16px]">
                Comprehensive network monitoring and management that ensures
                optimal performance, security, and reliability across your
                entire data center infrastructure.
              </p>
              <div className="text-[16px] mt-[32px] text-[#A1A1AA] space-y-[12px]">
                {[
                  "Real-time network performance monitoring and bandwidth optimization",
                  "Automated network security and threat detection",
                  "Advanced network diagnostics and troubleshooting tools",
                ].map((point, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Check className="text-[#71717A] w-5 h-5 p-1 rounded-full bg-[#27272A]" />
                    <p>{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Asset Management */}
        <div className="w-[1472px] h-[384px] bg-[#18181B] mt-[26px] mx-auto flex justify-between items-start mr-[40px] rounded-xl">
          <div className="text-left max-w-[720px]">
            <div className="mt-[40px] ml-[40px]">
              <h1 className="text-white text-[32px] font-semibold mb-4">
                Asset Management
              </h1>
              <p className="text-[#A1A1AA] text-[16px]">
                Streamline your data center operations with our comprehensive
                asset management system. Track, maintain, and optimize your
                infrastructure with precision and ease.
              </p>
              <div className="text-[16px] mt-[32px] text-[#A1A1AA] space-y-[12px]">
                {[
                  "Automated inventory tracking and lifecycle management",
                  "Intelligent ticketing based on asset health and performance",
                  "Efficient resource allocation and optimization",
                ].map((point, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Check className="text-[#71717A] w-5 h-5 p-1 rounded-full bg-[#27272A]" />
                    <p>{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <video
              src="vid3.mp4"
              className="rounded-lg object-cover w-[544px] h-[364px] mt-[10px] mb-[10px] mr-[30px]"
              autoPlay
              muted
              loop
              playsInline
            ></video>
          </div>
        </div>

        {/* A Single Pane of Glass */}
        <div className="w-[1472px] h-[384px] bg-[#18181B] mt-[26px] mx-auto flex justify-between items-start mr-[40px] rounded-xl">
          <div>
            <video
              src="vid4.mp4"
              className="rounded-lg object-cover w-[544px] h-[364px] mt-[10px] mb-[10px] ml-[30px]"
              autoPlay
              muted
              loop
              playsInline
            ></video>
          </div>
          <div className="text-left max-w-[720px] mr-[90px]">
            <div className="mt-[40px] ml-[40px]">
              <h1 className="text-white text-[32px] font-semibold mb-4">
                A Single Pane of Glass
              </h1>
              <p className="text-[#A1A1AA] text-[16px]">
                A unified view across all of your BMS and EPMS systems, tailored
                to your needs.
              </p>
              <div className="text-[16px] mt-[32px] text-[#A1A1AA] space-y-[12px]">
                {[
                  "Comprehensive visibility across all of your colocation infrastructure",
                  "Customizable interface tailored to your specific operational requirements and priorities.",
                  "Unified dashboard integrating all BMS and EPMS systems for seamless monitoring and management.",
                ].map((point, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Check className="text-[#71717A] w-5 h-5 p-1 rounded-full bg-[#27272A]" />
                    <p>{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Built-In Compliance */}
        <div className="w-[1472px] h-[384px] bg-[#18181B] mt-[26px] mx-auto flex justify-between items-start mr-[40px] rounded-xl">
          <div className="text-left max-w-[720px]">
            <div className="mt-[40px] ml-[40px]">
              <h1 className="text-white text-[32px] font-semibold mb-4">
                Built-In Compliance
              </h1>
              <p className="text-[#A1A1AA] text-[16px]">
                CentralAxis provides compliance as a service for data centers.
              </p>
              <div className="text-[16px] mt-[32px] text-[#A1A1AA] space-y-[12px]">
                {[
                  "Track data for EU, US, and global regulatory standards.",
                  "We guarantee compliance and handle every step between monitoring and reporting.",
                ].map((point, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Check className="text-[#71717A] w-5 h-5 p-1 rounded-full bg-[#27272A]" />
                    <p>{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <video
              src="vid5.mp4"
              className="rounded-lg object-cover w-[544px] h-[364px] mt-[10px] mb-[10px] mr-[30px]"
              autoPlay
              muted
              loop
              playsInline
            ></video>
          </div>
        </div>

        {/* Data Center Planning */}
        <div className="w-[1472px] h-[384px] bg-[#18181B] mt-[26px] mx-auto flex justify-between items-start mr-[40px] mb-[72px] rounded-xl">
          <div>
            <video
              src="vid6.mp4"
              className="rounded-lg object-cover w-[544px] h-[364px] mt-[10px] mb-[10px] ml-[30px]"
              autoPlay
              muted
              loop
              playsInline
            ></video>
          </div>
          <div className="text-left max-w-[720px] mr-[90px]">
            <div className="mt-[40px] ml-[40px]">
              <h1 className="text-white text-[32px] font-semibold mb-4">
                Data Center Planning
              </h1>
              <p className="text-[#A1A1AA] text-[16px]">
                Want to support the latest and greatest architectures on the
                market? Modern GPUs and even CPUs are more water and energy
                intensive than ever.
              </p>
              <div className="text-[16px] mt-[32px] text-[#A1A1AA] space-y-[12px]">
                {[
                  "Plan for high-density deployments with power and cooling in mind.",
                  "Optimize space utilization for next-gen hardware.",
                  "Ensure long-term scalability with intelligent capacity planning tools.",
                ].map((point, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Check className="text-[#71717A] w-5 h-5 p-1 rounded-full bg-[#27272A]" />
                    <p>{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
