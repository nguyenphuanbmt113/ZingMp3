import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Section } from "../../components/Section";

import { SiderLibrary } from "../../components/SiderLibrary";
import {
  fetchBanner,
  fetchNewEveryDay,
  fetchPlayList,
  fetcht100,
} from "../../redux/reducer/bannerSlide";
export const Home = () => {
  const dispatch = useDispatch();
  const { dataPlaylist, newEveryDay, top100 } = useSelector(
    (state) => state.home
  );
  console.log("top100", top100);
  useEffect(() => {
    dispatch(fetchBanner());
    dispatch(fetchPlayList());
    dispatch(fetchNewEveryDay());
    dispatch(fetcht100());
  }, [dispatch]);
  return (
    <div className="overflow-y-auto">
      <div className="px-[50px]">
        {/* <Slider></Slider> */}
        <SiderLibrary></SiderLibrary>
        <Section data={dataPlaylist}></Section>
        <Section data={newEveryDay}></Section>
        <Section data={top100}></Section>
      </div>
    </div>
  );
};
