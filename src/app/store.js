import { configureStore } from "@reduxjs/toolkit";
import shoppingReducer from "./Slice/shoppingSlice";

const store = configureStore({
  reducer: {
    shopping: shoppingReducer,
  },
});
export default store;
