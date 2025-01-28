import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the necessary components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const PeakPlot = ({ results }) => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    if (results) {
      const loadData = results.load || [];
      const cycleData = results.cycles || [];

      // Check if we have both load and cycle data
      if (loadData.length > 0 && cycleData.length > 0) {
        setChartData({
          labels: cycleData, // X-axis: Cycle data
          datasets: [
            {
              label: "Load Data",
              data: loadData, // Y-axis: Load data
              borderColor: "rgba(75, 192, 192, 1)",
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              fill: true,
            },
          ],
        });
      }
    }
  }, [results]); // Re-run whenever results change

  // Check if chartData is ready
  if (!chartData) {
    return <div>Loading chart...</div>;
  }

  return (
    <div>
      <h3>Peak Load vs. Cycle Plot</h3>
      <Line data={chartData} />
    </div>
  );
};

export default PeakPlot;
