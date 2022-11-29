import moment from "moment";
import React, { useState } from "react";

export const SongItemActive = ({ data, icon, iconAfter }) => {
  const [isLike, setIsLike] = useState(false);
  const handleIcons = (e) => {
    e.stopPropagation();
    setIsLike(!isLike);
  };
  return (
    <>
      <div className="pl-2 flex pr-10 gap-3 rounded-xl transition-all relative">
        <div className="flex-none w-[60px] h-[60px]">
          <img
            src={data.thumbnail}
            alt="avatar"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="flex-auto">
          <div className="flex flex-col gap-1">
            <span className="text-ellipsis overflow-hidden">{data.title}</span>
            <span className="text-medium">{data.artistsNames}</span>
            <span>{moment(data.releaseDate * 1000).fromNow()}</span>
          </div>
        </div>
        <div
          className="text-lg absolute top-[5%] right-[5%]"
          onClick={(e) => handleIcons(e)}>
          {!isLike ? icon : iconAfter}
        </div>
      </div>
    </>
  );
};
