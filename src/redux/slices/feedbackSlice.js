import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  feedbacks: []
};

const feedbackSlice = createSlice({
  name: "feedback",
  initialState,
  reducers: {
    loadFeedback(state, action) {
      state.feedbacks = action.payload.feedbacks;
    },
    // addFeedback(state, action) {
    //   console.log(action.payload);
    //   state.feedbacks = [...state.feedbacks, action.payload];
    // },
  },
});

export const { loadFeedback, addFeedback } = feedbackSlice.actions;
export default feedbackSlice.reducer;
