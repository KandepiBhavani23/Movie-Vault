import React from "react";
import { Link } from "react-router-dom";
import MovieCard from "../../MovieCard";
import Carousel from "../../Carousel";

const TopMediaList = ({ title, mediaItems, mediaType }) => {
  if (!mediaItems || mediaItems.length === 0) {
    return null;
  }

  return (
    <section className="relative w-full max-w-4xl mx-auto md:max-w-5xl lg:max-w-6xl xl:max-w-7xl">
      <h2 className="pt-3 text-2xl font-bold text-white">{title}</h2>
      <Carousel>
        {mediaItems.map((media) => (
          <Link
            to={
              mediaType === "movie"
                ? `/browse-movie-tv/movie-details/${media.id}`
                : `/browse-movie-tv/tvseries-details/${media.id}`
            }
            key={media.id}>
            <MovieCard posterPath={media?.poster_path} />
          </Link>
        ))}
      </Carousel>
    </section>
  );
};

export default TopMediaList;
