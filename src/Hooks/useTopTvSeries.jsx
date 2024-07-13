import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { tvEndPoints } from "../config/tvdbEndpoints";
import { useDispatch } from "react-redux";
import { addTopTvSeries } from "../redux/tvseriesSlice";

const useTopTvSeries = () => {
  const dispatch = useDispatch();
  const { popular, toprated, trending, onTheAir, airingToday } = tvEndPoints;

  useEffect(() => {
    getTopTvSeries();
  }, [dispatch]);

  const getTopTvSeries = async () => {
    const [
      popularResponse,
      topratedResponse,
      trendingResponse,
      onTheAirResponse,
      airingTodayResponse,
    ] = await Promise.all([
      fetch(popular, API_OPTIONS),
      fetch(toprated, API_OPTIONS),
      fetch(trending, API_OPTIONS),
      fetch(onTheAir, API_OPTIONS),
      fetch(airingToday, API_OPTIONS),
    ]);

    const [
      popularJson,
      topratedJson,
      trendingJson,
      onTheAirJson,
      airingTodayJson,
    ] = await Promise.all([
      popularResponse.json(),
      topratedResponse.json(),
      trendingResponse.json(),
      onTheAirResponse.json(),
      airingTodayResponse.json(),
    ]);

    dispatch(
      addTopTvSeries({
        popular: popularJson.results,
        toprated: topratedJson.results,
        trending: trendingJson.results,
        onTheAir: onTheAirJson.results,
        airingToday: airingTodayJson.results,
      })
    );
  };
};
export default useTopTvSeries;
