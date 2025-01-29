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
  Filler, // Import the Filler plugin
} from "chart.js";

// Register the necessary components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler // Register the Filler plugin
);

const PeakPlot = ({ data }) => {
  console.log("Received data in PeakPlot:", data);
  console.log("Load length:", data?.load?.length);
  console.log("Cycles length:", data?.cycles?.length);
  console.log("Peak Cycles:", data?.peak_cycles);
  console.log("Peak Values:", data?.peak_values);

  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    console.log("Setting chart data");

    if (data && data.load && data.cycles) {
      const peakCycles = data.peak_cycles || [];
      const peakValues = data.peak_values || [];

      // Initialize peakData with null values for all cycles
      const peakData = new Array(data.cycles.length).fill(null);

      // Ensure peak_cycles and peak_values have matching lengths
      if (peakCycles.length !== peakValues.length) {
        console.warn("Mismatch between number of peak cycles and peak values");
      }

      // Populate peakData array at positions from peak_cycles with corresponding peak_values
      peakCycles.forEach((cycle, index) => {
        // Convert cycle to an index by finding the closest matching value in cycles
        const closestIndex = data.cycles.findIndex(c => Math.abs(c - cycle) < 1); // Tolerate small difference

        if (closestIndex !== -1) {
          peakData[closestIndex] = peakValues[index];
        } else {
          console.warn(`No matching cycle found for peak at ${cycle}`);
        }
      });

      console.log("Peak Data Array (with peaks placed at cycle positions):", peakData);

      setChartData({
        labels: data.cycles,  // Use all cycles as labels on the x-axis
        datasets: [
          {
            label: "Load Data",
            data: data.load,  // Main load data
            borderColor: "rgba(75, 192, 192, 1)",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            fill: true,    // Fill the area under the line
            pointRadius: 0,    // No markers for the main line
            pointHoverRadius: 0,
            order: 1,          // Ensure the load line is drawn first
            zIndex: 1,         // Lower zIndex to ensure the load line is behind
            borderWidth: 1,    // Thinner line
          },
          {
            label: "Peaks",
            data: peakData,   // Peak values, placed at corresponding cycles
            borderColor: "red",
            backgroundColor: "red",
            pointRadius: 3,     // Show markers for peaks
            pointHoverRadius: 5,
            showLine: false,    // No line for peak points
            order: 2,           // Peaks should be rendered after the load line
            zIndex: 10,         // Ensure peaks are on top with a higher zIndex
          },
        ],
      });
    }
  }, [data]);

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
