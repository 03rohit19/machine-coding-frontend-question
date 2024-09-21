import React from "react";

const Pill = ({ image, text, onClick }) => {
  return (
    <span
      className="user-pill flex items-center gap-2 bg-black text-white rounded-full px-3 py-1 cursor-pointer hover:bg-gray-800"
      onClick={onClick}
    >
      <img src={image} alt={text} className="h-5 w-5 rounded-full" />
      <span className="text-md">{text} &times;</span>
    </span>
  );
};

export default Pill;
