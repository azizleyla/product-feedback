import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const URL =
  "https://product-feedback-app-api.herokuapp.com/api/v1/requests";

const initialState = {
  feedbacks: [],
  singleFeedback: {},
};

const feedbackSlice = createSlice({
  name: "feedback",
  initialState,
  reducers: {
    loadFeedbacks(state, action) {
      console.log(action);
      state.feedbacks = action.payload.feedbacks;
    },

    loadFeedback(state, action) {
      state.singleFeedback = action.payload.singleFeedback;
      console.log(action.payload.singleFeedback);
    },

    filterFeedbacks(state, action) {
      const newFeedback = state.feedbacks.filter(
        (item) => item.category === action.payload,
      );
      return {
        ...state,
        feedbacks: newFeedback,
      };
    },

    // addFeedback(state, action) {
    //   console.log(action.payload);
    //   state.feedbacks = [...state.feedbacks, action.payload];
    // },
  },
});

export const { loadFeedbacks, filterFeedbacks, loadFeedback } =
  feedbackSlice.actions;

export const loadFeedbacksStart = () => {
  return async function (dispatch) {
    const response = await axios.get(URL);
    const data = response.data.requests;
    dispatch(loadFeedbacks({ feedbacks: data }));
  };
};

export const loadFeedbackStart = (id) => {
  return async function (dispatch) {
    const response = await axios.get(
      `https://product-feedback-app-api.herokuapp.com/api/v1/requests/${id}`,
    );

    const data = response.data.data;

    dispatch(loadFeedback({ singleFeedback: data }));
  };
};
export default feedbackSlice.reducer;
