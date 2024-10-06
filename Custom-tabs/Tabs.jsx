import React, { useState } from "react";

const Tabs = ({ tabContent, onChange }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleTabChange(getCurrentIndex) {
    setCurrentIndex(getCurrentIndex);
    onChange(getCurrentIndex);
  }

  return (
    <div className="w-full">
      {/* Tab Headers */}
      <div className="flex border-b border-gray-300">
        {tabContent.map((tabItem, index) => (
          <div
            key={tabItem.label}
            onClick={() => handleTabChange(index)}
            className={`cursor-pointer py-2 px-4 text-center w-1/3 transition-colors duration-300 ${
              currentIndex === index
                ? "border-b-2 border-blue-500 text-blue-500"
                : "border-b-2 border-transparent text-gray-500 hover:text-blue-500"
            }`}
          >
            <span className="font-medium">{tabItem.label}</span>
          </div>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-5 bg-gray-50 border border-gray-200 rounded-md mt-4">
        {tabContent[currentIndex] && tabContent[currentIndex].content}
      </div>
    </div>
  );
};

export default Tabs;
