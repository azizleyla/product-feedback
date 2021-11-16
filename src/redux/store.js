import { createStore } from "redux";
import { userReducer } from "./reducers/user.reducers";

export const store = createStore(userReducer);
