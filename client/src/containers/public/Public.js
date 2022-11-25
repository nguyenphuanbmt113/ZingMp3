import React from "react";
import { Outlet } from "react-router-dom";
import { SidebarRight, SidebarLeft } from "../../components";
import { Player } from "./Player";
import { Header } from "../../components/Header";
export const Public = () => {
  return (
    <div className="w-full flex flex-col min-h-screen">
      <div className="h-full flex flex-auto">
        <div className="w-[240px] flex-none">
          <SidebarLeft></SidebarLeft>
        </div>
        <div className="w-full flex-auto bg-gray-100">
          <div className="h-[70px] px-[59px] flex items-center mb-5 lg:px-[50px]">
            <Header></Header>
          </div>
          <Outlet></Outlet>
        </div>
        <div className="w-[329px] flex-none 1600:hidden">
          <SidebarRight></SidebarRight>
        </div>
      </div>
      <div className="flex-none h-[90px] w-full bg-gray-500">
        <Player></Player>
      </div>
    </div>
  );
};
