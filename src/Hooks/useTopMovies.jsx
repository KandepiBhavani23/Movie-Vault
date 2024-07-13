import { movieEndPoints } from "../config/moviedbEndpoints";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopMovies } from "../redux/moviesSlice";
const useTopMovies = () => {
  const dispatch = useDispatch();
  const { nowPlaying, popular, topRated, trending, upcoming } = movieEndPoints;

  useEffect(() => {
    getTopMovies();
  }, [dispatch]);

  const getTopMovies = async () => {
    const [
      nowplayingResponse,
      popularResponse,
      topratedResponse,
      trendingResponse,
      upcomingResponse,
    ] = await Promise.all([
      fetch(nowPlaying, API_OPTIONS),
      fetch(popular, API_OPTIONS),
      fetch(topRated, API_OPTIONS),
      fetch(trending, API_OPTIONS),
      fetch(upcoming, API_OPTIONS),
    ]);

    const [
      nowPlayingJson,
      popularJson,
      topRatedJson,
      trendingJson,
      upcomingJson,
    ] = await Promise.all([
      nowplayingResponse.json(),
      popularResponse.json(),
      topratedResponse.json(),
      trendingResponse.json(),
      upcomingResponse.json(),
    ]);

    dispatch(
      addTopMovies({
        nowPlaying: nowPlayingJson.results,
        popular: popularJson.results,
        topRated: topRatedJson.results,
        trending: trendingJson.results,
        upcoming: upcomingJson.results,
      })
    );
  };
};
export default useTopMovies;
