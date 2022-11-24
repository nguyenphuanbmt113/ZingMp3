import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getHome } from "../../services/apiService";

const initialState = {
  dataBanner: [],
};
export const fetchBanner = createAsyncThunk("home/fetchBanner", async () => {
  const response = await getHome();
  if (response.err === 0) {
    const bannrItem = response?.data?.items.find(
      (item) => item.sectionType === "banner"
    );
    return bannrItem;
  }
});
const bannerSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    getBanner: (state) => {},
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchBanner.fulfilled, (state, action) => {
      // console.log("action", action);
      state.dataBanner = action.payload.items;
      // Add user to the state array
      // state.entities.push(action.payload);
    });
  },
});

// Action creators are generated for each case reducer function
export const { getBanner } = bannerSlice.actions;

export default bannerSlice.reducer;
