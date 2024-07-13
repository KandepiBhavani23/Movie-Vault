import useDetailedTvSeasons from "../../../../Hooks/useDetailedTvSeasons";
import DetailedSectionList from "../../DetailedSectionInfo/DetailedSectionList";
import { useSelector } from "react-redux";

const DetailedTvSeasons = () => {
  useDetailedTvSeasons();

  const detailTvSeasons = useSelector(
    (store) => store?.tvSeasons?.detailSeasons
  );

  return (
    <div className="mx-auto xl:max-w-7xl">
      <DetailedSectionList detailData={detailTvSeasons} />
    </div>
  );
};
export default DetailedTvSeasons;
