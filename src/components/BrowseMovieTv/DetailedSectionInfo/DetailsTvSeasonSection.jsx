import { useState } from "react";
import { Link } from "react-router-dom";
import EpisodesModal from "../TvSeasons/detailed-tvseasons-page/EpisodesModal";

const DetailsTvSeasonSection = ({ detailsTvSeasonsData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEpisode, setSelectedEpisode] = useState(1);
  if (!detailsTvSeasonsData) {
    // Return null if detailsData is not available
    return null;
  }

  const { id, name, poster_path, episodes, overview, air_date } =
    detailsTvSeasonsData;

  if (!id && name && !poster_path && !overview && !air_date && !episodes) {
    // Return null if no relevant details are available
    return null;
  }

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEpisode(1);
  };

  return (
    <section className="font-serif text-white" key={id}>
      <h1 className="text-3xl md:text-4xl xl:text-5xl text-start mb-5 font-[Poppins] italic">
        TV Seasons Details
      </h1>
      <div className="flex flex-col sm:flex-col md:flex-row sm:flex-wrap md:flex-nowrap gap-y-5 sm:gap-x-0 md:gap-x-8 lg:gap-x-10">
        {poster_path && (
          <div className="h-auto mb-5 sm:w-full md:w-2/5 lg:mb-0">
            <img
              src={`https://image.tmdb.org/t/p/original/${poster_path}`}
              alt=""
              className="w-full h-[300px] sm:w-[350px] sm:h-[400px] md:w-[400px] md:h-[500px] object-cover border-2 border-[#C34A36] rounded-2xl"
            />
          </div>
        )}
        <div className="flex flex-col items-start justify-center w-full space-y-2 text-justify sm:w-full md:w-3/5 lg:w-4/5">
          {name && (
            <h1 className="text-xl lg:text-2xl xl:text-3xl font-bold font-[Poppins] italic text-[#0084FF]">
              <span className="text-[#C70039] ">Title:</span> {name || "N/A"}
            </h1>
          )}
          {overview && (
            <p className="text-sm md:text-base lg:text-lg text-[#00CCCD]">
              <span className="text-[#C70039] italic font-bold">
                Description:
              </span>{" "}
              {overview}
            </p>
          )}

          {air_date && (
            <p className="text-sm md:text-base lg:text-lg text-[#00CCCD]">
              <span className="text-[#C70039] italic font-bold">Air Date:</span>{" "}
              {air_date}
            </p>
          )}
          {episodes && episodes.length > 0 && (
            <div className="text-sm md:text-base lg:text-lg">
              <span className="text-[#C70039] italic font-bold hidden md:inline-block">
                Episodes:
              </span>
              <ul className="hidden w-full text-left mx-7 md:grid-cols-2 md:grid md:gap-x-4 lg:grid-cols-3 xl:grid-cols-4">
                {episodes?.slice(0, 15)?.map((episode) => (
                  <div key={episode.id} className="my-1 ">
                    <li className="text-[#53E0BC] list-disc pr-5">
                      {episode?.name}
                    </li>
                  </div>
                ))}
              </ul>
            </div>
          )}
          {episodes && episodes.length > 0 && (
            <Link className="w-full" onClick={openModal}>
              <button className="bg-red-500 w-1/2 !important py-3 text-sm md:text-base lg:text-lg font-semibold rounded-xl">
                Watch All Episodes
              </button>
            </Link>
          )}

          {/* Modal */}
          <EpisodesModal
            isModalOpen={isModalOpen}
            closeModal={closeModal}
            episodes={episodes}
          />
        </div>
      </div>
    </section>
  );
};
export default DetailsTvSeasonSection;
