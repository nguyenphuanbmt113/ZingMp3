import React from "react";
import { useSelector } from "react-redux";

export const Artists = () => {
  const { artists } = useSelector((state) => state.home);
  console.log("artists", artists);
  const slice = (string) => {
    string = string.replace("Góc nhạc", "");
    return string;
  };
  return (
    <div className="relative my-12">
      <div className="text-lg font-medium mb-4">{artists?.title}</div>
      <div className="grid grid-cols-5 gap-4">
        {artists?.items.slice(0, 5).map((itembig) => {
          return (
            <div className="relative" key={itembig.encodeId}>
              <div className="overlay absolute inset-0 bg-gradient-to-t from-black/20 to  z-50"></div>
              <div>
                <img src={itembig.thumbnail} alt="" className="rounded-lg" />
              </div>
              <div className="absolute bottom-[25%] px-3 text-lg font-medium text-white">
                {slice(itembig?.title)}
              </div>
              <div className="flex items-center gap-3 absolute bottom-0 p-3">
                {itembig.song.items.slice(0, 3).map((ele) => {
                  return (
                    <div key={ele.encodeId}>
                      <img src={ele.thumbnail} alt="" className="rounded-lg" />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
