import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDetailSongById,
  fetchInfoSongById,
  setIsPlaying,
} from "../../redux/reducer/musicSlide";
import icons from "../../ultis/icons";
const {
  AiOutlineHeart,
  BsVolumeUp,
  BsThreeDots,
  MdSkipNext,
  MdSkipPrevious,
  CiRepeat,
  BsPauseFill,
  CiShuffle,
  BiVolumeMute,
  ImPlay3,
} = icons;
export const Player = () => {
  const [audio, setAudio] = useState(new Audio());
  const play = async () => {
    await audio.play();
  };
  const handleTogglePlayMusic = () => {
    if (isPlaying) {
      audio.pause();
      dispatch(setIsPlaying(false));
    } else {
      play();
      dispatch(setIsPlaying(true));
    }
  };
  useEffect(() => {
    audio.load();
    if (isPlaying) {
      play();
    }
  }, [audio]);
  const {
    curSongId,
    isPlaying,
    detailSong,
    detailInfoSong: songInfo,
  } = useSelector((state) => state.song);
  const dispatch = useDispatch();
  useEffect(() => {
    const getSongById = async () => {
      const data = await dispatch(fetchDetailSongById(curSongId));
      return data;
    };
    const getInfoById = async () => {
      const data = await dispatch(fetchInfoSongById(curSongId));
      return data;
    };
    if (detailSong) {
      setAudio(new Audio(detailSong?.data?.["128"]));
    } else {
      setAudio(new Audio());
      dispatch(setIsPlaying(false));
    }
    getInfoById();
    getSongById();
  }, [curSongId]);

  return (
    <div className="h-full px-5 bg-main-400 flex">
      <div className="w-[30%]  flex gap-3 items-center justify-center">
        <img
          src={songInfo?.thumbnail}
          alt="thumbnail"
          className="w-16 h-16 object-cover rounded-md"
        />
        <div className="flex flex-col">
          <span className="font-semibold text-gray-700 text-sm">
            {songInfo?.title}
          </span>
          <span className="text-xs text-gray-500">
            {songInfo?.artistsNames}
          </span>
        </div>
        <div className="flex gap-4 pl-2">
          <span>
            <AiOutlineHeart size={16} />
          </span>
          <span>
            <BsThreeDots size={16} />
          </span>
        </div>
      </div>
      <div className="w-[40%] flex-auto flex items-center justify-center gap-4 flex-col  py-2">
        <div className="flex gap-8 justify-center items-center">
          <span className="cursor-pointer" title="Bật phát ngẫu nhiên">
            <CiShuffle size={24} />
          </span>
          <span className="cursor-pointer">
            <MdSkipPrevious size={24} />
          </span>
          <span
            className="p-2 border border-gray-700 cursor-pointer hover:text-main-500 rounded-full flex items-center justify-center"
            onClick={() => handleTogglePlayMusic()}>
            {isPlaying === true ? (
              <BsPauseFill size={30} />
            ) : (
              <ImPlay3 size={30}></ImPlay3>
            )}
            {/* <BsFillPlayFill size={30} /> */}
          </span>
          <span className="cursor-pointer">
            <MdSkipNext size={24} />
          </span>
          <span className="cursor-pointer" title="Bật phát lại tất cả">
            <CiRepeat size={24} />
          </span>
        </div>
        <div className="w-full">
          <div className="bg-[rgba(0,0,0,0.1)] relative m-auto h-[3px] w-4/5 rounded-l-full rounded-r-full">
            <div
              id="thumb-progress"
              className="bg-[#0e8080] absolute top-0 left-0 h-[10px] rounded-l-full rounded-r-full"></div>
          </div>
        </div>
      </div>
      <div className="w-[30%] flex-auto flex items-center justify-center gap-5">
        <span>
          <BiVolumeMute size={20}></BiVolumeMute>
        </span>
        <span>
          <BsVolumeUp size={20}></BsVolumeUp>
        </span>
      </div>
    </div>
  );
};
