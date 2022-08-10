import { configureStore } from "@reduxjs/toolkit";
import active from "./Slice/activeIndexSlice";

export default configureStore({
  reducer: {
    active,
  },
});
