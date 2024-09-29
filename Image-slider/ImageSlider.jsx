import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const ImageSlider = ({ url, limit, page }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Function to fetch images
  async function fetchImages(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();
      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }

  // Handle Previous Slide
  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }

  // Handle Next Slide
  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }

  // Fetch images when url, page, or limit changes
  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url, page, limit]);

  // If loading, show a loading indicator
  if (loading) {
    return (
      <div className="flex mx-auto justify-center items-center text-4xl mt-32">
        Loading data! Please wait...
      </div>
    );
  }

  // If there's an error, display the error message
  if (error !== null) {
    return <div>Error occurred! {error}</div>;
  }

  return (
    <>
      <div className="flex mt-12 mx-auto justify-center">
        <div className="relative flex justify-center items-center w-[600px] h-[450px]">
          {/* Previous Arrow with click handler */}
          <BsArrowLeftCircleFill
            className="absolute w-[2rem] h-[2rem] text-white left-[1rem] cursor-pointer z-10" // Added z-10 for visibility
            onClick={handlePrevious}
          />

          {/* Image Slider */}
          {images && images.length > 0
            ? images.map((imagesItem, index) => {
                return (
                  <img
                    key={imagesItem.id}
                    alt={`Slide ${index}`}
                    src={imagesItem.download_url}
                    className={`absolute transition-opacity duration-500 ${
                      currentSlide === index
                        ? "opacity-100 z-0"
                        : "opacity-0 z-0"
                    } w-full h-full object-cover`}
                  />
                );
              })
            : null}

          {/* Next Arrow with click handler */}
          <BsArrowRightCircleFill
            className="absolute w-[2rem] h-[2rem] text-white right-[1rem] cursor-pointer z-10" // Added z-10 for visibility
            onClick={handleNext}
          />

          {/* Slide indicators */}
          <span className="circle-indicator flex absolute bottom-[1rem] z-20">
            {images && images.length > 0
              ? images.map((_, index) => {
                  return (
                    <button
                      key={index}
                      className={`h-[15px] w-[15px] rounded-full border-none outline-none m-[0.2rem] cursor-pointer ${
                        currentSlide === index
                          ? "bg-white"
                          : "bg-gray-300 opacity-50"
                      }`}
                      onClick={() => setCurrentSlide(index)}
                    ></button>
                  );
                })
              : null}
          </span>
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
