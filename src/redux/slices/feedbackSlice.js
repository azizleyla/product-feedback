import { createSlice } from "@reduxjs/toolkit";
import data from "../../data";

const initialState = {
  feedbacks: [...data.productRequests],
};

const feedbackSlice = createSlice({
  name: "feedback",
  initialState,
  reducers: {},
});

// export const {} = feedbackSlice.actions;
export default feedbackSlice.reducer;
