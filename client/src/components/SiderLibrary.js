import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { setCurSongId, setIsPlaying } from "../redux/reducer/musicSlide";
import { useNavigate } from "react-router-dom";
export const SiderLibrary = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const dataBanner = useSelector((state) => state.home.dataBanner);
  const SliceWord = (string) => {
    const arrString = string.split(".");
    return arrString[0];
  };
  const handleClickBanner = (item) => {
    if (item.type === 1) {
      dispatch(setCurSongId(item));
      dispatch(setIsPlaying(true));
    }
    if (item.type === 4) {
      console.log(">>laylist:", item);
      let link = SliceWord(item?.link);
      console.log("link", link)
      navigate(`${link}`);
    }
  };
  return (
    <Swiper
      spaceBetween={15}
      className="mySwiper"
      slidesPerView={4}
      loop={true}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination, Navigation]}>
      {dataBanner.map((item) => {
        return (
          <SwiperSlide>
            <img
              onClick={() => handleClickBanner(item)}
              src={item.banner}
              alt=""
              className="h-[200px] object-contain rounded-lg"
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
