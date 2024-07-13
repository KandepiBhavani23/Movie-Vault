//Create a list and grid view for this one
import { Link, useParams } from "react-router-dom";

import { useLocation } from "react-router-dom";

const TvSeasons = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const seasonsData = params.get("seasonsData");
  const parsedSeasonsData = JSON.parse(decodeURIComponent(seasonsData));
  console.log(parsedSeasonsData);

  const { tvSeriesId } = useParams();

  return (
    <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 text-white pt-[14%] sm:pt-[5%] justify-center md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto md:gap-5 xl:gap-7">
      {parsedSeasonsData?.map((season) => (
        <div
          key={season?.id}
          className="flex flex-col items-center justify-center py-4 space-y-2">
          <h1 className="text-xl font-bold ">{season?.name}</h1>
          <Link
            to={`/browse-movie-tv/tv-series/${tvSeriesId}/season/${season?.season_number}`}>
            <img
              src={`https://image.tmdb.org/t/p/original/${season?.poster_path}`}
              alt="Movie Card"
              className="w-[200px] h-[250px] md:w-[250px] md:h-[300px] xl:w-[300px] xl:h-[350px] border-2 border-yellow-700 duration-500 rounded-md cursor-pointer transition-transform hover:scale-110 hover:opacity-100"
              loading="lazy"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png";
              }}
            />
          </Link>
          {season?.overview && (
            <p className="hidden text-justify lg:inline-block">
              {season?.overview.substring(0, 200) + "..."}
            </p>
          )}
          {season?.air_date && (
            <p className="hidden lg:inline-block">
              <span className="py-4 font-sans ">Air Date : </span>
              {season?.air_date}
            </p>
          )}
        </div>
      ))}
    </section>
  );
};
export default TvSeasons;
