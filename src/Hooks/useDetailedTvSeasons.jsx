import { useParams } from "react-router-dom";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { baseUrl } from "../utils/constants";
import { addDetailSeasons } from "../redux/tvSeasonsSlice";

const useDetailedTvSeasons = () => {
  const dispatch = useDispatch();
  const { tvSeriesId, seasonId } = useParams();

  const TvSeasonsDetailedList = {
    details: `${baseUrl}/tv/${tvSeriesId}/season/${seasonId}`,
    credits: `${baseUrl}/tv/${tvSeriesId}/season/${seasonId}/credits`,
    images: `${baseUrl}/tv/${tvSeriesId}/season/${seasonId}/images`,
  };

  const { details, credits, images } = TvSeasonsDetailedList;
  useEffect(() => {
    getDetailTvSeasons();
  }, [tvSeriesId, seasonId, dispatch]);

  const getDetailTvSeasons = async () => {
    try {
      const [detailsResponse, creditsResponse, imagesResponse] =
        await Promise.all([
          fetch(details, API_OPTIONS),
          fetch(credits, API_OPTIONS),
          fetch(images, API_OPTIONS),
        ]);

      const [detailsJson, creditsJson, imagesJson] = await Promise.all([
        detailsResponse.json(),
        creditsResponse.json(),
        imagesResponse.json(),
      ]);

      dispatch(
        addDetailSeasons({
          detailsData: detailsJson,
          castsData: creditsJson.cast,
          imagesData: imagesJson.posters,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};
export default useDetailedTvSeasons;
