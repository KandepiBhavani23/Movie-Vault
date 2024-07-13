import VideoSection from "./VideoSection";
import ImagesSection from "./ImagesSection";
import DetailsMovieSection from "./DetailsMovieSection";
import DetailsTvSection from "./DetailsTvSection";
import DetailsTvSeasonSection from "./DetailsTvSeasonSection";
import CastsSection from "./CastsSection";
import RecommendationSection from "./RecommendationSection";
import SimilarSection from "./SimilarSection";
import { useLocation } from "react-router-dom";

const DetailedSectionList = ({ detailData }) => {
  const location = useLocation();
  const isMovie = location.pathname.includes("/browse-movie-tv/movie-details");
  const isTvSeries = location.pathname.includes(
    "/browse-movie-tv/tvseries-details"
  );
  if (!detailData) {
    return null;
  }
  const {
    videosData,
    castsData,
    detailsData,
    imagesData,
    recommendationsData,
    similarData,
  } = detailData;

  return (
    <section className="flex flex-col justify-center p-10 mx-auto my-10 space-y-5 text-center md:space-y-7 lg:space-y-10 xl:space-y-12">
      <VideoSection videosData={videosData} />
      <ImagesSection imagesData={imagesData} />
      {isMovie ? (
        <DetailsMovieSection detailsMovieData={detailsData} />
      ) : isTvSeries ? (
        <DetailsTvSection detailsTvData={detailsData} />
      ) : (
        <DetailsTvSeasonSection detailsTvSeasonsData={detailsData} />
      )}
      <CastsSection castsData={castsData} />
      <RecommendationSection recommendationsData={recommendationsData} />
      <SimilarSection similarData={similarData} />
    </section>
  );
};
export default DetailedSectionList;
