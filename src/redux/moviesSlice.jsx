import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movieGenre: null,
  detailedMovies: null,
  bannerMovies: null,
  movieTrailer: null,
  topMovies: null,
};

const genreSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovieGenre: (state, action) => {
      state.movieGenre = action.payload;
    },

    addDetailedMovies: (state, action) => {
      state.detailedMovies = action.payload;
    },

    addBannerMovies: (state, action) => {
      state.bannerMovies = action.payload;
    },

    addMovieTrailer: (state, action) => {
      state.movieTrailer = action.payload;
    },

    addTopMovies: (state, action) => {
      state.topMovies = action.payload;
    },
  },
});

export const {
  addMovieGenre,
  addDetailedMovies,
  addBannerMovies,
  addMovieTrailer,
  addTopMovies,
} = genreSlice.actions;

export default genreSlice.reducer;
