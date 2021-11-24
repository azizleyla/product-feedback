import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  feedbacks: [],
};

const feedbackSlice = createSlice({
  name: "feedback",
  initialState,
  reducers: {
    loadFeedbacks(state, action) {
      state.feedbacks = action.payload.feedbacks;
    },
  },
});

export const { loadFeedbacks } = feedbackSlice.actions;
export default feedbackSlice.reducer;
