"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { TiArrowSortedDown } from "react-icons/ti";

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
      { name: "Change Management", route: "/datacenter/change" },
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
      { name: "Energy Efficiency", route: "/energy-solutions/energy" },
      { name: "Stranded Energy Map", route: "/energy-solutions/stranded-energy" },
      {
        name: "Environmental Product Declaration",
        route: "/energy-solutions/epd",
      },
      { name: "Renewables Integration", route: "/energy-solutions/renewables" },
      { name: "Power Resource Management", route: "/energy-solutions/power" },
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
              className="cursor-pointer flex items-center text-sm font-medium"
              onMouseEnter={() => handleMouseEnter("datacenter")}
            >
              Data Center Infrastructure Management
              <TiArrowSortedDown className="ml-1 text-lg" />
            </div>
            {/* Desktop dropdown that stays open until mouse leaves the dropdown area */}
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
              className="cursor-pointer flex items-center text-sm font-medium"
              onMouseEnter={() => handleMouseEnter("intelligence")}
            >
              Intelligence Solutions
              <TiArrowSortedDown className="ml-1 text-lg" />
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
              className="cursor-pointer flex items-center text-sm font-medium"
              onMouseEnter={() => handleMouseEnter("compliance")}
            >
              Data Center Compliance
              <TiArrowSortedDown className="ml-1 text-lg" />
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
              className="cursor-pointer flex items-center text-sm font-medium"
              onMouseEnter={() => handleMouseEnter("sustainability")}
            >
              Sustainability Blog
              <TiArrowSortedDown className="ml-1 text-lg" />
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

        {/* Mobile menu that slides from top to bottom */}
        <div
          className={`lg:hidden fixed top-0 left-0 right-0 z-50 bg-black/95 h-screen overflow-y-auto transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
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
                <TiArrowSortedDown 
                  className={`text-xl transition-transform ${
                    expandedMobileSection === "datacenter" ? "rotate-180" : ""
                  }`}
                />
              </div>
              <div 
                className={`transition-all duration-300 ${
                  expandedMobileSection === "datacenter" ? "max-h-screen py-2" : "max-h-0 overflow-hidden"
                }`}
              >
                {dropdownMenus.datacenter.map((item, index) => (
                  <Link href={item.route} key={index} onClick={() => setIsMobileMenuOpen(false)}>
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
                <TiArrowSortedDown 
                  className={`text-xl transition-transform ${
                    expandedMobileSection === "intelligence" ? "rotate-180" : ""
                  }`}
                />
              </div>
              <div 
                className={`transition-all duration-300 ${
                  expandedMobileSection === "intelligence" ? "max-h-screen py-2" : "max-h-0 overflow-hidden"
                }`}
              >
                {dropdownMenus.intelligence.map((item, index) => (
                  <Link href={item.route} key={index} onClick={() => setIsMobileMenuOpen(false)}>
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
                <TiArrowSortedDown 
                  className={`text-xl transition-transform ${
                    expandedMobileSection === "compliance" ? "rotate-180" : ""
                  }`}
                />
              </div>
              <div 
                className={`transition-all duration-300 ${
                  expandedMobileSection === "compliance" ? "max-h-screen py-2" : "max-h-0 overflow-hidden"
                }`}
              >
                {dropdownMenus.compliance.map((item, index) => (
                  <Link href={item.route} key={index} onClick={() => setIsMobileMenuOpen(false)}>
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
                <TiArrowSortedDown 
                  className={`text-xl transition-transform ${
                    expandedMobileSection === "sustainability" ? "rotate-180" : ""
                  }`}
                />
              </div>
              <div 
                className={`transition-all duration-300 ${
                  expandedMobileSection === "sustainability" ? "max-h-screen py-2" : "max-h-0 overflow-hidden"
                }`}
              >
                {dropdownMenus.sustainability.map((item, index) => (
                  <Link href={item.route} key={index} onClick={() => setIsMobileMenuOpen(false)}>
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