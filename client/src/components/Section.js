import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
const Section = (props) => {
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
export default memo(Section);
