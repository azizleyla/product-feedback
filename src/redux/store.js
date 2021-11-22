import { createStore } from "redux";
import authSlice from "./slices/authSlice";


export const store = createStore(authSlice);
