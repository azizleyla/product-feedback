import { LOGIN_USER } from "./user.types";

const initialState = { user: {}, token: "" };

export const userReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case LOGIN_USER:
      return {
        user: action.payload.user,
        token: action.payload.token,
      };
    default:
      return state;
  }
};
