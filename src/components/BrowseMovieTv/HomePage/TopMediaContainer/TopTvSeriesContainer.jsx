import useTopTvSeries from "../../../../Hooks/useTopTvSeries";
import { useSelector } from "react-redux";
import TopMediaList from "./TopMediaList";

const TopTvSeriesContainer = ({ heading }) => {
  useTopTvSeries();

  const tvSeries = useSelector((store) => store?.tvseries?.topTvSeries);

  return (
    <section>
      <h2
        style={{
          background:
            "linear-gradient(45deg, #09F5E8, #00D6F8, #18B3F3, #6D8DD5, #8C67A5,#8C476E)",
        }}
        className="py-2 md:py-3 md:text-2xl lg:text-3xl xl:text-4xl text-xl font-bold text-center text-[#FFE4FB]">
        {heading}
      </h2>
      {tvSeries && (
        <>
          <TopMediaList
            title={"On The Air"}
            mediaItems={tvSeries?.onTheAir}
            mediaType="tv"
          />
          <TopMediaList
            title={"Airing Today"}
            mediaItems={tvSeries?.airingToday}
            mediaType="tv"
          />
          <TopMediaList
            title={"Popular"}
            mediaItems={tvSeries?.popular}
            mediaType="tv"
          />
          <TopMediaList
            title={"Top Rated"}
            mediaItems={tvSeries?.toprated}
            mediaType="tv"
          />
          <TopMediaList
            title={"Trending"}
            mediaItems={tvSeries?.trending}
            mediaType="tv"
          />
        </>
      )}
    </section>
  );
};
export default TopTvSeriesContainer;
