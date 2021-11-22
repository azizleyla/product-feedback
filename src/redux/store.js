import { configureStore } from "@reduxjs/toolkit";
import { combineReducers, createStore } from "redux";
import authSlice from "./slices/authSlice";
import feedbackSlice from "./slices/feedbackSlice";

const rootReducer = combineReducers({
  auth: authSlice,
  feedback2: feedbackSlice,
});

// export const store = createStore(authSlice.reducer);

export const store = configureStore({ reducer: rootReducer });
