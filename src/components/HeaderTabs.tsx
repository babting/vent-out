"use client";

import { useState } from "react";

const HeaderTabs = () => {
  const [activeTab, setActiveTab] = useState("분노"); // Initial active tab

  const tabs = [
    { name: "분노", label: "분노(Rage)" },
    { name: "우울", label: "우울(Depression)" },
    { name: "무기력", label: "무기력(Lethargy)" },
  ];

  return (
    <div className="sticky top-0 z-10 bg-[#121212] shadow-lg">
      <div className="flex justify-around py-4 border-b border-gray-800">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            className={`
              relative px-4 py-2 text-base font-bold transition-colors duration-300
              ${activeTab === tab.name
                  ? "text-[#FF00FF]"
                  : "text-gray-400 hover:text-gray-200"
                }
            `}
            onClick={() => setActiveTab(tab.name)}
          >
            {tab.label}
            {activeTab === tab.name && (
              <span className="absolute bottom-0 left-0 w-full h-1 bg-[#FF00FF] shadow-neon-pink animate-pulse-once"></span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HeaderTabs;
