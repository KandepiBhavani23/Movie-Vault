import { useSelector } from "react-redux";
import useDetailedTvSeries from "../../../../Hooks/useDetailedTvSeries";
import DetailedSectionList from "../../DetailedSectionInfo/DetailedSectionList";

const DetailedTvSeries = () => {
  useDetailedTvSeries();

  const detailTvSeries = useSelector(
    (store) => store?.tvseries?.detailTvSeries
  );
  return (
    <div className="mx-auto xl:max-w-7xl">
      <DetailedSectionList detailData={detailTvSeries} />
    </div>
  );
};
export default DetailedTvSeries;
