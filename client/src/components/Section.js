import React, { memo, useState } from "react";
import { useNavigate } from "react-router-dom";
import icons from "../ultis/icons";
const { BiDotsHorizontalRounded, CiHeart, CiPlay1, BsSuitHeartFill } = icons;
const Section = (props) => {
  const [fill, setFill] = useState(false);
  const { data } = props;
  const navigate = useNavigate();
  const SliceWord = (string) => {
    const arrString = string.split(".");
    return arrString[0];
  };
  const handleClick = (item) => {
    let link = SliceWord(item?.link);
    navigate(`${link}`);
  };
  const handleHeart = (e) => {
    e.stopPropagation();
    setFill(!fill);
  };
  return (
    <div className="mt-9 flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <div className="font-medium text-lg capitalize">{data.title}</div>
        <div className="text-sm capitalize p-2 bg-gray-200">Tất cả</div>
      </div>
      <div className="grid grid-cols-5 lg:grid-cols-3 md:grid-cols-2 gap-4 gap-y-6">
        {data.items.slice(0, 5).map((item) => {
          return (
            <div
              key={item.encodeId}
              className="flex flex-col gap-2"
              onClick={() => handleClick(item)}>
              <div className="relative">
                <img src={item.thumbnailM} alt="avatar" />
                <div className="opacity-0 absolute inset-0 bg-black/50 text-white flex items-center justify-center gap-3 w-full hover:opacity-100 transition-opacity ease-in">
                  <div className="" onClick={(e) => handleHeart(e)}>
                    {fill === false ? (
                      <CiHeart size={24}></CiHeart>
                    ) : (
                      <BsSuitHeartFill></BsSuitHeartFill>
                    )}
                  </div>
                  <div className="p-2 rounded-full border border-white flex items-center justify-center">
                    <CiPlay1 size={24}></CiPlay1>
                  </div>
                  <div>
                    <BiDotsHorizontalRounded
                      size={24}></BiDotsHorizontalRounded>
                  </div>
                </div>
              </div>
              <div className="truncate">{item.title}</div>
              <div className="truncate">{item.sortDescription}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default memo(Section);
