import { Link } from "react-router-dom";

const DetailsTvSection = ({ detailsTvData }) => {
  if (!detailsTvData) {
    // Return null if detailsData is not available
    return null;
  }

  const {
    id,
    poster_path,
    original_name,
    tagline,
    overview,
    genres,
    production_companies,
    production_countries,
    created_by,
    seasons,
  } = detailsTvData;

  if (
    !id ||
    (!original_name &&
      !tagline &&
      !overview &&
      !genres &&
      !production_companies &&
      !production_countries &&
      !created_by &&
      !seasons)
  ) {
    // Return null if no relevant details are available
    return null;
  }

  return (
    <section className="font-serif text-white" key={id}>
      <h1 className="text-3xl md:text-4xl xl:text-5xl text-start mb-5 font-[Poppins] italic">
        TV Series Details
      </h1>
      <div className="flex flex-col sm:flex-col md:flex-row sm:flex-wrap md:flex-nowrap gap-y-5 sm:gap-x-0 md:gap-x-5 lg:gap-x-10">
        {poster_path && (
          <div className="h-auto mb-5 sm:w-full md:w-2/5 lg:mb-0">
            <img
              src={`https://image.tmdb.org/t/p/original/${poster_path}`}
              alt=""
              className="w-full h-[300px] sm:w-[350px] sm:h-[400px] md:w-[400px] md:h-[500px] lg:h-[90%] object-cover border-2 border-[#C34A36] rounded-2xl"
            />
          </div>
        )}
        <div className="flex flex-col items-start justify-center w-full space-y-3 text-justify sm:w-full md:w-3/5 lg:w-4/5">
          {(original_name || tagline) && (
            <h1 className="text-xl lg:text-2xl xl:text-3xl font-bold font-[Poppins] italic text-[#0084FF]">
              <span className="text-[#C70039] ">Title:</span>{" "}
              {original_name || "N/A"} - {tagline || ""}
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
          {created_by && created_by.length > 0 && (
            <div className="text-sm md:text-base lg:text-lg">
              <span className="text-[#C70039] italic font-bold">
                Created By:
              </span>
              <div className="grid grid-cols-3 gap-6 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4 sm:gap-7 lg:gap-8 xl:grid-cols-5">
                {created_by.map((created) => (
                  <div key={created.id} className="my-1">
                    <span className="text-[#53E0BC]">{created?.name}</span>
                    <img
                      src={`https://image.tmdb.org/t/p/original/${created?.profile_path}`}
                      alt={created?.name}
                      style={{
                        background:
                          "linear-gradient(45deg, #0066FF, #0084FF, #0092FF, #0097D2, #00988F,#BF20E3)",
                      }}
                      className="h-[100px] w-[100px] md:w-[120px] md:h-[120px] p-1 mt-2 object-fill rounded-2xl "
                    />
                  </div>
                ))}
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
              <div className="grid grid-cols-2 text-sm sm:grid-cols-3 sm:gap-4 md:grid-cols-2 md:text-base lg:text-lg lg:grid-cols-3 xl:grid-cols-4">
                {production_companies.map((companies) => (
                  <div
                    key={companies.id}
                    className="flex flex-col items-center justify-center my-1">
                    <span className="text-[#53E0BC] flex-wrap text-center">
                      {companies.name}
                    </span>
                    <img
                      src={`https://image.tmdb.org/t/p/original/${companies?.logo_path}`}
                      alt={companies?.name}
                      style={{
                        background:
                          "linear-gradient(45deg, #0066FF, #0084FF, #0092FF, #0097D2, #00988F,#BF20E3)",
                      }}
                      className="h-[100px] w-[100px] md:w-[130px] lg:w-[150px] p-2 mt-2 object-contain rounded-2xl"
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
          {seasons && seasons.length > 0 && (
            <Link
              className="w-full"
              to={`/browse-movie-tv/tv-seasons/${id}?seasonsData=${encodeURIComponent(
                JSON.stringify(seasons)
              )}`}>
              <button className="bg-red-500 w-1/2 !important py-3 text-sm md:text-base lg:text-lg font-semibold rounded-xl">
                Watch Seasons
              </button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};
export default DetailsTvSection;
