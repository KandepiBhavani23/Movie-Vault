import BrowseMovieBanner from "../MoviesPage/BrowseMovieBanner/BrowseMovieBanner";
import TopMoviesContainer from "./TopMediaContainer/TopMoviesContainer";
import TopTvSeriesContainer from "./TopMediaContainer/TopTvSeriesContainer";

const BrowseHomePage = () => {
  return (
    <div className="space-y-5">
      <BrowseMovieBanner />
      <div className="px-5">
        <TopMoviesContainer heading="Top Movies" />
        <TopTvSeriesContainer heading="Top TvSeries" />
      </div>
    </div>
  );
};
export default BrowseHomePage;

/*
  - Browse Banner Movie
      - Video Background
      - Video Title
  - Now Paying
  - Popular
  - Top Rated 
  - Trending
  - Upcoming

*/
