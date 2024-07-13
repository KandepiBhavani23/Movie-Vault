import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { baseUrl } from "../utils/constants";
import { addBannerMovies } from "../redux/moviesSlice";
import { useDispatch } from "react-redux";

const useBannerMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getBannerMoviePoster = async () => {
      try {
        const response = await fetch(
          `${baseUrl}/movie/now_playing?language=en-US&page=10`,
          API_OPTIONS
        );

        const jsonData = await response.json();
        dispatch(addBannerMovies(jsonData?.results));
      } catch (error) {
        console.log(error);
      }
    };
    getBannerMoviePoster();
  }, [dispatch]);
};
export default useBannerMovies;
