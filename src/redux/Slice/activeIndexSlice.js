import { createSlice } from "@reduxjs/toolkit";

export const activateIndexSlice = createSlice({
  name: "active",
  initialState: {
    imageBig: 0,
    active: 0,
    count: 1,
  },
  reducers: {
    setImageBig: (state, action) => {
      state.imageBig = action.payload;
    },
    setActive: (state, action) => {
      state.active = action.payload;
    },
    setCaount: (state, action) => {
      state.count = action.payload;
    },
  },
});

export const { setImageBig, setActive, setCaount } = activateIndexSlice.actions;

export default activateIndexSlice.reducer;
