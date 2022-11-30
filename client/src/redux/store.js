import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import counterReducer from "../redux/reducer/countSlice";
import homeSlice from "../redux/reducer/homeSlide";
import MusicReducer from "../redux/reducer/musicSlide";
import loadingSlice from "../redux/reducer/loadingSlice";
import HistorySlide from "../redux/reducer/historySlide";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";
const reducers = combineReducers({
  counter: counterReducer,
  home: homeSlice,
  song: MusicReducer,
  loading: loadingSlice,
  history: HistorySlide,
});
const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, reducers);
const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});
export default store;
