import React, { memo, useState } from "react";
import moment from "moment";
import "moment/locale/vi";
import { useDispatch } from "react-redux";
import { setCurSongId, setIsPlaying } from "../redux/reducer/musicSlide";
const SongItem = ({ data, icon, iconAfter }) => {
  const [isLike, setIsLike] = useState(false);
  const dispatch = useDispatch();
  const handleSongItem = () => {
    dispatch(setCurSongId(data));
    dispatch(setIsPlaying(true));
  };
  const handleIcons = (e) => {
    e.stopPropagation();
    setIsLike(!isLike);
  };

  return (
    <div
      className="py-2 pl-2 pr-10 flex gap-3 rounded-xl hover:bg-gray-200 transition-all relative"
      onClick={() => handleSongItem()}>
      <div className="flex-none w-[60px] h-[60px]">
        <img
          src={data?.thumbnail}
          alt="avatar"
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <div className="flex-auto">
        <div className="flex flex-col gap-1">
          <span className="text-ellipsis overflow-hidden">{data?.title}</span>
          <span className="text-medium">{data?.artistsNames}</span>
          <span>{moment(data?.releaseDate * 1000).fromNow()}</span>
        </div>
      </div>
      <div
        className="text-lg absolute top-[5%] right-[5%]"
        onClick={(e) => handleIcons(e)}>
        {isLike ? iconAfter : icon}
      </div>
    </div>
  );
};
export default memo(SongItem);
