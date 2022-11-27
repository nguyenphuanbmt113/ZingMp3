import React, { memo } from "react";
import moment from "moment";
import "moment/locale/vi"
const SongItem = ({ data }) => {
  return (
    <div className="p-2 flex gap-3 rounded-xl hover:bg-white transition-all">
      <div className="w-[60px] h-[60px]">
        <img
          src={data.thumbnail}
          alt="avatar"
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <div className="flex flex-col gap-1">
        <span>{data.title}</span>
        <span className="text-medium">{data.artistsNames}</span>
        <span>{moment(data.releaseDate * 1000).fromNow()}</span>
      </div>
    </div>
  );
};
export default memo(SongItem);
