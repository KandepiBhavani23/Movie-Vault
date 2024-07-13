import { LazyLoadImage } from "react-lazy-load-image-component";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="pr-4 w-[100px] sm:w-[120px] md:w-[150px] lg:w-[180px] xl:w-[200px] h-auto scroll-smooth transition-all duration-700 ease-in-out">
      <LazyLoadImage
        src={`https://image.tmdb.org/t/p/original/${posterPath}`}
        alt="Movie Card"
        className="my-6 transition-transform duration-500 rounded-md cursor-pointer hover:scale-110 hover:opacity-100"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src =
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png";
        }}
      />
    </div>
  );
};
export default MovieCard;
