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
    // addFeedback(state, action) {
    //   console.log(action.payload);
    //   state.feedbacks = [...state.feedbacks, action.payload];
    // },
  },
});

export const { loadFeedbacks } = feedbackSlice.actions;

export const loadFeedbacksStart = () => {
  return async function (dispatch) {
    const response = await axios.get(
      "https://product-feedback-app-api.herokuapp.com/api/v1/requests"
    );
    const data = response.data.requests;
    dispatch(loadFeedbacks({ feedbacks: data }));
  };
};

export default feedbackSlice.reducer;
