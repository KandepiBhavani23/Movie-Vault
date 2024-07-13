import { useEffect } from "react";
import { addMovieGenre } from "../redux/moviesSlice";
import { movieEndPoints } from "../config/moviedbEndpoints";
import { movieGenreTitle } from "../config/movieGenreTitle";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";

const useGenreMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchMovieGenre();
  }, [dispatch]);

  const fetchMovieGenre = async () => {
    try {
      const promiseGenre = movieGenreTitle.map(async (genre) => {
        const response = await fetch(
          movieEndPoints.fetchMovieGenresUrl(genre.id)
        );
        const data = await response.json();

        return {
          genreId: genre.id,
          genreName: genre.name,
          movies: data.results,
        };
      });

      const allGenre = await Promise.all(promiseGenre);
      dispatch(addMovieGenre(allGenre));
    } catch (error) {
      console.log(error);
    }
  };
};
export default useGenreMovies;
