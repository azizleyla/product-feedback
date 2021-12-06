import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  feedbacks: [],
  feedback: [],
};

const feedbackSlice = createSlice({
  name: "feedback",
  initialState,
  reducers: {
    loadFeedbacks(state, action) {
      console.log(action);
      state.feedbacks = action.payload.feedbacks;
    },
    singleLoadFeedback(state, action) {
      state.feedback = action.payload.feedback;
    },
    // filteredCategory(state, action) {
    //   // state.feedbacks = action.payload.category;
    // },
    // addFeedback(state, action) {
    //   console.log(action.payload);
    //   state.feedbacks = [...state.feedbacks, action.payload];
    // },
  },
});

export const loadFeedbacksStart = () => {
  return async function (dispatch) {
    const response = await axios.get(
      "https://product-feedback-app-api.herokuapp.com/api/v1/requests"
    );
    const data = response.data.requests;
    dispatch(loadFeedbacks({ feedbacks: data }));
  };
};

export const singleLoadFeedbackStart = () => {
  return async function (dispatch) {
    const response = await axios.get(
      "https://product-feedback-app-api.herokuapp.com/api/v1/requests/61a71fff6ca61f0016271647"
    );

    // const singleData = response.singleData.requests;
    const singleCommentData = response.data.data;
    console.log(singleCommentData);

    dispatch(singleLoadFeedback({ feedback: singleCommentData }));
  };
};

export const { loadFeedbacks, singleLoadFeedback } = feedbackSlice.actions;
export default feedbackSlice.reducer;
