import { createSlice } from "@reduxjs/toolkit";
import data from "../../data";

const initialState = {
  feedbacks: [...data.productRequests],
};

const feedbackSlice = createSlice({
  name: "feedback",
  initialState,
  reducers: {
    loadFeedback(state, action) {
      state.feedbacks = action.payload.feedbacks;
    },
  },
});

export const { loadFeedback } = feedbackSlice.actions;
export default feedbackSlice.reducer;
