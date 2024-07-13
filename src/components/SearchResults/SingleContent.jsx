const SingleContent = ({ title, date, posterPath, media_type }) => {
  return (
    <div className="border-2 shadow-xl shadow-teal-600 w-[200px] md:w-[250px] lg:w-[300px] mx-auto h-auto flex flex-wrap space-y-2 p-2 rounded-lg border-yellow-500 items-center justify-center">
      <img
        src={`https://image.tmdb.org/t/p/original/${posterPath}`}
        alt={title}
        className="w-[200px] h-[200px] md:w-[250px] lg:w-[300px] lg:h-[300px] object-fit rounded-t-lg"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src =
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png";
        }}
      />
      <div className="flex flex-col w-full">
        <h1 className=" font-[Poppins] font-bold text-lg italic text-white">
          {title}
        </h1>
        <div className="flex justify-between">
          <p className=" font-[Poppins] text-lg font-semibold italic text-[#0084FF]">
            {media_type}
          </p>
          <p className=" font-bold text-lg font-[Poppins] italic text-[#0084FF]">
            {date}
          </p>
        </div>
      </div>
    </div>
  );
};
export default SingleContent;
