"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

type DropdownType =
  | "datacenter"
  | "intelligence"
  | "compliance"
  | "sustainability"
  | null;

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState<DropdownType>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileSection, setExpandedMobileSection] = useState<string | null>(null);

  const handleMouseEnter = (dropdown: DropdownType) => {
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleMobileSection = (section: string) => {
    if (expandedMobileSection === section) {
      setExpandedMobileSection(null);
    } else {
      setExpandedMobileSection(section);
    }
  };

  const dropdownMenus = {
    datacenter: [
      { name: "Monitoring Devices", route: "/datacenter/monitoring" },
      { name: "Asset Tracking", route: "/datacenter/assets" },
      { name: "Network Management", route: "/datacenter/network" },
      { name: "Change Management", route: "/datacenter/changes" },
      { name: "Colocation Management", route: "/datacenter/colocation" },
      { name: "Data Center Planner", route: "/datacenter/planner" },
      { name: "Firmware Management", route: "/datacenter/firmware" },
      { name: "IP Address Management", route: "/datacenter/ip" },
      { name: "Customer Portal", route: "/datacenter/customer" },
      { name: "Custom Insights", route: "/datacenter/insights" },
      { name: "Custom Data Center Solutions", route: "/datacenter/solutions" },
    ],
    intelligence: [
      { name: "Digital Twins", route: "/intelligence/digital-twins" },
      { name: "Smart Power Mapping", route: "/intelligence/power-mapping" },
      {
        name: "Predictive Failure and Alerting",
        route: "/intelligence/predictive",
      },
      { name: "Smart Control Systems", route: "/intelligence/control" },
      { name: "Automated Discovery", route: "/intelligence/discovery" },
    ],
    compliance: [
      { name: "DCOI Compliance", route: "/compliance/dcoi" },
      { name: "(EU) 2023/1791", route: "/compliance/eu-2023" },
      { name: "EN 50600", route: "/compliance/en-50600" },
      { name: "LEED Certification", route: "/compliance/leed" },
      { name: "ISO/IEC 30134-2", route: "/compliance/iso" },
      { name: "(EPA) ENERGY STAR", route: "/compliance/energy-star" },
      {
        name: "European Commission Joint Research Centre (JRC)",
        route: "/compliance/jrc",
      },
    ],
    sustainability: [
      { name: "Energy Efficiency", route: "/sustainability/energy" },
      { name: "Stranded Energy Map", route: "/sustainability/stranded-energy" },
      {
        name: "Environmental Product Declaration",
        route: "/sustainability/epd",
      },
      { name: "Renewables Integration", route: "/sustainability/renewables" },
      { name: "Power Resource Management", route: "/sustainability/power" },
    ],
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-md text-white w-full border-b border-white/10">
      <div className="container mx-auto flex justify-between items-center px-4 py-4">
        <div className="flex items-center">
          <div className="mr-2">
            <Image src="/logo.png" alt="CentralAxis Logo" width={36} height={41} />
          </div>
          <div className="text-xl font-bold">CentralAxis</div>
        </div>

        <button className="lg:hidden p-2" onClick={toggleMobileMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <div className="hidden lg:flex space-x-8">
          <div className="relative group">
            <div
              className="cursor-pointer flex items-center text-sm font-semibold"
              onMouseEnter={() => handleMouseEnter("datacenter")}
            >
              Data Center Infrastructure Management
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            <div
              className={`absolute z-10 mt-2 w-64 bg-black/95 backdrop-blur-md text-white rounded shadow-lg border border-white/20 transition-all duration-200 ${
                activeDropdown === "datacenter"
                  ? "opacity-100 visible"
                  : "opacity-0 invisible"
              }`}
              onMouseEnter={() => handleMouseEnter("datacenter")}
              onMouseLeave={handleMouseLeave}
              style={{ left: "-80px" }}
            >
              {dropdownMenus.datacenter.map((item, index) => (
                <Link href={item.route} key={index}>
                  <div className="px-4 py-2 hover:text-gray-400 cursor-pointer transition-colors duration-200">
                    {item.name}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="relative group">
            <div
              className="cursor-pointer flex items-center text-sm font-semibold"
              onMouseEnter={() => handleMouseEnter("intelligence")}
            >
              Intelligence
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            <div
              className={`absolute z-10 mt-2 w-64 bg-black/95 backdrop-blur-md text-white rounded shadow-lg border border-white/20 transition-all duration-200 ${
                activeDropdown === "intelligence"
                  ? "opacity-100 visible"
                  : "opacity-0 invisible"
              }`}
              onMouseEnter={() => handleMouseEnter("intelligence")}
              onMouseLeave={handleMouseLeave}
              style={{ left: "-80px" }}
            >
              {dropdownMenus.intelligence.map((item, index) => (
                <Link href={item.route} key={index}>
                  <div className="px-4 py-2 hover:text-gray-400 cursor-pointer transition-colors duration-200">
                    {item.name}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="relative group">
            <div
              className="cursor-pointer flex items-center text-sm font-semibold"
              onMouseEnter={() => handleMouseEnter("compliance")}
            >
              Compliance
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            <div
              className={`absolute z-10 mt-2 w-64 bg-black/95 backdrop-blur-md text-white rounded shadow-lg border border-white/20 transition-all duration-200 ${
                activeDropdown === "compliance"
                  ? "opacity-100 visible"
                  : "opacity-0 invisible"
              }`}
              onMouseEnter={() => handleMouseEnter("compliance")}
              onMouseLeave={handleMouseLeave}
              style={{ left: "-80px" }}
            >
              {dropdownMenus.compliance.map((item, index) => (
                <Link href={item.route} key={index}>
                  <div className="px-4 py-2 hover:text-gray-400 cursor-pointer transition-colors duration-200">
                    {item.name}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="relative group">
            <div
              className="cursor-pointer flex items-center text-sm font-semibold"
              onMouseEnter={() => handleMouseEnter("sustainability")}
            >
              Sustainability
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            <div
              className={`absolute z-10 mt-2 w-64 bg-black/95 backdrop-blur-md text-white rounded shadow-lg border border-white/20 transition-all duration-200 ${
                activeDropdown === "sustainability"
                  ? "opacity-100 visible"
                  : "opacity-0 invisible"
              }`}
              onMouseEnter={() => handleMouseEnter("sustainability")}
              onMouseLeave={handleMouseLeave}
              style={{ left: "-80px" }}
            >
              {dropdownMenus.sustainability.map((item, index) => (
                <Link href={item.route} key={index}>
                  <div className="px-4 py-2 hover:text-gray-400 cursor-pointer transition-colors duration-200">
                    {item.name}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div
          className={`lg:hidden fixed inset-0 bg-black/95 z-50 transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          } overflow-y-auto`}
        >
          <div className="flex justify-between items-center p-4 border-b border-white/10">
            <div className="flex items-center">
              <div className="mr-2">
                <Image src="/logo.png" alt="CentralAxis Logo" width={32} height={36} />
              </div>
              <div className="text-xl font-bold">CentralAxis</div>
            </div>
            <button className="p-2" onClick={toggleMobileMenu}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          
          <div className="py-2">
            <div className="border-b border-white/10">
              <div 
                className="flex justify-between items-center px-4 py-3 cursor-pointer"
                onClick={() => toggleMobileSection("datacenter")}
              >
                <div className="font-semibold">Data Center Infrastructure Management</div>
                <svg
                  className={`w-5 h-5 transition-transform ${
                    expandedMobileSection === "datacenter" ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              <div 
                className={`transition-all duration-300 overflow-hidden ${
                  expandedMobileSection === "datacenter" ? "max-h-96" : "max-h-0"
                }`}
              >
                {dropdownMenus.datacenter.map((item, index) => (
                  <Link href={item.route} key={index}>
                    <div className="px-6 py-2 text-gray-300 cursor-pointer hover:text-white">
                      {item.name}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="border-b border-white/10">
              <div 
                className="flex justify-between items-center px-4 py-3 cursor-pointer"
                onClick={() => toggleMobileSection("intelligence")}
              >
                <div className="font-semibold">Intelligence Solutions</div>
                <svg
                  className={`w-5 h-5 transition-transform ${
                    expandedMobileSection === "intelligence" ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              <div 
                className={`transition-all duration-300 overflow-hidden ${
                  expandedMobileSection === "intelligence" ? "max-h-96" : "max-h-0"
                }`}
              >
                {dropdownMenus.intelligence.map((item, index) => (
                  <Link href={item.route} key={index}>
                    <div className="px-6 py-2 text-gray-300 cursor-pointer hover:text-white">
                      {item.name}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="border-b border-white/10">
              <div 
                className="flex justify-between items-center px-4 py-3 cursor-pointer"
                onClick={() => toggleMobileSection("compliance")}
              >
                <div className="font-semibold">Data Center Compliance</div>
                <svg
                  className={`w-5 h-5 transition-transform ${
                    expandedMobileSection === "compliance" ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              <div 
                className={`transition-all duration-300 overflow-hidden ${
                  expandedMobileSection === "compliance" ? "max-h-96" : "max-h-0"
                }`}
              >
                {dropdownMenus.compliance.map((item, index) => (
                  <Link href={item.route} key={index}>
                    <div className="px-6 py-2 text-gray-300 cursor-pointer hover:text-white">
                      {item.name}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="border-b border-white/10">
              <div 
                className="flex justify-between items-center px-4 py-3 cursor-pointer"
                onClick={() => toggleMobileSection("sustainability")}
              >
                <div className="font-semibold">Sustainability Blog</div>
                <svg
                  className={`w-5 h-5 transition-transform ${
                    expandedMobileSection === "sustainability" ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              <div 
                className={`transition-all duration-300 overflow-hidden ${
                  expandedMobileSection === "sustainability" ? "max-h-96" : "max-h-0"
                }`}
              >
                {dropdownMenus.sustainability.map((item, index) => (
                  <Link href={item.route} key={index}>
                    <div className="px-6 py-2 text-gray-300 cursor-pointer hover:text-white">
                      {item.name}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;