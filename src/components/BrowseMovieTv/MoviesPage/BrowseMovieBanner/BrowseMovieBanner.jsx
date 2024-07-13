import { useSelector } from "react-redux";
import useBannerMovies from "../../../../Hooks/useBannerMovies";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const BrowseMovieBanner = () => {
  useBannerMovies();

  const bannerMovies = useSelector((store) => store.movies.bannerMovies);

  if (!bannerMovies) {
    return null;
  }

  const getRandomMovies = (array) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  };

  const randomMovies = getRandomMovies(bannerMovies);
  const { id, original_title, overview, release_date } = randomMovies;

  return (
    <section>
      <div className="pt-[10%] md:pt-[7%] lg:pt-[5%] xl:pt-[1%]">
        <VideoTitle
          originalTitle={original_title}
          overview={overview}
          releaseDate={release_date}
        />
        <VideoBackground movieId={id} />
      </div>
    </section>
  );
};
export default BrowseMovieBanner;
