import React from "react";

const ProgressBar = ({ value = 0 }) => {
  return (
    <div className="relative h-[25px] w-[500px] bg-slate-50 border border-black rounded-lg">
      <div className="h-full " style={{ width: `${value}%` }}></div>
      <span className="absolute inset-0 flex items-center justify-center">
        {value.toFixed()}%
      </span>
    </div>
  );
};

export default ProgressBar;
