import { LOGIN_USER } from "./user.types";

export const login = (user, token) => {
  return {
    type: LOGIN_USER,
    payload: {
      token,
      user,
    },
  };
};
