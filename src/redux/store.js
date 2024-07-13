import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./moviesSlice";
import tvseriesSlice from "./tvseriesSlice";
import tvSeasonsSlice from "./tvSeasonsSlice";
import searchSlice from "./searchSlice";

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    tvseries: tvseriesSlice,
    tvSeasons: tvSeasonsSlice,
    search: searchSlice,
  },
});

export default store;
