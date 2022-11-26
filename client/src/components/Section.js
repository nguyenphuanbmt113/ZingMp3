import React from "react";
import { useNavigate } from "react-router-dom";
export const Section = (props) => {
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
  return (
    <div className="mt-12 flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <div className="font-medium text-lg capitalize">{data.title}</div>
        <div className="text-sm capitalize">Tất cả</div>
      </div>
      <div className="grid grid-cols-5 lg:grid-cols-3 md:grid-cols-2 gap-4 gap-y-6">
        {data.items.map((item) => {
          return (
            <div
              key={item.encodeId}
              className="flex flex-col gap-2"
              onClick={() => handleClick(item)}>
              <img src={item.thumbnailM} alt="avatar" />
              <div className="truncate">{item.title}</div>
              <div className="truncate">{item.sortDescription}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
