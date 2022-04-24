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
  plugins: {
    title: {
      display: false,
      text: "Chart.js Bar Chart - Stacked",
    },
    legend: {
      display: true,
    },
    datalabels: {
      display: false,
    },
  },
  responsive: true,
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
        display: true,
      },
    },

    y: {
      stacked: true,
      grid: {
        display: false,
      },
      ticks: {
        display: false,
      },
    },
  },
};

const labels = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

export const data = {
  labels,
  datasets: [
    {
      label: "Vistas",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "#7928ca",
      stack: "Stack 0",
    },
    {
      label: "Solicitudes",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "#f5a623",
      stack: "Stack 0",
    }
  ],
};

export function Chart() {
  return <Bar options={options} data={data} />;
}
