import { Link, useLocation } from "react-router-dom";
import Carousel from "../Carousel";

const SimilarSection = ({ similarData }) => {
  const location = useLocation();
  const isMovie = location.pathname.includes("/browse-movie-tv/movie-details");

  if (!similarData || similarData.length === 0) {
    return null;
  }
  return (
    <section className="font-serif text-white ">
      <h1 className="text-3xl md:text-4xl xl:text-5xl mb-4 text-start font-[Poppins] italic">
        Similar Movies
      </h1>
      <Carousel>
        {similarData &&
          similarData?.map((similar) => (
            <div
              key={similar?.id}
              className="relative flex-shrink-0 mr-4 group">
              <Link
                to={
                  isMovie
                    ? `/browse-movie-tv/movie-details/${similar.id}`
                    : `/browse-movie-tv/tvseries-details/${similar.id}`
                }>
                <img
                  src={`https://image.tmdb.org/t/p/original/${similar?.poster_path}`}
                  alt={similar?.original_title}
                  className="border-2 border-yellow-200 object-cover rounded-2xl w-[100px] h-[150px] sm:w-[120px] sm:h-[180px] md:w-[150px] md:h-[220px] lg:w-[180px] lg:h-[260px] xl:w-[200px] xl:h-[300px] scroll-smooth transition-all duration-700 ease-in-out"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png";
                  }}
                />
              </Link>
            </div>
          ))}
      </Carousel>
    </section>
  );
};
export default SimilarSection;
