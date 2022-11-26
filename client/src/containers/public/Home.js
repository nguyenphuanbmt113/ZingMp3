import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Section from "../../components/Section";
// import { Section } from "../../components/Section";
import { SiderLibrary } from "../../components/SiderLibrary";
import {
  fetchAdban,
  fetchBanner,
  fetchLiveStream,
  fetchNewEveryDay,
  fetchPlayList,
  fetchRecent,
  fetcht100,
  fetchXone,
} from "../../redux/reducer/bannerSlide";
const activeTab = "px-4 py-2 bg-gray-500 text-white";
const noactiveTab = "px-4 py-2 border ";
export const Home = () => {
  const [active, setActive] = useState("tab1");
  const dispatch = useDispatch();
  const { dataPlaylist, newEveryDay, top100, xone, livestream } = useSelector(
    (state) => state.home
  );
  useEffect(() => {
    dispatch(fetchBanner());
    dispatch(fetchPlayList());
    dispatch(fetchNewEveryDay());
    dispatch(fetcht100());
    dispatch(fetchLiveStream());
    dispatch(fetchRecent());
    dispatch(fetchXone("hXone"));
  }, [dispatch]);
  return (
    <div className="overflow-y-auto">
      <div className="px-[50px]">
        {/* <Slider></Slider> */}
        <SiderLibrary></SiderLibrary>
        <Section data={dataPlaylist}></Section>
        <div className="flex flex-col mt-10">
          <div className="text-xl font-medium mb-4">Mới Phát Hành</div>
          <div>
            <button
              className={active === "tab1" ? activeTab : noactiveTab}
              onClick={() => setActive("tab1")}>
              Livestream
            </button>
            <button
              className={active === "tab2" ? activeTab : noactiveTab}
              onClick={() => setActive("tab2")}>
              Resent Top 100
            </button>
          </div>
        </div>
        <div className="outlet">
          {active === "tab1" ? (
            <Section data={livestream}></Section>
          ) : (
            <Section data={top100}></Section>
          )}
        </div>
        <Section data={newEveryDay}></Section>
        <Section data={top100}></Section>
        <Section data={xone}></Section>
        <div className="w-full h-[500px]"></div>
      </div>
    </div>
  );
};
