import React from "react";

const ContentWithVideo = ({ title, description, videoSrc, swapOrder }) => {
  const normalDevices = swapOrder ? 1 : 2;
  const largeDevices = swapOrder ? 2 : 1;

  return (
    <section className="flex flex-wrap lg:flex lg:justify-between lg:items-center lg:px-4 relative z-[3] text-white w-full mx-auto">
      <div
        className={`w-full lg:w-[50%] space-y-4 lg:space-y-6 lg:order-${largeDevices} sm:order-${normalDevices} lg:pr-10`}>
        <h1 className="font-serif text-xl font-black tracking-wider sm:text-2xl md:text-3xl xl:text-4xl gradient-text">
          {title}
        </h1>
        {description.map((desc, index) => (
          <p
            key={index}
            className="text-base font-medium leading-5 tracking-normal text-justify lg:leading-6 lg:tracking-wider lg:text-lg ">
            {desc}
          </p>
        ))}
      </div>
      <div className="w-full lg:w-[50%]  text-center flex justify-center order-2 lg:order-1 pt-7">
        <video
          controls
          width="90%"
          height="90%"
          autoPlay
          loop
          muted
          controlsList="nodownload"
          className="left-0 right-0 border-2 border-yellow-600 rounded-2xl">
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default ContentWithVideo;
