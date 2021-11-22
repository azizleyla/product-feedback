import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  token: "",
};

const authSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      localStorage.setItem(
        "user",
        JSON.stringify({
          ...action.payload,
        }),
      );
      const newUser = {
        user: action.payload.user,
        token: action.payload.token,
      };
      state.user = newUser;
      console.log(state.user);
    },
    logoutUser: (state, action) => {
      localStorage.removeItem("user");
      state.user = {};
    },
  },
});

export const { loginUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;
