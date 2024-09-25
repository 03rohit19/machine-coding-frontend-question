import { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ noOfStar }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  // Handles star click, setting the rating
  function handleClick(currentIndex) {
    setRating(currentIndex);
  }

  // Handles mouse entering a star (hover)
  function handleMouseEnter(currentIndex) {
    setHover(currentIndex);
  }

  // Resets the hover state when the mouse leaves, keeping the current rating
  function handleMouseLeave() {
    setHover(0); // Reset hover when mouse leaves
  }

  return (
    <div className="star-rating flex justify-center space-x-1">
      {[...Array(noOfStar)].map((_, index) => {
        const starIndex = index + 1;
        return (
          <FaStar
            key={starIndex}
            className={`cursor-pointer transition-colors duration-300 ${
              starIndex <= (hover || rating)
                ? "text-yellow-500" // Active star color
                : "text-gray-400" // Inactive star color
            }`}
            onClick={() => handleClick(starIndex)}
            onMouseEnter={() => handleMouseEnter(starIndex)}
            onMouseLeave={handleMouseLeave}
            size={40}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
