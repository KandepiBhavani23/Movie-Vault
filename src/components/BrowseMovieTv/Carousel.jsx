import React, { useState } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const Carousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const lastIndex = children.length - 1;

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === lastIndex ? prevIndex : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));
  };

  return (
    <div className="relative">
      <div className="flex overflow-hidden">
        <div
          className="flex"
          style={{
            transform: `translateX(-${currentIndex * 200}px)`,
          }}>
          {children}
        </div>
      </div>
      <button
        className="absolute left-0 w-10 text-lg text-white transform -translate-y-1/2 bg-black/70 scroll-smooth top-1/2"
        onClick={handlePrev}
        disabled={currentIndex === 0}
        style={{ height: "100%" }}>
        <MdArrowBackIos className="text-xl font-medium sm:text-2xl md:text-3xl md:font-semibold lg:text-4xl xl:text-5xl xl:font-bold" />
      </button>
      <button
        className="absolute right-0 w-10 text-lg text-white transform -translate-y-1/2 bg-black/70 scroll-smooth top-1/2"
        onClick={handleNext}
        disabled={currentIndex === lastIndex}
        style={{ height: "100%" }}>
        <MdArrowForwardIos className="text-xl font-medium sm:text-2xl md:text-3xl md:font-semibold lg:text-4xl xl:text-5xl xl:font-bold" />
      </button>
    </div>
  );
};

export default Carousel;
