import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAlbum } from "../services/apiService";
import icons from "../ultis/icons";
import SongItem from "./songItem";
import { Scrollbars } from "react-custom-scrollbars-2";
import { SongItemActive } from "./SongItemActive";
const { BsThreeDots, CiHeart, BsSuitHeartFill, RiDeleteBin2Line } = icons;
const active = "px-3 py-2 bg-gray-200 rounded-3xl text-main-500";
const noactive = "px-3 py-2 rounded-3xl text-main-500 border";
export const SidebarRight = () => {
  const [isActive, setIsActive] = useState(0);
  const { arrayHis } = useSelector((state) => state.history);
  console.log("arrayHis", arrayHis);
  const { detailInfoSong, curSongId } = useSelector((state) => state.song);
  const [album, setAlbum] = useState([]);
  const fetchAlbum = async () => {
    let response = await getAlbum(curSongId);
    if (response.err === 0) {
      setAlbum(response.data?.song);
    }
  };
  useEffect(() => {
    fetchAlbum();
  }, []);
  useEffect(() => {
    if (curSongId) {
      fetchAlbum();
    }
  }, [curSongId]);
  return (
    <div className="flex flex-col">
      <div className="h-[70px] flex-auto py-[14px] px-[8px] border-b">
        <div className="flex items-center justify-between">
          <button
            className={isActive === 0 ? active : noactive}
            onClick={() => setIsActive(0)}>
            Danh Sánh Phát
          </button>
          <button
            className={isActive === 1 ? active : noactive}
            onClick={() => setIsActive(1)}>
            Phát Gần Đây
          </button>
          <div className="p-2 rounded-full bg-gray-200">
            <BsThreeDots size={25}></BsThreeDots>
          </div>
        </div>
      </div>
      {isActive === 0 && (
        <div className="py-[8px] px-[8px] bg-main-500 text-white">
          <SongItemActive
            data={detailInfoSong}
            icon={<CiHeart></CiHeart>}
            iconAfter={<BsSuitHeartFill></BsSuitHeartFill>}></SongItemActive>
        </div>
      )}
      {isActive === 0 && (
        <div className="px-2 py-4 flex flex-col gap-2 border-b">
          <div>Tiếp Theo</div>
          <div>
            <span>PlayList: </span>
            <span className="text-main-500 font-medium">
              {detailInfoSong?.album?.title}
            </span>
          </div>
        </div>
      )}
      {isActive === 1 ? (
        <Scrollbars autoHide style={{ width: "100%", height: "700px" }}>
          <div className="grid grid-cols-1 gap-4">
            {arrayHis.map((item, index) => {
              return (
                <SongItem
                  data={item}
                  icon={<CiHeart></CiHeart>}
                  iconAfter={<BsSuitHeartFill></BsSuitHeartFill>}></SongItem>
              );
            })}
          </div>
        </Scrollbars>
      ) : (
        <div className="flex-auto px-[8px] py-2">
          <Scrollbars autoHide style={{ width: "100%", height: "500px" }}>
            <div className="grid grid-cols-1 gap-4">
              {album?.items?.map((item, index) => {
                return (
                  <SongItem
                    data={item}
                    icon={<CiHeart></CiHeart>}
                    iconAfter={<BsSuitHeartFill></BsSuitHeartFill>}></SongItem>
                );
              })}
            </div>
          </Scrollbars>
        </div>
      )}
    </div>
  );
};
