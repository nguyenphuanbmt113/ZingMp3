import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { SiderLibrary } from "../../components/SiderLibrary";
import { fetchBanner } from "../../redux/reducer/bannerSlide";
export const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBanner());
  }, [dispatch]);
  return (
    <div className="overflow-y-auto">
      <div className="px-[50px]">
        {/* <Slider></Slider> */}
        <SiderLibrary></SiderLibrary>
      </div>
    </div>
  );
};
