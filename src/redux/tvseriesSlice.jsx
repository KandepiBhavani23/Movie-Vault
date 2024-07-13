import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tvgenres: null,
  detailTvSeries: null,
  topTvSeries: null,
};

const tvseriesSlice = createSlice({
  name: "tvseries",
  initialState,
  reducers: {
    addTvGenre: (state, action) => {
      state.tvgenres = action.payload;
    },

    addDetailedTvSeries: (state, action) => {
      state.detailTvSeries = action.payload;
    },

    addTopTvSeries: (state, action) => {
      state.topTvSeries = action.payload;
    },
  },
});

export const { addTvGenre, addDetailedTvSeries, addTopTvSeries } =
  tvseriesSlice.actions;

export default tvseriesSlice.reducer;
