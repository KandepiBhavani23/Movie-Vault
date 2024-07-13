import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addDetailedMovies } from "../redux/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { baseUrl } from "../utils/constants";

const useDetailedMovies = () => {
  const dispatch = useDispatch();
  const { movieId } = useParams();

  const movieDetailedList = {
    video: `${baseUrl}/movie/${movieId}/videos?include_adult=false`,
    details: `${baseUrl}/movie/${movieId}?language=en-US&include_adult=false`,
    credits: `${baseUrl}/movie/${movieId}/credits?language=en-US&include_adult=false`,
    images: `${baseUrl}/movie/${movieId}/images?include_adult=false`,
    recommendations: `${baseUrl}/movie/${movieId}/recommendations?language=en-US&page=1&include_adult=false`,
    similar: `${baseUrl}/movie/${movieId}/similar?language=en-US&page=1&include_adult=false`,
  };

  const { video, details, credits, images, recommendations, similar } =
    movieDetailedList;

  useEffect(() => {
    getDetailMovieData();
  }, [movieId]);

  const getDetailMovieData = async () => {
    try {
      const [
        videosResponse,
        detailsResponse,
        creditsResponse,
        imagesResponse,
        recommendationResponse,
        similarResponse,
      ] = await Promise.all([
        fetch(video, API_OPTIONS),
        fetch(details, API_OPTIONS),
        fetch(credits, API_OPTIONS),
        fetch(images, API_OPTIONS),
        fetch(recommendations, API_OPTIONS),
        fetch(similar, API_OPTIONS),
      ]);

      const [
        videoJson,
        detailsJson,
        creditsJson,
        imagesJson,
        recommendationJson,
        similarJson,
      ] = await Promise.all([
        videosResponse.json(),
        detailsResponse.json(),
        creditsResponse.json(),
        imagesResponse.json(),
        recommendationResponse.json(),
        similarResponse.json(),
      ]);

      dispatch(
        addDetailedMovies({
          videosData: videoJson.results,
          detailsData: detailsJson,
          castsData: creditsJson.cast,
          imagesData: imagesJson.backdrops,
          recommendationsData: recommendationJson.results,
          similarData: similarJson.results,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};
export default useDetailedMovies;
