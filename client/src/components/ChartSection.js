import { memo, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";
const ChartSection = () => {
  const { charts } = useSelector((state) => state.home);
  // console.log("charts", charts);
  const [data, setData] = useState(null);
  console.log("data", data);
  const options = {
    responsive: true,
    pointRadius: 0,
    aspectRatio: 4,
    scales: {
      y: {
        ticks: { display: false },
        grid: { borderDash: [1, 4], color: "gray" },
      },
      x: {
        ticks: { color: "blue" },
        grid: { color: "transparent" },
      },
    },
    plugins: {
      legend: false,
    },
  };
  useEffect(() => {
    const labels = charts.chart.times
      ?.filter((item) => +item.hour % 2 === 0)
      ?.map((item) => `${item.hour}:00`);
    const datasets = [];
    // console.log("labels", labels);
    if (charts?.chart?.items) {
      for (let i = 0; i < 3; i++) {
        datasets.push({
          data: charts?.chart?.items[Object.keys(charts?.items)[i]]
            ?.filter((item) => +item.hour % 2 === 0)
            ?.map((item) => item.counter),
          borderColor: i === 0 ? "#4a90e2" : i === 1 ? "#50e3c2" : "#e35050",
          tension: 0.2,
          borderWidth: 2,
          pointBackgroundColor: "white",
          pointHoverRadius: 4,
          pointBorderColor:
            i === 0 ? "#4a90e2" : i === 1 ? "#50e3c2" : "#e35050",
          pointHoverBorderWidth: 4,
        });
      }
      setData({ labels, datasets });
    }
  }, [charts]);
  return (
    <div className="relative my-12 p-4 text-white bg-chartbg bg-center bg-no-repeat bg-cover rounded-lg">
      <div className="bg-purple-700/90 absolute inset-0 z-0"></div>
      <div className="relative z-[100]">
        <div className="text-lg font-medium mb-4 text-white">#Zingchart</div>
        <div className="flex gap-4">
          <div className="border border-red-500 w-[40%]">Hello Chart</div>
          <div className="border border-blue-500 w-[60%] flex">
            {/* <div className="w-[20%]">top rank</div> */}
            <div className="w-[80%]">
              {data && <Line data={data} options={options} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default memo(ChartSection);
