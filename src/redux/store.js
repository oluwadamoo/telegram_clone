import { configureStore } from "@reduxjs/toolkit";
import colorReducer from "./colorReducer";

export default configureStore({
  reducer: {
    theme: colorReducer,
  },
});
