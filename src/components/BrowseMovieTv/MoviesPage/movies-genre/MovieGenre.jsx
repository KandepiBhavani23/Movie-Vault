import React from "react";
import { Link } from "react-router-dom";
import useGenreMovies from "../../../../Hooks/useGenreMovies";
import MovieCard from "../../MovieCard";
import Carousel from "../../Carousel";
import { useSelector } from "react-redux";

const MovieGenre = () => {
  useGenreMovies();
  const movieGenre = useSelector((store) => store.movies.movieGenre);
  return (
    <div className="w-full max-w-4xl mx-auto md:max-w-5xl lg:max-w-6xl xl:max-w-7xl y-6">
      {movieGenre?.map((genre) => {
        const { movies, genreName } = genre;
        return (
          <div key={genreName} className="mb-4">
            <h1 className="text-2xl font-bold">{genreName}</h1>
            <Carousel>
              {movies?.map((movie) => (
                <Link
                  to={`/browse-movie-tv/movie-details/${movie.id}`}
                  key={movie.id}
                  className="flex flex-col items-center flex-shrink-0 w-auto h-auto text-center">
                  <MovieCard posterPath={movie?.poster_path} />
                </Link>
              ))}
            </Carousel>
          </div>
        );
      })}
    </div>
  );
};

export default MovieGenre;
