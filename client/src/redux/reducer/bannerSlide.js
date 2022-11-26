import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getHome } from "../../services/apiService";

const initialState = {
  dataBanner: [],
  dataPlaylist: [],
  newEveryDay: [],
  top100: [],
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
export const fetchPlayList = createAsyncThunk(
  "home/fetchPlayList",
  async () => {
    const response = await getHome();
    if (response.err === 0) {
      const playlistItem = response?.data?.items.find(
        (item) => item.sectionId === "hAutoTheme1"
      );
      return playlistItem;
    }
  }
);
export const fetchNewEveryDay = createAsyncThunk(
  "home/fetchNewEveryDay",
  async () => {
    const response = await getHome();
    if (response.err === 0) {
      const arr = response?.data?.items.find(
        (item) => item.sectionId === "hAutoTheme2"
      );
      return arr;
    }
  }
);
export const fetcht100 = createAsyncThunk("home/fetcht100", async () => {
  const response = await getHome();
  if (response.err === 0) {
    const arr = response?.data?.items.find((item) => item.sectionId === "h100");
    return arr;
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
      state.dataBanner = action.payload.items;
    });
    builder.addCase(fetchPlayList.fulfilled, (state, action) => {
      state.dataPlaylist = action.payload;
    });
    builder.addCase(fetchNewEveryDay.fulfilled, (state, action) => {
      state.newEveryDay = action.payload;
    });
    builder.addCase(fetcht100.fulfilled, (state, action) => {
      state.top100 = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const { getBanner } = bannerSlice.actions;

export default bannerSlice.reducer;
