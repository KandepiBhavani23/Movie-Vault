import React from "react";
import { Link } from "react-router-dom";
import MovieCard from "../../MovieCard";
import Carousel from "../../Carousel";
import { useSelector } from "react-redux";
import useTvGenre from "../../../../Hooks/useTvGenre";

const TvGenre = () => {
  useTvGenre();

  const tvgenre = useSelector((store) => store?.tvseries?.tvgenres);
  return (
    <div className="w-full max-w-4xl mx-auto text-white md:max-w-5xl lg:max-w-6xl xl:max-w-7xl y-6">
      {tvgenre?.map((tvgenre) => {
        const { tvSeries, genreName } = tvgenre;
        return (
          <div key={genreName} className="mb-4">
            <h1 className="text-2xl font-bold">{genreName}</h1>
            <Carousel>
              {tvSeries?.map((tvseries) => (
                <Link
                  to={`/browse-movie-tv/tvseries-details/${tvseries.id}`}
                  key={tvseries?.id}
                  className="flex flex-col items-center flex-shrink-0 w-auto h-auto text-center">
                  <MovieCard posterPath={tvseries?.poster_path} />
                </Link>
              ))}
            </Carousel>
          </div>
        );
      })}
    </div>
  );
};

export default TvGenre;
