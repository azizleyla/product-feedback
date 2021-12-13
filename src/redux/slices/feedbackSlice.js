import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  feedbacks: [],
  singleFeedback: {},
};

const feedbackSlice = createSlice({
  name: "feedback",
  initialState,
  reducers: {
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

export const { filterFeedbacks } = feedbackSlice.actions;

export default feedbackSlice.reducer;
