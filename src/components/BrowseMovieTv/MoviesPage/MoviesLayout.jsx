import BrowseMovieBanner from "./BrowseMovieBanner/BrowseMovieBanner";
import MovieGenre from "./movies-genre/MovieGenre";
const MoviesLayout = () => {
  return (
    <div className="text-white">
      <BrowseMovieBanner />
      <div className="px-5">
        <MovieGenre />
      </div>
    </div>
  );
};

export default MoviesLayout;
