const DetailsMovieSection = ({ detailsMovieData }) => {
  if (!detailsMovieData) {
    // Return null if detailsData is not available
    return null;
  }

  const {
    poster_path,
    original_title,
    tagline,
    overview,
    belongs_to_collection,
    genres,
    production_companies,
    production_countries,
    release_date,
  } = detailsMovieData;

  return (
    <section className="font-serif text-white" key={detailsMovieData.id}>
      <h1 className="text-3xl md:text-4xl xl:text-5xl text-start mb-5 font-[Poppins] italic">
        Movie Details
      </h1>
      <div className="flex flex-col sm:flex-col md:flex-row sm:flex-wrap md:flex-nowrap gap-y-5 sm:gap-x-0 md:gap-x-5 lg:gap-x-10">
        {poster_path && (
          <div className="h-auto mb-5 sm:w-full md:w-2/5 lg:mb-0">
            <img
              src={`https://image.tmdb.org/t/p/original/${poster_path}`}
              alt=""
              className="w-full h-[300px] sm:w-[350px] sm:h-[400px] md:w-[400px] md:h-[500px] object-fill border-2 border-[#C34A36] rounded-2xl"
            />
          </div>
        )}
        <div className="flex flex-col items-start justify-center w-full space-y-3 text-justify sm:w-full md:w-3/5 lg:w-4/5">
          {(original_title || tagline) && (
            <h1 className="text-xl lg:text-2xl xl:text-3xl font-bold font-[Poppins] italic text-[#0084FF]">
              <span className="text-[#C70039] ">Title:</span>{" "}
              {original_title || "N/A"} - {tagline || ""}
            </h1>
          )}
          {overview && (
            <p className="text-sm md:text-base lg:text-lg text-[#00CCCD]">
              <span className="text-[#C70039] italic font-bold">
                Description:
              </span>{" "}
              {overview}
            </p>
          )}
          {belongs_to_collection && (
            <div className="text-sm md:text-base lg:text-lg">
              <p className="text-[#F76505] font-semibold pb-3">
                <span className="text-[#C70039] italic  font-bold">
                  Collection:
                </span>{" "}
                {belongs_to_collection?.name || "N/A"}
              </p>

              <div className="grid grid-cols-2 gap-3">
                <img
                  src={`https://image.tmdb.org/t/p/original/${belongs_to_collection?.poster_path}`}
                  alt={belongs_to_collection?.name}
                  className="w-[200px] h-[150px] lg:w-[250px] lg:h-[200px] rounded-2xl border-2 border-teal-400 object-fill"
                />
                <img
                  src={`https://image.tmdb.org/t/p/original/${belongs_to_collection?.backdrop_path}`}
                  alt={belongs_to_collection?.name}
                  className="w-[200px] h-[150px] lg:w-[250px] lg:h-[200px] rounded-2xl border-2 border-teal-400 object-fill"
                />
              </div>
            </div>
          )}
          {genres && genres.length > 0 && (
            <div className="text-sm md:text-base lg:text-lg">
              <span className="text-[#C70039] italic font-bold">Genres:</span>{" "}
              {genres.map((genre, index) => (
                <span className="text-[#FBD28B] font-medium" key={genre.id}>
                  {genre.name}
                  {index < genres.length - 1 && ", "}
                </span>
              ))}
            </div>
          )}
          {production_companies && production_companies.length > 0 && (
            <div className="text-sm md:text-base lg:text-lg">
              <span className="text-[#C70039] italic font-bold">
                Production Companies:
              </span>
              <div className="grid grid-cols-3 gap-5 text-sm md:grid-cols-2 md:text-base lg:text-lg lg:grid-cols-3 xl:grid-cols-4">
                {production_companies.map((companies) => (
                  <div key={companies.id} className="my-1">
                    <span className="text-[#53E0BC]">{companies.name}</span>
                    <img
                      src={`https://image.tmdb.org/t/p/original/${companies?.logo_path}`}
                      alt={companies?.name}
                      style={{
                        background:
                          "linear-gradient(45deg, #0066FF, #0084FF, #0092FF, #0097D2, #00988F,#BF20E3)",
                      }}
                      className="w-[200px] h-[100px] p-2 mt-2 object-contain rounded-2xl"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
          {production_countries && production_countries.length > 0 && (
            <p className="text-sm md:text-base lg:text-lg text-[#FABEDE]">
              <span className="text-[#C70039] italic font-bold">
                Production Country:
              </span>{" "}
              {production_countries.map((country, index) => (
                <span key={country.iso_3166_1}>
                  {country.name}
                  {index < production_countries.length - 1 && ", "}
                </span>
              ))}
            </p>
          )}
          {release_date && (
            <p className="text-sm md:text-base lg:text-lg text-[#33C5FF]">
              <span className="text-[#C70039] italic font-bold">
                Release Date:
              </span>{" "}
              {release_date}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default DetailsMovieSection;
