import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchList = createAsyncThunk(
  "lists/fetchList",

  async () => {
    const res = await axios.get(
      "https://630e5b3b37925634187c1f86.mockapi.io/nike"
    );
    return res.data;
  }
);

export type ListSlise = {
  list: [];
  status: string;
};
const initialState: ListSlise = {
  list: [],
  status: "",
};

export const listSlise = createSlice({
  name: "lists",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchList.pending, (state) => {
        state.status = "loding";
      })
      .addCase(fetchList.fulfilled, (state, action) => {
        state.status = "loaded";
        state.list = action.payload;
      })
      .addCase(fetchList.rejected, (state, action) => {
        state.list = [];
        state.status = "error";
      });
  },
});

export default listSlise.reducer;
