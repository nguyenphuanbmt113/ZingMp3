import React from "react";
import { Outlet } from "react-router-dom";
import { SidebarRight, SidebarLeft } from "../../components";
import { Player } from "./Player";
import { Header } from "../../components/Header";
import { Scrollbars } from "react-custom-scrollbars-2";
import { Loading } from "../../components/Loading";
import { useSelector } from "react-redux";
export const Public = () => {
  const { loading } = useSelector((state) => state.loading);
  console.log("loading", loading);
  return (
    <div className="w-full flex flex-col min-h-screen">
      <div className="h-full flex flex-auto">
        <div className="w-[240px] flex-none lg:hidden">
          <SidebarLeft></SidebarLeft>
        </div>
        <div className="w-full flex-auto bg-gray-100">
          {loading && (
            <div className="absolute inset-0 bg-black/50 z-50 flex items-center justify-center">
              <Loading></Loading>
            </div>
          )}
          <div className="h-[70px] px-[59px] flex items-center mb-5 lg:px-[50px]">
            <Header></Header>
          </div>
          <Scrollbars autoHide style={{ width: "100%", height: "80%" }}>
            <Outlet></Outlet>
          </Scrollbars>
        </div>
        <div className="w-[329px] flex-none 1600:hidden">
          <SidebarRight></SidebarRight>
        </div>
      </div>
      <div className="flex-none h-[90px] w-full bg-gray-500 z-[100]">
        <Player></Player>
      </div>
    </div>
  );
};
