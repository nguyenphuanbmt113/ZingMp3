import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  arrayHis: [],
};

export const historySlide = createSlice({
  name: "history",
  initialState,
  reducers: {
    addtoHistory: (state, action) => {
      let newItem = action.payload;
      state.arrayHis.push(newItem);
    },
    // removeTodo: (state, action) => {
    //   console.log("action", action);
    //   state.arrayHis = state.arrayHis.filter((ele) => {
    //     return ele.encodeId !== action.payload;
    //   });
    // },
  },
});
export const { addtoHistory, removeTodo } = historySlide.actions;

export default historySlide.reducer;
