import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";

const useAutoSuggestions = (type, activeTab, tabs) => {
  const [searchText, setSearchText] = useState("");
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState(false);

  useEffect(() => {
    setContent([]);
    if (tabs[activeTab]?.searchText) {
      fetchSearch(tabs[activeTab].searchText);
    }
  }, [type, activeTab]);

  const fetchSearch = async (queryText) => {
    try {
      setLoading(true);
      if (!queryText) return;
      const query = encodeURIComponent(queryText);
      const response = await fetch(
        `https://api.themoviedb.org/3/search/${
          type ? "tv" : "movie"
        }?language=en-US&query=${query}&include_adult=false`,
        API_OPTIONS
      );

      const jsonData = await response.json();
      setContent(jsonData?.results);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchSuggestions = async (queryText) => {
    try {
      const query = encodeURIComponent(queryText);

      const [movieResponse, tvResponse] = await Promise.all([
        fetch(
          `https://api.themoviedb.org/3/search/movie?query=${query}&language=en-US&include_adult=false`,
          API_OPTIONS
        ),
        fetch(
          `https://api.themoviedb.org/3/search/tv?query=${query}&language=en-US&include_adult=false`,
          API_OPTIONS
        ),
      ]);

      const movieData = await movieResponse.json();
      const tvData = await tvResponse.json();

      const allSuggestions = [
        ...(movieData?.results || []).map((result) => ({
          id: result.id,
          name: result.title,
          type: "movie",
        })),
        ...(tvData?.results || []).map((result) => ({
          id: result.id,
          name: result.name,
          type: "tv",
        })),
      ];

      setSuggestions(allSuggestions);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    searchText,
    setSearchText,
    content,
    loading,
    suggestions,
    fetchSearch,
    fetchSuggestions,
  };
};
export default useAutoSuggestions;
