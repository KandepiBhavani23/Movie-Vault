import { baseUrl } from "../utils/constants";

export const tvEndPoints = {
  popular: `${baseUrl}/tv/popular?language=en-US&page=17`,
  toprated: `${baseUrl}/tv/top_rated?language=en-US&page=13`,
  trending: `${baseUrl}/trending/tv/day?language=en-US&page=10`,
  onTheAir: `${baseUrl}/tv/on_the_air?language=en-US&page=10`,
  airingToday: `${baseUrl}/tv/airing_today?language=en-US&page=10`,

  fetchTvGenresUrl: (genreId) =>
    `${baseUrl}/discover/tv?with_genres=${genreId}&page=8&include_adult=false&api_key=df81af888ee7a1fb0ddac16275c902e9`,
};
