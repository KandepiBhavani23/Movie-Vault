const VideoTitle = ({ originalTitle, overview, releaseDate }) => {
  return (
    <div className="w-[100%] aspect-video pt-[10%] md:space-y-3 lg:space-y-4 px-6 md:px-12 lg:px-14 xl:px-16 text-white absolute bg-gradient-to-r from-gray-900 bg-opacity-0 flex flex-col">
      <h1 className="hidden font-bold md:inline-block md:text-2xl">
        {originalTitle}
      </h1>
      <p className="hidden text-justify md:text-sm md:w-1/2 md:inline-block lg:text-base xl:text-lg">
        {overview}
      </p>
      <p className="hidden text-base md:inline-block lg:text-lg">
        {releaseDate}
      </p>
      <div className="my-4 md:m-0">
        <button className="hidden px-3 py-1 text-base text-black bg-white rounded-lg md:inline-block lg:text-lg md:py-1 md:px-3 hover:bg-opacity-80 lg:px-7 lg:py-3">
          ▶️ Play
        </button>
        <button className="hidden p-4 px-12 mx-2 text-base text-white bg-gray-500 bg-opacity-50 rounded-lg lg:text-lg md:py-1 md:px-3 md:inline-block lg:px-7 lg:py-3">
          More Info
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;
