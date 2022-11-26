import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getAlbum,
  getDetailSongById,
  getSongInfo,
} from "../../services/apiService";

const initialState = {
  abum: [],
  curSongId: null,
  isPlaying: false,
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
export const fetchAlbum = createAsyncThunk(
  "song/fetchAlbum",
  async (albumid) => {
    const response = await getAlbum(albumid);
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
    setIsPlaying: (state, action) => {
      state.isPlaying = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchDetailSongById.fulfilled, (state, action) => {
      state.detailSong = action.payload;
    });
    builder.addCase(fetchInfoSongById.fulfilled, (state, action) => {
      state.detailInfoSong = action.payload.data;
    });
    builder.addCase(fetchAlbum.fulfilled, (state, action) => {
      state.abum = action.payload.data;
    });
  },
});

// Action creators are generated for each case reducer function
export const { setCurSongId, setIsPlaying } = MusicReducer.actions;

export default MusicReducer.reducer;
