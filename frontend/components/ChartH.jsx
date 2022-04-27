import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    title: {
      display: false,
      text: "Chart.js Bar Chart - Stacked",
    },
    legend: {
      display: true,
      position: 'bottom',
    },
    label: {
      display: false,
    },
  },
  interaction: {
    mode: "index",
    intersect: false,
  },
  scales: {
    x: {
      stacked: true,
      grid: {
        display: false,
      },
      ticks: {
        display: false,
      },
    },

    y: {
      stacked: true,
      grid: {
        display: false,
      },
      ticks: {
        display: false,
        barThickness : 50,
        thickness : 50

      },
      axes: {
        barPercentage: 0.2,
        categorySpacing: 0
      },
      barPercentage: 0.2,
      barThickness : 50,
      categorySpacing: 0
    },
  },
};

const labels = ["Aplicantes"];

export const data = {
  labels,
  datasets: [
    {
      label: "Tiempo Completo",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "#7928ca",
      stack: "Stack 0",
    },
    {
      label: "Medio Tiempo",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "#f5a623",
      stack: "Stack 0",
    },
    {
      label: "Pasantía",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "#DC0032",
      stack: "Stack 0",
    },
  ],
};

export function ChartH() {
  return <Bar options={options} data={data} />;
}
