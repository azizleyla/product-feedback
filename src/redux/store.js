import { configureStore } from "@reduxjs/toolkit";
import { combineReducers, createStore } from "redux";
import authSlice from "./slices/authSlice";

const rootReducer = combineReducers({
  auth: authSlice.reducer,
});

// export const store = createStore(authSlice.reducer);

export const store = configureStore({ reducer: rootReducer });
