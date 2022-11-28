import React from "react";
import { useNavigate } from "react-router-dom";

export const WeekChart = ({ data }) => {
  const navigate = useNavigate();
  const handleWeekChart = (item) => {
    const link = item?.link.split(".")[0];
    navigate(`${link}`);
  };
  return (
    <div className="my-8">
      <div className="capitalize font-medium text-lg mb-3">Weeks Rank</div>
      <div className="grid grid-cols-3 gap-4 lg:grid-cols-2">
        {data &&
          data.items.map((item, index) => {
            return (
              <div key={index} onClick={() => handleWeekChart(item)}>
                <img src={item.banner} alt="" className="rounded-lg" />
              </div>
            );
          })}
      </div>
    </div>
  );
};
