import React, { useState } from "react";
import { useSelector } from "react-redux";
import SongItem from "./songItem";
export const NewRelease = () => {
  const { newRelease } = useSelector((state) => state.home);
  const [isActive, setIsActive] = useState(0);
  return (
    <div className="my-12 flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <div className="font-medium text-lg capitalize">{newRelease.title}</div>
        <div className="text-sm capitalize p-2 bg-gray-200">Tất cả</div>
      </div>
      <div className="flex items-center gap-4">
        <button
          onClick={() => setIsActive(0)}
          className={`px-3 py-2 rounded-l-full rounded-r-full border bg-transparent ${
            isActive === 0 ? "bg-gray-700 text-white" : ""
          }`}>
          Việt Nam
        </button>
        <button
          onClick={() => setIsActive(1)}
          className={`px-3 py-2 rounded-l-full rounded-r-full border bg-transparent ${
            isActive === 1 ? "bg-gray-700 text-white" : ""
          }`}>
          Quốc tế
        </button>
      </div>
      {isActive === 0 ? (
        <div className="grid grid-cols-3 gap-4 lg:grid-cols-2">
          {newRelease?.items?.vPop.map((item, index) => {
            return <SongItem data={item} key={item.encodeId}></SongItem>;
          })}
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-4 lg:grid-cols-2">
          {newRelease?.items?.others.map((item, index) => {
            return <SongItem data={item} key={item.encodeId}></SongItem>;
          })}
        </div>
      )}
    </div>
  );
};
