import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  count: 0,
  todos: [],
};
const HistorySlide = createSlice({
  name: "history",
  initialState,
  reducers: {
    setHistory: (state, action) => {},
  },
});

// Action creators are generated for each case reducer function
export const { setHistory } = HistorySlide.actions;

export default HistorySlide.reducer;
