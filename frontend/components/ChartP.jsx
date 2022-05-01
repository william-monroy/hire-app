import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { PolarArea } from 'react-chartjs-2';

ChartJS.register(RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend);

export const options = {
  plugins: {
    legend: {
      display: false
    }
  },
  responsive: true,
  scales: {
    max: 100,
  },
};

// export const data = {
//   labels: ['Habilidades de Supervisión', 'Sentido común y tacto en las relaciones interpersonales', 'Capacidad de desición'],
//   datasets: [
//     {
//       label: '# of Votes',
//       data: [66.07, 20.0, 33.33],
//       backgroundColor: [
//         'rgba(255, 99, 132, 0.5)',
//         'rgba(54, 162, 235, 0.5)',
//         'rgba(255, 206, 86, 0.5)',
//       ],
//       borderWidth: 1,
//     },
//   ],
// };

export function ChartP({data}) {
  return <PolarArea options={options} data={data} />;
}
