import { useSelector } from "react-redux";
import TopMediaList from "./TopMediaList";
import useTopMovies from "../../../../Hooks/useTopMovies";

const TopMoviesContainer = ({ heading }) => {
  useTopMovies();
  const movies = useSelector((store) => store?.movies?.topMovies);

  return (
    <section>
      <h2
        style={{
          background:
            "linear-gradient(45deg, #09F5E8, #00D6F8, #18B3F3, #6D8DD5, #8C67A5,#8C476E)",
        }}
        className="py-2 md:py-3 md:text-2xl lg:text-3xl xl:text-4xl text-xl font-bold text-center text-[#FFE4FB]">
        {heading}
      </h2>
      {movies && (
        <>
          <TopMediaList
            title={"Trending"}
            mediaItems={movies?.trending}
            mediaType="movie"
          />
          <TopMediaList
            title={"Now Playing"}
            mediaItems={movies?.nowPlaying}
            mediaType="movie"
          />
          <TopMediaList
            title={"Popular"}
            mediaItems={movies?.popular}
            mediaType="movie"
          />
          <TopMediaList
            title={"Top Rated"}
            mediaItems={movies?.topRated}
            mediaType="movie"
          />
          <TopMediaList
            title={"UpComing"}
            mediaItems={movies?.upcoming}
            mediaType="movie"
          />
        </>
      )}
    </section>
  );
};
export default TopMoviesContainer;
