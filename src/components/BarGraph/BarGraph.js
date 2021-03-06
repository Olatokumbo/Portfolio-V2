import React from "react";
import { HorizontalBar } from "react-chartjs-2";
import Zoom from "react-reveal/Zoom";
const options = {
  scales: {
    xAxes: [
      {
        stacked: true,
        gridLines: {
          display: false,
        },
      },
    ],
    yAxes: [
      {
        stacked: true,
        gridLines: {
          display: false,
        },
      },
    ],
  },
  legend: {
    display: false,
  },
};

const data = {
  labels: ["ReactJS", "NodeJS", "Git", "Photoshop", "Firebase", "HTML"],
  datasets: [
    {
      label: "Skills",
      data: [100, 80, 78, 50, 89, 95],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.9)",
      borderColor: "rgba(15,192,192,1)",
    },
  ],
};

const BarGraph = () => {
  return (
    <div>
      <Zoom top>
        <HorizontalBar data={data} options={options} width={30} height={9} />
      </Zoom>
    </div>
  );
};

export default BarGraph;
