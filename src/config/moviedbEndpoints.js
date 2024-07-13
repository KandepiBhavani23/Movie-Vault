import { baseUrl } from "../utils/constants";

export const movieEndPoints = {
  nowPlaying: `${baseUrl}/movie/now_playing?anguage=en-US&include_adult=false&page=17`,
  popular: `${baseUrl}/movie/popular?anguage=en-US&include_adult=false&page=17`,
  topRated: `${baseUrl}/movie/top_rated?anguage=en-US&include_adult=false&page=17`,
  upcoming: `${baseUrl}/movie/upcoming?anguage=en-US&include_adult=false&page=17`,
  trending: `${baseUrl}/trending/movie/week?language=en-US&include_adult=false&page=17`,
  fetchMovieGenresUrl: (genreId) =>
    `${baseUrl}/discover/movie?with_genres=${genreId}&page=8&include_adult=false&api_key=df81af888ee7a1fb0ddac16275c902e9`,
};
