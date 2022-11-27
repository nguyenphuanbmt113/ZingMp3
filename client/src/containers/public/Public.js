import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { SidebarRight, SidebarLeft } from "../../components";
import { Player } from "./Player";
import { Header } from "../../components/Header";
import { Scrollbars } from "react-custom-scrollbars-2";
import { Loading } from "../../components/Loading";
import { useSelector } from "react-redux";
export const Public = () => {
  const { loading } = useSelector((state) => state.loading);
  const { loader } = useSelector((state) => state.home);
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  const handleClose = () => {
    setShow(false);
  };
  return (
    <div className="w-full flex flex-col min-h-screen">
      <div className="h-full flex flex-auto">
        <div
          className={
            show
              ? "w-[240px] flex-none lg:absolute top-0 left-0 bottom-0 z-[1000]"
              : "w-[240px] flex-none lg:absolute top-0 -left-[1000px] bottom-0 z-[1000]"
          }>
          <SidebarLeft handleClose={handleClose}></SidebarLeft>
        </div>
        <div className="w-full flex-auto bg-gray-100">
          {loading === true || loader === true ? (
            <div className="absolute inset-0 bg-black/50 z-[1000] flex items-center justify-center">
              <Loading></Loading>
            </div>
          ) : (
            ""
          )}

          <div className="h-[70px] px-[59px] flex items-center mb-5 lg:px-[50px]">
            <Header show={show} handleShow={handleShow}></Header>
          </div>
          <Scrollbars autoHide style={{ width: "100%", height: "80%" }}>
            <Outlet></Outlet>
          </Scrollbars>
        </div>
        <div className="w-[329px] flex-none 1600:hidden">
          <SidebarRight></SidebarRight>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 h-[90px] w-full bg-gray-500 z-[10000]">
        <Player></Player>
      </div>
    </div>
  );
};
