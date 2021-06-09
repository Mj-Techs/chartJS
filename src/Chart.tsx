import React, { useState } from "react";
import { Line, Bar } from "react-chartjs-2";
import { Chart } from "chart.js";
import annotationPlugin from "chartjs-plugin-annotation";
Chart.register(annotationPlugin);
const dataFirst = {
  label: "Car A - Speed (mph)",
  data: [0, 10, 23, 17, 18, 9, 11, 27, 18, 15, 12, 11, 9],
  lineTension: 0,
  fill: false,
  borderColor: "red",
  backgroundColor: "green",
};

const dataSecond = {
  label: "Car B - Speed (mph)",
  data: [0, 5, 15, 9, 10, 5, 3, 19, 10, 10, 10, 10, 6],
  lineTension: 0,
  fill: false,
  borderColor: "blue",
  backgroundColor: "green",
};
const dataThird = {
  label: "Car A - Speed (mph)",
  data: [0, 10, 23, 17, 18, 9, 11, 27, 18, 15, 12, 11, 9],
  lineTension: 0,
  fill: false,
  borderColor: "red",
  backgroundColor: "green",
};

const dataFourth = {
  label: "Car B - Speed (mph)",
  data: [0, 5, 15, 9, 10, 5, 3, 19, 10, 10, 10, 10, 6],
  lineTension: 0,
  fill: false,
  borderColor: "blue",
  backgroundColor: "red",
};

const speedData = {
  labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  datasets: [dataFirst, dataSecond],
};

const chartOptions = {
  // responsive: true,
  // maintainAspectRatio: false,
  // onClick: (e, element) => {
  //   if (element.length > 0) {
  //     var ind = element[0]._index;
  //     alert(ind);
  //   }
  // },
  // plugins: {
  //   legend: {
  //     display: false,
  //     position: "top",
  //     labels: {
  //       boxWidth: 80,
  //       fontColor: "red",
  //     },
  //   },
  //   autocolors: false,
  //   annotation: {
  //     annotations: {
  //       line1: {
  //         type: "line",
  //         mode: "vertical",
  //         xMin: 7,
  //         xMax: 7,
  //         borderColor: "#0072FF",
  //         borderWidth: 3,
  //       },
  //     },
  //   },
  // },
};

const barChartOptions = {
  plugins: {
    legend: {
      display: false,
      position: "top",
      labels: {
        boxWidth: 80,
        fontColor: "red",
      },
    },
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },

  responsive: true,
  maintainAspectRatio: false,
};

const BarGraph = () => {
  const [xValue, setxValue] = useState(2);

  return (
    <div>
      <div
        style={{
          background: "lightgray",
          borderRadius: "20px",
          margin: "20px",
        }}
      >
        <Bar type="horizontalBar" data={speedData} options={barChartOptions} />
      </div>
      <div
        style={{
          background: "lightgray",
          borderRadius: "20px",
          margin: "20px",
        }}
      >
        <Line
          type="line"
          data={speedData}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            onClick: function (e: any, element: any) {
              if (element.length > 0) {
                const ind = element[0].index;
                setxValue(ind);
              }
            },
            plugins: {
              legend: {
                display: false,
                position: "top",
                labels: {
                  boxWidth: 80,
                  fontColor: "red",
                },
              },
              autocolors: false,
              annotation: {
                annotations: {
                  line1: {
                    type: "line",
                    mode: "vertical",
                    xMin: xValue,
                    xMax: xValue,
                    borderColor: "#0072FF",
                    borderWidth: 3,
                  },
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
};
export default BarGraph;
