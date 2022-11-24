import axios from "./customAxios";

const getHome = () => {
  return axios.get("/home");
};
const getDetailSongById = (idSong) => {
  return axios.get(`/song?id=${idSong}`);
};
const getSongInfo = (idSong) => {
  return axios.get(`/infosong?id=${idSong}`);
};
export { getHome, getDetailSongById, getSongInfo };
