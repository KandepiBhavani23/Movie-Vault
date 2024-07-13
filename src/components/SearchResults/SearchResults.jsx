import { MdOutlineManageSearch } from "react-icons/md";
import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useAutoSuggestions from "../../Hooks/useAutoSuggestions.jsx";
import useDebounce from "../../Hooks/useDebounce.jsx";
import useTabs from "../../Hooks/useTabs.jsx";

const SingleContent = lazy(() => import("./SingleContent.jsx"));

const SearchResults = () => {
  const [type, setType] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const { tabs, activeTab, setActiveTab, addTab, deleteTab, updateTab } =
    useTabs();
  const {
    searchText,
    setSearchText,
    content,
    loading,
    suggestions,
    fetchSearch,
    fetchSuggestions,
  } = useAutoSuggestions(type, activeTab, tabs);

  const debounceDelay = 300;
  const debounceSearch = useDebounce((queryText) => {
    fetchSuggestions(queryText);
  }, debounceDelay);

  useEffect(() => {
    debounceSearch(searchText);
  }, [searchText, debounceSearch]);

  const handleSearch = (queryText) => {
    updateTab(activeTab, queryText);
    fetchSearch(queryText);
  };

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + "...";
  };

  return (
    <section className="relative w-full mx-auto text-white max-w-7xl">
      {/* Tabs */}
      <div className="relative flex gap-10 pt-10 lg:pt-0 lg:mx-10">
        <div className="flex flex-wrap max-w-md font-serif text-base font-semibold tracking-wider sm:max-w-lg xl:max-w-5xl md:max-w-2xl lg:max-w-4xl">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`inline-flex relative items-center px-3 py-2 m-2  mx-4 border-2 rounded-md ${
                activeTab === index ? "bg-emerald-700" : ""
              }`}>
              <div className="relative group">
                <button
                  className="truncate"
                  onClick={() => {
                    setActiveTab(index);
                    setSearchText(tabs[index].searchText);
                  }}>
                  {truncateText(tab.name, 12)}
                </button>
                <span className="absolute z-10 px-2 text-sm text-black transition-opacity duration-300 transform -translate-x-1/2 bg-white rounded opacity-0 whitespace-nowrap min-w-max left-1/2 bottom-full group-hover:opacity-100 group-hover:-translate-y-2">
                  {tab.name}
                </span>
              </div>
              <button
                className="absolute top-0 right-0 px-2 py-1 text-xs transform translate-x-1/2 -translate-y-1/2 bg-red-500 border-2 rounded-full"
                onClick={() => deleteTab(index)}>
                X
              </button>
            </div>
          ))}
        </div>
        <button
          className="absolute right-0 px-4 py-2 mx-3 text-lg bg-gray-900 border-2 rounded-md"
          onClick={addTab}>
          + Add Tab
        </button>
      </div>

      {/* Search Suggestions */}
      <div className="flex items-center justify-center w-3/5 mx-auto mt-5 border rounded-bl-none rounded-2xl">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search for Movies and Tv Series 🎥🍿🎞️📽️"
            className="w-full px-3 py-4 font-semibold rounded-bl-none outline-none rounded-l-2xl bg-gray-600/60 border-b-yellow-400 placeholder:text-xl placeholder:tracking-wider"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              debounceSearch(e.target.value);
            }}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          {showSuggestions && suggestions.length > 0 && (
            <ul className="absolute z-10 w-full text-black bg-white border-b-yellow-400 rounded-b-md">
              {suggestions?.slice(0, 10)?.map((suggestion) => (
                <li
                  key={suggestion.id}
                  className="px-3 py-2 cursor-pointer hover:bg-gray-200"
                  onMouseDown={() => handleSearch(suggestion.name)}>
                  🔎 {suggestion.name}
                </li>
              ))}
            </ul>
          )}
        </div>
        <button
          className="px-3 py-1 mx-3 text-5xl rounded-md"
          onClick={() => handleSearch(searchText)}>
          <MdOutlineManageSearch />
        </button>
      </div>

      {/* Movies and Tv Series Buttons */}
      <div className="flex justify-center gap-10 pt-10 font-serif text-lg font-semibold tracking-wider">
        <button
          className={`uppercase border-b-4 ${
            type === 0 ? "border-yellow-500 border-b-4" : ""
          }`}
          onClick={() => setType(0)}>
          Search Movies
        </button>
        <button
          className={`uppercase ${
            type === 1 ? "border-b-4 border-yellow-500" : ""
          }`}
          onClick={() => setType(1)}>
          Search Tv Series
        </button>
      </div>

      {/* Movie Cards */}
      <div className="grid grid-cols-1 gap-2 mx-10 my-8 md:gap-3 lg:gap-4 xl:gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {content.length > 0 &&
          content.map((content) => (
            <div key={content.id}>
              <Link
                to={
                  type === 0
                    ? `/browse-movie-tv/movie-details/${content?.id}`
                    : `/browse-movie-tv/tvseries-details/${content?.id}`
                }>
                <Suspense fallback={<div>Loading...</div>}>
                  <SingleContent
                    title={content?.title || content?.name}
                    date={content?.first_air_date || content?.release_date}
                    posterPath={content?.poster_path}
                    key={content?.id}
                    media_type={type === 1 ? "tv" : "movie"}
                  />
                </Suspense>
              </Link>
            </div>
          ))}
        {loading && (
          <h2 className="absolute transform -translate-x-1/2 translate-y-1/2 -bottom-3/4 left-1/2">
            Loading...
          </h2>
        )}
      </div>
    </section>
  );
};

export default SearchResults;
