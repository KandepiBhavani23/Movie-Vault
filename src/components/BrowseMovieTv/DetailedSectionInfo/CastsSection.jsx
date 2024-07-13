import Marquee from "react-fast-marquee";

const CastItem = ({ cast }) => (
  <div
    style={{
      background:
        "linear-gradient(45deg, #845EC2, #2C73D2, #0081CF, #0089BA, #008E9B, #008F7A)",
    }}
    className="w-[200px] lg:w-[250px] xl:w-[300px] flex flex-col flex-wrap items-start justify-start h-auto p-4 text-left bg-opacity-25 rounded-3xl mr-4 mb-4 md:mb-6"
    key={cast?.id}>
    <img
      src={`https://image.tmdb.org/t/p/original/${cast?.profile_path}`}
      alt={cast?.original_name}
      className="mr-4 w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] xl:w-[200px] xl:h-[200px] tw-notification rounded-full object-contain"
      onError={(e) => {
        e.target.onerror = null;
        e.target.src =
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png";
      }}
    />
    <div className="pt-4">
      <h1>{cast?.original_name}</h1>
      <p className="">
        <span>Character: </span>
        {cast?.character}
      </p>
      <p>
        <span>Gender: </span>
        {cast?.gender === 1 ? "Female" : cast?.gender === 2 ? "Male" : "Other"}
      </p>
      <p className="inline-block px-2 py-1 font-serif text-base font-semibold text-white transition border-2 border-white rounded-3xl bg-violet-700">
        {cast?.popularity}
      </p>
    </div>
  </div>
);

const CastsSection = ({ castsData }) => {
  if (!castsData || castsData.length === 0) {
    return null;
  }

  return (
    <section className="text-white">
      <h1 className="text-3xl md:text-4xl xl:text-5xl text-start font-[Poppins] italic">
        Casts
      </h1>
      {castsData?.length > 4 ? (
        <>
          <Marquee>
            {castsData &&
              castsData?.map((cast) => <CastItem key={cast?.id} cast={cast} />)}
          </Marquee>

          <Marquee direction="right">
            {castsData &&
              castsData?.map((cast) => <CastItem key={cast?.id} cast={cast} />)}
          </Marquee>
        </>
      ) : (
        <div className="flex mx-auto">
          {castsData &&
            castsData?.map((cast) => <CastItem key={cast?.id} cast={cast} />)}
        </div>
      )}
    </section>
  );
};

export default CastsSection;
