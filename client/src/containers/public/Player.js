import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDetailSongById,
  fetchInfoSongById,
} from "../../redux/reducer/musicSlide";
import icons from "../../ultis/icons";
const {
  AiOutlineHeart,
  BsVolumeUp,
  AiFillHeart,
  BsThreeDots,
  MdSkipNext,
  MdSkipPrevious,
  CiRepeat,
  BsPauseFill,
  BsFillPlayFill,
  CiShuffle,
  BiVolumeMute,
} = icons;
export const Player = () => {
  const {
    curSongId,
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
    getInfoById();
    getSongById();
  }, [curSongId, dispatch]);
  console.log("curSongId", curSongId);
  const handleTogglePlayMusic = ()=>{
    
  }
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
            className="p-1 border border-gray-700 cursor-pointer hover:text-main-500 rounded-full"
            onClick={()=>handleTogglePlayMusic()}>
            <BsPauseFill size={30} />
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
              className="bg-[#0e8080] absolute top-0 left-0 h-[3px] rounded-l-full rounded-r-full"></div>
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
