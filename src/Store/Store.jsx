import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../Reducer/rootReducer";

export const Store = configureStore({
  reducer: rootReducer,
});
