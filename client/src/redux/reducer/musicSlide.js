import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getDetailSongById, getSongInfo } from "../../services/apiService";

const initialState = {
  curSongId: null,
  detailSong: {},
  detailInfoSong: {},
};
export const fetchDetailSongById = createAsyncThunk(
  "song/fetchDetailSongById",
  async (songId) => {
    const response = await getDetailSongById(songId);
    return response;
  }
);
export const fetchInfoSongById = createAsyncThunk(
  "song/fetchInfoSongById",
  async (songId) => {
    const response = await getSongInfo(songId);
    return response;
  }
);
const MusicReducer = createSlice({
  name: "song",
  initialState,
  reducers: {
    setCurSongId: (state, action) => {
      state.curSongId = action.payload.encodeId;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchDetailSongById.fulfilled, (state, action) => {
      // console.log(">>>>>action:", action);
      state.detailSong = action.payload;
    });
    builder.addCase(fetchInfoSongById.fulfilled, (state, action) => {
      // console.log(">>>>>action:", action);
      state.detailInfoSong = action.payload.data;
    });
  },
});

// Action creators are generated for each case reducer function
export const { setCurSongId } = MusicReducer.actions;

export default MusicReducer.reducer;
