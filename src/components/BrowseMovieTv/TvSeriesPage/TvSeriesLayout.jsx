import BrowseMovieBanner from "../MoviesPage/BrowseMovieBanner/BrowseMovieBanner";
import TvGenre from "./tv-genre/TvGenre";
const TvSeriesLayout = () => {
  return (
    <div className="text-white">
      <BrowseMovieBanner />
      <div className="px-5">
        <TvGenre />
      </div>
    </div>
  );
};
export default TvSeriesLayout;
