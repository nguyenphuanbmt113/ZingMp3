import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getHome } from "../../services/apiService";

const initialState = {
  loader: false,
  dataBanner: [],
  dataPlaylist: [],
  newEveryDay: [],
  top100: [],
  xone: [],
  livestream: [],
  resentMusic: [],
  newRelease: [],
  weekChart: [],
  artists: [],
  charts: [],
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
export const fetchNewRelease = createAsyncThunk(
  "home/fetchNewRelease",
  async () => {
    const response = await getHome();
    if (response.err === 0) {
      const bannrItem = response?.data?.items.find(
        (item) => item.sectionType === "new-release"
      );
      return bannrItem;
    }
  }
);
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
export const fetchLiveStream = createAsyncThunk(
  "home/fetchLiveStream",
  async () => {
    const response = await getHome();
    if (response.err === 0) {
      const arr = response?.data?.items.find(
        (item) => item.sectionId === "hLiveRadio"
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
export const fetchRecent = createAsyncThunk("home/fetchRecent", async () => {
  const response = await getHome();
  if (response.err === 0) {
    const arr = response?.data?.items.find(
      (item) => item.sectionId === "hRecent"
    );
    return arr;
  }
});
export const fetchXone = createAsyncThunk("home/fetchXone", async (text) => {
  const response = await getHome();
  if (response.err === 0) {
    const arr = response?.data?.items.find((item) => item.sectionId === text);
    return arr;
  }
});
export const fetchWeekChart = createAsyncThunk(
  "home/fetchWeekChart",
  async () => {
    const response = await getHome();
    if (response.err === 0) {
      const arr = response?.data?.items.find(
        (item) => item.sectionType === "weekChart"
      );
      return arr;
    }
  }
);
export const fetchArtist = createAsyncThunk("home/fetchArtist", async () => {
  const response = await getHome();
  if (response.err === 0) {
    const arr = response?.data?.items.find((item) => item.sectionId === "hMix");
    return arr;
  }
});
export const fetchChartInfo = createAsyncThunk(
  "home/fetchChartInfo",
  async () => {
    const response = await getHome();
    if (response.err === 0) {
      const arr = response?.data?.items.find(
        (item) => item.sectionId === "hZC"
      );
      return arr;
    }
  }
);
const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    getBanner: (state) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBanner.fulfilled, (state, action) => {
        state.dataBanner = action.payload.items;
        state.loader = false;
      })
      .addCase(fetchBanner.pending, (state, action) => {
        state.loader = true;
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
    builder.addCase(fetchXone.fulfilled, (state, action) => {
      state.xone = action.payload;
    });
    builder.addCase(fetchLiveStream.fulfilled, (state, action) => {
      state.livestream = action.payload;
    });
    builder.addCase(fetchRecent.fulfilled, (state, action) => {
      state.resentMusic = action.payload;
    });
    builder.addCase(fetchNewRelease.fulfilled, (state, action) => {
      state.newRelease = action.payload;
    });
    builder.addCase(fetchWeekChart.fulfilled, (state, action) => {
      state.weekChart = action.payload;
    });
    builder.addCase(fetchArtist.fulfilled, (state, action) => {
      state.artists = action.payload;
    });
    builder.addCase(fetchChartInfo.fulfilled, (state, action) => {
      state.charts = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const { getBanner } = homeSlice.actions;

export default homeSlice.reducer;
