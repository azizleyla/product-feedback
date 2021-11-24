import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  feedbacks: [],
};

const feedbackSlice = createSlice({
  name: "feedback",
  initialState,
  reducers: {
    loadFeedbacks(state, action) {
      console.log(action);
      state.feedbacks = action.payload.feedbacks;
    },
  },
});

export const { loadFeedbacks } = feedbackSlice.actions;

export const loadFeedbacksStart = () => {
  return async function (dispatch) {
    const response = await axios.get(
      "https://product-feedback-app-api.herokuapp.com/api/v1/requests",
    );
    const feedbacks = response.data.requests;
    dispatch(loadFeedbacks({ feedbacks: feedbacks }));
  };
};

export default feedbackSlice.reducer;
