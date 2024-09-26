import React from "react";
import ProgressBar from "./ProgressBar";

const ProgressBarApp = () => {
  return (
    <div className="app flex flex-col items-center gap-y-2 mt-4">
      <span>Progress bar</span>
      <ProgressBar value={25} />
    </div>
  );
};

export default ProgressBarApp;
