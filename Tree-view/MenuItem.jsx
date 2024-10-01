import React, { useState } from "react";

const MenuItem = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleChildren = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <li
      key={item?.id}
      className="flex flex-col justify-start items-start gap-2 p-3 bg-white rounded-md shadow-sm hover:bg-gray-50 w-full"
    >
      <div className="flex justify-between items-center w-full">
        {/* Label and toggle button */}
        <p className="text-gray-800 font-medium">{item?.label}</p>

        {/* Toggle icon */}
        {item?.children?.length > 0 && (
          <button
            onClick={toggleChildren}
            className="text-gray-500 hover:text-gray-800 transition-colors"
          >
            {isExpanded ? "−" : "+"}
          </button>
        )}
      </div>

      {/* Children list */}
      {isExpanded && item?.children?.length > 0 && (
        <ul className="pl-6 border-l-2 border-gray-300 space-y-2 w-full">
          {item.children.map((child) => (
            <MenuItem key={child?.id} item={child} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default MenuItem;
