import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  arrayHis: [],
  count: 0,
};

export const historySlide = createSlice({
  name: "history",
  initialState,
  reducers: {
    addtoHistory: (state, action) => {
      let newItem = action.payload;
      state.arrayHis.push(newItem);
    },
  },
});
export const { addtoHistory } = historySlide.actions;

export default historySlide.reducer;
