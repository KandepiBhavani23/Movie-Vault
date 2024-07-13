import { Link, useLocation } from "react-router-dom";
import Carousel from "../Carousel";

const RecommendationSection = ({ recommendationsData }) => {
  const location = useLocation();
  const isMovie = location.pathname.includes("/browse-movie-tv/movie-details");

  if (!recommendationsData || recommendationsData.length === 0) {
    return null;
  }

  return (
    <section className="w-full text-white">
      <h1 className="text-3xl md:text-4xl xl:text-5xl text-start mb-5 font-[Poppins] italic">
        Recommendations
      </h1>
      <Carousel>
        {recommendationsData.map((recommend) => (
          <div
            key={recommend?.id}
            className="relative flex-shrink-0 mr-4 group">
            <Link
              to={
                isMovie
                  ? `/browse-movie-tv/movie-details/${recommend.id}`
                  : `/browse-movie-tv/tvseries-details/${recommend.id}`
              }>
              <img
                src={`https://image.tmdb.org/t/p/original/${recommend?.poster_path}`}
                alt={recommend?.original_title}
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

export default RecommendationSection;
