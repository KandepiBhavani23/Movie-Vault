import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addDetailedTvSeries } from "../redux/tvseriesSlice";
import { API_OPTIONS } from "../utils/constants";
import { baseUrl } from "../utils/constants";

const useDetailedTvSeries = () => {
  const dispatch = useDispatch();
  const { tvSeriesId } = useParams();

  const TvDetailedList = {
    video: `${baseUrl}/tv/${tvSeriesId}/videos?`,
    details: `${baseUrl}/tv/${tvSeriesId}?language=en-US`,
    credits: `${baseUrl}/tv/${tvSeriesId}/credits?language=en-US`,
    images: `${baseUrl}/tv/${tvSeriesId}/images?`,
    recommendations: `${baseUrl}/tv/${tvSeriesId}/recommendations?language=en-US&page=1`,
    similar: `${baseUrl}/tv/${tvSeriesId}/similar?language=en-US&page=1`,
  };

  const { video, details, credits, images, recommendations, similar } =
    TvDetailedList;

  useEffect(() => {
    getDetailTvData();
  }, [tvSeriesId, dispatch]);

  const getDetailTvData = async () => {
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
        addDetailedTvSeries({
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
export default useDetailedTvSeries;
