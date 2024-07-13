import { useEffect } from "react";
import { tvEndPoints } from "../config/tvdbEndpoints";
import { tvGenreTitle } from "../config/tvGenreTitle";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTvGenre } from "../redux/tvseriesSlice";

const useTvGenre = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchTvGenre();
  }, [dispatch]);

  const fetchTvGenre = async () => {
    try {
      const promiseGenre = tvGenreTitle?.map(async (genre) => {
        const response = await fetch(
          tvEndPoints.fetchTvGenresUrl(genre?.id),
          API_OPTIONS
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch ${genre?.name}`);
        }

        const jsonData = await response?.json();
        return {
          genreId: genre?.id,
          genreName: genre?.name,
          tvSeries: jsonData?.results,
        };
      });
      const allTvGenre = await Promise.all(promiseGenre);
      dispatch(addTvGenre(allTvGenre));
    } catch (error) {
      console.log(error);
    }
  };
};
export default useTvGenre;
