import moment from "moment";
import React from "react";
import icons from "../ultis/icons";
const { BsMusicNoteBeamed } = icons;
export const List = ({ songData }) => {
  return (
    <>
      <div className="flex justify-between items-center p-[10px] border-t border-[rgba(0,0,0,0.05)] hover:bg-[#DDE4E4] cursor-pointer">
        <div className="flex items-center gap-3 flex-1">
          <span>
            <BsMusicNoteBeamed />
          </span>
          <img
            src={songData?.thumbnail}
            alt="thumbnailM"
            className="w-10 h-10 object-cover rounded-md"
          />
          <span className="flex flex-col w-full">
            <span className="text-sm font-semibold">
              {songData?.title?.length > 30
                ? `${songData?.title?.slice(0, 30)}...`
                : songData?.title}
            </span>
            <span>{songData?.artistsNames}</span>
          </span>
        </div>
        <div className="flex-1 flex items-center justify-center">
          {songData?.album?.title?.length > 30
            ? `${songData?.album?.title?.slice(0, 30)}...`
            : songData?.album?.title}
        </div>
        <div className="flex-1 flex justify-end">
          {moment.utc(songData?.duration * 1000).format("mm:ss")}
        </div>
      </div>
    </>
  );
};
