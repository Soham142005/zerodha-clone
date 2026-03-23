import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

// Register the required elements for Doughnut and Pie charts
ChartJS.register(ArcElement, Tooltip, Legend);

/**
 * A reusable component to render a Doughnut chart.
 * It expects the data structure to be compatible with react-chartjs-2.
 * @param {object} props - Component props.
 * @param {object} props.data - The data object containing labels and datasets.
 */
export function DoughnutChart({ data }) {
  // Renders the Doughnut chart using the provided data
  return <Doughnut data={data} />;
}