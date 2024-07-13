import React, { useState } from "react";
import TeamMembers from "./TeamMembers";

const EpisodesModal = ({ isModalOpen, closeModal, episodes }) => {
  const [selectedEpisode, setSelectedEpisode] = useState(1);

  const filteredEpisodes = episodes?.filter(
    (episode) => episode.episode_number === selectedEpisode
  );

  const episodeNumbers = Array.from(
    new Set(episodes.map((episode) => episode.episode_number))
  );

  return (
    <div className="relative inline-block">
      {isModalOpen && (
        <div className="box-border fixed inset-0 z-50 flex bg-black bg-opacity-70">
          <div className="p-5 bg-white text-black m-10 rounded-2xl shadow-md w-[90%] h-auto max-w-7xl mx-auto overflow-y-scroll">
            <div className="flex items-center justify-between">
              <h2 className="mb-5 text-lg font-bold">All Episodes</h2>
              <button
                onClick={closeModal}
                className="px-4 py-2 text-white bg-red-500 rounded-md">
                Close
              </button>
            </div>

            {/* Episode dropdown */}

            <select
              className="inline-flex p-1 mb-3 text-base font-semibold bg-pink-400 border border-gray-300 rounded-md"
              value={selectedEpisode}
              onChange={(e) => setSelectedEpisode(parseInt(e.target.value))}>
              {episodeNumbers.map((episodeNumber) => (
                <option key={episodeNumber} value={episodeNumber}>
                  Episode {episodeNumber}
                </option>
              ))}
            </select>

            {/* Filtered episodes list */}
            <div className="">
              {filteredEpisodes?.length > 0 ? (
                filteredEpisodes?.map((episode) => (
                  <div
                    key={episode.id}
                    className="space-y-2 md:space-y-3 lg:space-y-4">
                    {episode?.name && (
                      <h1 className="text-[#0715F7] list-disc pr-5 text-sm md:text-base lg:text-lg">
                        <span className="text-[#C70039] italic font-bold">
                          Name:
                        </span>{" "}
                        {episode.name}
                      </h1>
                    )}

                    {episode?.overview && (
                      <p className="text-sm md:text-base lg:text-lg text-[#00B9DF]">
                        <span className="text-[#C70039] italic font-bold">
                          Description:
                        </span>{" "}
                        {episode.overview}
                      </p>
                    )}

                    {episode?.still_path && (
                      <img
                        src={`https://image.tmdb.org/t/p/original/${episode?.still_path}`}
                        alt=""
                        className="w-full sm:w-2/3 md:w-1/2 h-[200px] md:h-[230px] lg:h-[260px] border-2 border-[#C34A36] rounded-2xl object-fill"
                      />
                    )}
                    {episode?.crew && (
                      <TeamMembers
                        members={episode?.crew}
                        title="Crew Members"
                      />
                    )}
                    {episode?.guest_stars && (
                      <TeamMembers
                        members={episode?.guest_stars}
                        title="Guest Star Members"
                      />
                    )}
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No matching episodes found.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EpisodesModal;
