import React, { useEffect } from "react";
import icons from "../ultis/icons";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineHeart } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import {
  fetchDetailSongById,
  fetchInfoSongById,
} from "../../redux/reducer/musicSlide";
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
  return (
    <div className="h-full px-5 bg-main-400 flex">
      <div className="w-[30%] border border-blue-500 flex gap-3 items-center">
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
      <div className="w-[40%] border border-red-500">Music</div>
      <div className="w-[30%] border border-green-500">Extra Features</div>
    </div>
  );
};
