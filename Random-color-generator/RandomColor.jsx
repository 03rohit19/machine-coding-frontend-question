import { useEffect, useState } from "react";

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#0000FF"); // Initialize to a valid hex color

  function generateRandomPattern(length) {
    return Math.floor(Math.random() * length);
  }

  function handleGenerateRandomHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor = hexColor + hex[generateRandomPattern(hex.length)];
    }
    setColor(hexColor);
  }

  function handleGenerateRandomRgbColor() {
    const r = generateRandomPattern(256);
    const g = generateRandomPattern(256);
    const b = generateRandomPattern(256);
    setColor(`rgb(${r}, ${g}, ${b})`); // Update to set a valid RGB string
  }

  useEffect(() => {
    if (typeOfColor === "rgb") handleGenerateRandomRgbColor();
    else handleGenerateRandomHexColor();
  }, [typeOfColor]);

  return (
    <div
      style={{ backgroundColor: color }} // Apply background color inline
      className="h-[630px]"
    >
      <div className="flex gap-2 justify-center items-center">
        <button
          onClick={() => setTypeOfColor("hex")}
          className="bg-gray-300 text-black px-2 py-1 rounded-lg mt-2"
        >
          Create HEX color
        </button>
        <button
          onClick={() => setTypeOfColor("rgb")}
          className="bg-gray-300 text-black px-2 py-1 rounded-lg mt-2"
        >
          Create RGB color
        </button>
        <button
          onClick={
            typeOfColor === "hex"
              ? handleGenerateRandomHexColor
              : handleGenerateRandomRgbColor
          }
          className="bg-gray-300 text-black px-2 py-1 rounded-lg mt-2"
        >
          Generate random color
        </button>
      </div>

      <div className="flex flex-col gap-[20px] justify-center items-center text-[#fff] text-[60px] mt-[50px]">
        <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}
