import { configureStore } from "@reduxjs/toolkit";
import toDoReducer from "./Features/Task";
export const store = configureStore({
  reducer: {
    task: toDoReducer,
  },
});
