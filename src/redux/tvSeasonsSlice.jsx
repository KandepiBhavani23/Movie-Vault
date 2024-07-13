import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  detailSeasons: null,
};

const tvSeasonsSlice = createSlice({
  name: "tvSeasons",
  initialState,
  reducers: {
    addDetailSeasons: (state, action) => {
      state.detailSeasons = action.payload;
    },
  },
});

export const { addDetailSeasons } = tvSeasonsSlice.actions;

export default tvSeasonsSlice.reducer;
