import DetailedSectionList from "../../DetailedSectionInfo/DetailedSectionList";
import useDetailedMovies from "../../../../Hooks/useDetailedMovies";
import { useSelector } from "react-redux";

const DetailedMovie = () => {
  useDetailedMovies();

  const detailMovieData = useSelector((store) => store?.movies?.detailedMovies);
  return (
    <div className="mx-auto xl:max-w-7xl">
      <DetailedSectionList detailData={detailMovieData} />
    </div>
  );
};
export default DetailedMovie;
