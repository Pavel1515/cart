import { createSlice,PayloadAction } from "@reduxjs/toolkit";

export type CartSlise = {
  imageBig: number;
  active: number;
  count: number;
};

const initialState: CartSlise = {
  imageBig: 0,
  active: 0,
  count: 1,
};

export const activateIndexSlice = createSlice({
  name: "active",
  initialState,
  reducers: {
<<<<<<< HEAD
<<<<<<< HEAD
    setImageBig: (state, action:PayloadAction<number>) => {
=======
    setImageBig: (state, action:PayloadAction<string>) => {
>>>>>>> fbec309 (проба Ts)
=======
    setImageBig: (state, action:PayloadAction<number>) => {
>>>>>>> f9cf2db (исправил ошибку в TS)
      state.imageBig = action.payload;
    },
    setActive: (state, action:PayloadAction<number>) => {
      state.active = action.payload;
    },
    setCaount: (state, action:PayloadAction<number>) => {
      state.count = action.payload;
    },
  },
});

export const { setImageBig, setActive, setCaount } = activateIndexSlice.actions;

export default activateIndexSlice.reducer;
