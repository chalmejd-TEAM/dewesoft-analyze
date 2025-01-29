import React, { useState } from "react";
import FileSelector from "../components/FileSelector/FileSelector";
import PeakLocatorInputs from "../components/PeakLocator/PeakLocatorInputs";
import PeakPlot from "../components/PeakLocator/PeakPlot";

function PeakLocator() {
  const [channelNames, setChannelNames] = useState([]);
  const [plotData, setPlotData] = useState(null);  // Store the plot data here

  const handleFileUploadResponse = (response) => {
    console.log("File upload response:", response);
    if (response.channels) {
      setChannelNames(response.channels);
    } else {
      alert("No channel names found in the response.");
    }
  };

  const handleResultsReceived = (results) => {
    console.log("Received results:", results);
    setPlotData(results);  // Update plot data state when results are received
  };

  return (
    <>
      <h1 style={{ fontSize: 40 }}>Peak Locator</h1>
      <hr />
      <div className="card">
        <FileSelector className="File Selector" onUploadComplete={handleFileUploadResponse} />
      </div>
      <div>
        <PeakLocatorInputs channelNames={channelNames} onResultsReceived={handleResultsReceived} />
      </div>
      <div>
        {console.log("Plot Data before rendering PeakPlot:", plotData)}  {/* Log before rendering */}
        {plotData ? <PeakPlot data={plotData} /> : <p>Waiting for data...</p>}
      </div>
      <h2>In Process...</h2>
    </>
  );  
}

export default PeakLocator;
