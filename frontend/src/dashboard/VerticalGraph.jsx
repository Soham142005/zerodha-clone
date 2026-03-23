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

// Register the necessary components from Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Define chart options (exported for potential external use, though here it's used internally)
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top", // Position the legend at the top of the chart
    },
    title: {
      display: true, // Display the title
      text: "Holdings", // Set the title text
    },
  },
};

/**
 * A reusable component to render a vertical bar chart.
 * It expects the data structure to be compatible with react-chartjs-2.
 * @param {object} props - Component props.
 * @param {object} props.data - The data object containing labels and datasets.
 */
export function VerticalGraph({ data }) {
  // The Bar component takes the defined options and the dynamic data prop
  return <Bar options={options} data={data} />;
}