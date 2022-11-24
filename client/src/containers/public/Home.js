import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Header } from "../../components/Header";
import { SiderLibrary } from "../../components/SiderLibrary";
import { fetchBanner } from "../../redux/reducer/bannerSlide";
export const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBanner());
  }, [dispatch]);
  return (
    <div className="overflow-y-auto">
      <div className="h-[70px] px-[95px] flex items-center lg:px-[50px]">
        <Header></Header>
      </div>
      <div className="px-[50px]">
        {/* <Slider></Slider> */}
        <SiderLibrary></SiderLibrary>
      </div>
    </div>
  );
};
