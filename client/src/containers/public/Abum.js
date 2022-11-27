import moment from "moment";
import React, { useEffect, useState } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Lists } from "../../components/Lists";
import { setLoading } from "../../redux/reducer/loadingSlice";
import { getAlbum } from "../../services/apiService";
export const Album = () => {
  const dispatch = useDispatch();
  // const { loading } = useSelector((state) => state.loading);
  // console.log("loading", loading);
  const { abid } = useParams();
  const [album, setAlbum] = useState([]);
  useEffect(() => {
    const fetchAlbum = async () => {
      dispatch(setLoading(true));
      let response = await getAlbum(abid);
      if (response.err === 0) {
        setAlbum(response.data);
        dispatch(setLoading(false));
      }
    };
    fetchAlbum();
  }, [abid]);
  return (
    <>
      <div className="flex gap-8 w-full h-full px-[59px]">
        <div className="flex-none w-1/4 flex flex-col items-center gap-2">
          <img
            src={album?.thumbnailM}
            alt="thumbnail"
            className="w-full object-contain rounded-md shadow-md"
          />
          <div className="flex flex-col items-center gap-1">
            <h3 className="text-[20px] font-bold text-gray-800">
              {album?.title}
            </h3>
            <span className="flex gap-2 items-center text-gray-500 text-xs">
              <span>Cập nhật:</span>
              <span>
                {moment.unix(album?.contentLastUpdate).format("DD/MM/YYYY")}
              </span>
            </span>
            <span className="flex gap-2 items-center text-gray-500 text-xs">
              {album?.artistsNames}
            </span>
            <span className="flex gap-2 items-center text-gray-500 text-xs">{`${Math.round(
              album?.like / 1000
            )}K người yêu thích`}</span>
          </div>
        </div>
        <Scrollbars style={{ width: "100%", height: "80%" }}>
          <div className="flex-auto mb-40">
            <span className="text-sm">
              <span className="text-gray-600">Lời tựa </span>
              <span>{album?.sortDescription}</span>
            </span>
            <Lists
              songs={album?.song?.items}
              totalDuration={album?.song?.totalDuration}
            />
          </div>
        </Scrollbars>
      </div>
    </>
  );
};
