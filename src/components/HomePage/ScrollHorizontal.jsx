import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LazyLoadImage } from "react-lazy-load-image-component";

gsap.registerPlugin(ScrollTrigger);

const ScrollHorizontal = ({ scrollImagesArray }) => {
  const panelsContainer = useRef();
  const numCols = 6;

  const customRows = [
    { heading: "Playing Now", images: scrollImagesArray.slice(0, numCols) },
    {
      heading: "Latest Trends",
      images: scrollImagesArray.slice(numCols, 2 * numCols),
    },
    {
      heading: "Horror Movies",
      images: scrollImagesArray.slice(2 * numCols, 3 * numCols),
    },
    {
      heading: "Top Picks",
      images: scrollImagesArray.slice(3 * numCols, 4 * numCols),
    },
    {
      heading: "Action Movies",
      images: scrollImagesArray.slice(4 * numCols, 5 * numCols),
    },
  ];

  useEffect(() => {
    const totalCols = customRows.reduce(
      (total, row) => total + row.images.length,
      0
    );
    const numRows = customRows.length;

    const panels = panelsContainer.current.children;

    const panelWidthPercent = 100 / totalCols;
    const initialXPercent = -panelWidthPercent * (totalCols - numCols) + 80;

    gsap.set(panels, {
      xPercent: initialXPercent,
      yPercent: 10 * (numRows - 3),
    });

    gsap.to(panels, {
      xPercent: (index) => (index % 2 === 0 ? 25 : -25),
      ease: "none",
      scrollTrigger: {
        trigger: panelsContainer.current,
        scrub: 1,
      },
      // onUpdate: () => {
      //   console.log(
      //     "Animation Progress:",
      //     gsap.getProperty(panels[0], "xPercent")
      //   );
      // },
    });
  }, [customRows, numCols]);

  return (
    <div className="flex flex-wrap mx-auto" ref={panelsContainer}>
      {customRows.map((row, rowIndex) => (
        <div key={rowIndex} className="w-full mb-4">
          <h2 className="mb-2 font-serif text-base font-bold text-white xl:text-2xl md:text-xl">
            {row.heading}
          </h2>
          <div className="flex items-center justify-center">
            {row.images.map((item, index) => (
              <div
                key={item.id}
                className={`flex justify-center items-center w-full`}
                style={{
                  flex: `0 0 ${100 / numCols}%`,
                }}>
                <LazyLoadImage
                  src={item.url}
                  alt={`${row.heading} - ${index + 1}`}
                  className="border-white border-2 w-[80px] h-[80px] md:w-[140px] md:h-[140px] lg:w-[160px] lg:h-[160px] xl:w-[200px] xl:h-[200px] my-2 rounded-lg shadow-lg hover:scale-105 transition-all duration-300 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScrollHorizontal;
