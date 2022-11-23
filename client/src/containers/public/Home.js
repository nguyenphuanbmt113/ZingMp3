import React from "react";
import { Header } from "../../components/Header";

export const Home = () => {
  return (
    <div className="overflow-y-auto">
      <div className="h-[70px] bg-red-200 px-[95px] flex items-center lg:px-[50px]">
        <Header></Header>
      </div>
    </div>
  );
};
