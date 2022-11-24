import React from "react";
import icons from "../ultis/icons";
const { AiOutlineArrowRight, AiOutlineArrowLeft } = icons;
export const Header = () => {
  return (
    <div className="flex items-center w-full">
      <div className="flex gap-2 mr-5">
        <div>
          <AiOutlineArrowLeft size="20px"></AiOutlineArrowLeft>
        </div>
        <div>
          <AiOutlineArrowRight size="20px"></AiOutlineArrowRight>
        </div>
      </div>
      <div className="w-1/2 text-sm">
        <input
          type="text"
          className="py-2 px-4 h-[40px] w-full rounded-3xl bg-white placeholder:text-sm"
          placeholder="Tìm Kiếm bài hát, Nghệ sĩ"
        />
      </div>
      <div className="flex items-center gap-3 text-sm ml-auto">
        <button className="px-3 py-2 border-2 borer-black text-black rounded-md hover:bg-gray-300">
          Đăng Kí
        </button>
        <button className="px-3 py-2 border-2 borer-black text-black rounded-md hover:bg-gray-300">
          Đăng Nhập
        </button>
      </div>
    </div>
  );
};
