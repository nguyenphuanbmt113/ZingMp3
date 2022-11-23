import React from "react";
import { Outlet } from "react-router-dom";
import { SidebarRight, SidebarLeft } from "../../components";
export const Public = () => {
  return (
    <div className="w-full flex overflow-y-auto">
      <div className="w-[240px] border border-blue-400 flex-none">
        <SidebarLeft></SidebarLeft>
      </div>
      <div className="w-full border border-green-400 flex-auto">
        <Outlet></Outlet>
      </div>
      <div className="w-[329px] border border-red-400 flex-none lg:hidden">
        <SidebarRight></SidebarRight>
      </div>
    </div>
  );
};
