import { useEffect } from "react";
import { baseUrl } from "../utils/constants";
import { API_OPTIONS } from "../utils/constants";
import { addMovieTrailer } from "../redux/moviesSlice";
import { useDispatch, useSelector } from "react-redux";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const movieTrailer = useSelector((store) => store?.movies?.movieTrailer);

  useEffect(() => {
    !movieTrailer && getMovieTrailer();
  }, [dispatch]);

  const getMovieTrailer = async () => {
    try {
      const response = await fetch(
        `${baseUrl}/movie/${movieId}/videos?language=en-US`,
        API_OPTIONS
      );
      const jsonData = await response.json();
      const filterVideoType = jsonData?.results?.filter(
        (video) => video.type === "Trailer"
      );

      const trailer = filterVideoType?.length
        ? filterVideoType[0]
        : json?.results[0];

      dispatch(addMovieTrailer(trailer));
    } catch (error) {
      console.log(error);
    }
  };
};
export default useMovieTrailer;
