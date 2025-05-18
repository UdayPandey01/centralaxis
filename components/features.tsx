import React from "react";
import { Check } from "lucide-react";

const Features = () => {
  return (
    <div>
      <div className="bg-[#09090B] max-w-[1472px] mx-auto text-center px-4 md:px-6 lg:px-8 rounded-xl lg:rounded-2xl">
        <p className="text-[#71717A] bg-[#18181B] font-medium rounded-full px-2 py-0.5 inline-block mt-12 md:mt-16 lg:mt-[72px] mb-2 lg:mb-[8px] text-sm lg:text-base">
          Built for AI
        </p>

        <h1 className="text-white text-2xl md:text-3xl lg:text-[36px] font-semibold">
          Modernizing the Digital Backbone
        </h1>

        <p className="text-[#71717A] mt-3 lg:mt-[12px] mx-auto text-sm md:text-base lg:text-[16px] font-extralight max-w-3xl px-4">
          Data center software (DCIM, BMS and EPMS) has stagnated. We&apos;ve
          built a better way
        </p>

        {/* Feature sections */}
        {[
          {
            title: "Advanced Monitoring",
            description:
              "CentralAxis provides cutting-edge monitoring solutions for your data center, offering real-time insights and comprehensive analytics to optimize performance, reduce costs, and enhance reliability.",
            videoSrc: "vid1.mp4",
            points: [
              "Real-time performance metrics and predictive analytics",
              "Automated alerts and intelligent incident response",
              "Comprehensive reporting and trend analysis",
            ],
            videoRight: true,
          },
          {
            title: "Network Management and Monitoring",
            description:
              "Comprehensive network monitoring and management that ensures optimal performance, security, and reliability across your entire data center infrastructure.",
            videoSrc: "vid2.mp4",
            points: [
              "Real-time network performance monitoring and bandwidth optimization",
              "Automated network security and threat detection",
              "Advanced network diagnostics and troubleshooting tools",
            ],
            videoRight: false,
          },
          {
            title: "Asset Management",
            description:
              "Streamline your data center operations with our comprehensive asset management system. Track, maintain, and optimize your infrastructure with precision and ease.",
            videoSrc: "vid3.mp4",
            points: [
              "Automated inventory tracking and lifecycle management",
              "Intelligent ticketing based on asset health and performance",
              "Efficient resource allocation and optimization",
            ],
            videoRight: true,
          },
          {
            title: "A Single Pane of Glass",
            description:
              "A unified view across all of your BMS and EPMS systems, tailored to your needs.",
            videoSrc: "vid4.mp4",
            points: [
              "Comprehensive visibility across all of your colocation infrastructure",
              "Customizable interface tailored to your specific operational requirements and priorities.",
              "Unified dashboard integrating all BMS and EPMS systems for seamless monitoring and management.",
            ],
            videoRight: false,
          },
          {
            title: "Built-In Compliance",
            description:
              "CentralAxis provides compliance as a service for data centers.",
            videoSrc: "vid5.mp4",
            points: [
              "Track data for EU, US, and global regulatory standards.",
              "We guarantee compliance and handle every step between monitoring and reporting.",
            ],
            videoRight: true,
          },
          {
            title: "Data Center Planning",
            description:
              "Want to support the latest and greatest architectures on the market? Modern GPUs and even CPUs are more water and energy intensive than ever.",
            videoSrc: "vid6.mp4",
            points: [
              "Plan for high-density deployments with power and cooling in mind.",
              "Optimize space utilization for next-gen hardware.",
              "Ensure long-term scalability with intelligent capacity planning tools.",
            ],
            videoRight: false,
          },
        ].map((feature, index) => (
          <div 
            key={index} 
            className={`
              bg-[#18181B] 
              mt-6 md:mt-8 lg:mt-[26px] 
              mx-auto 
              rounded-lg lg:rounded-xl
              overflow-hidden
              flex 
              flex-col 
              ${index === 5 ? "mb-12 md:mb-16 lg:mb-[72px]" : ""}
              ${feature.videoRight ? "" : "md:flex-row-reverse"}
              md:flex-row
              md:items-center
              md:justify-between
              md:h-auto
              lg:h-[384px]
            `}
          >
            {/* Video */}
            <div className="w-full md:w-auto md:flex-shrink-0">
              <video
                src={feature.videoSrc}
                className="w-full h-auto md:w-[320px] lg:w-[544px] md:h-[240px] lg:h-[364px] object-cover"
                autoPlay
                muted
                loop
                playsInline
              ></video>
            </div>
            
            {/* Content */}
            <div className="text-left flex-grow p-6 md:p-8 lg:p-10">
              <h2 className="text-white text-xl md:text-2xl lg:text-[32px] font-semibold mb-2 md:mb-4">
                {feature.title}
              </h2>
              <p className="text-[#A1A1AA] text-sm md:text-base lg:text-[16px]">
                {feature.description}
              </p>
              <div className="text-sm md:text-base lg:text-[16px] mt-6 md:mt-8 lg:mt-[32px] text-[#A1A1AA] space-y-3 lg:space-y-[12px]">
                {feature.points.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="text-[#71717A] w-5 h-5 p-1 rounded-full bg-[#27272A] flex-shrink-0 mt-0.5" />
                    <p>{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;