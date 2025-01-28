import React, { useState } from "react";
import LoadingBars from "../LoadingBars/LoadingBars";

const PeakLocatorInputs = ({ channelNames, onResultsReceived }) => {
  const [selectedChannels, setSelectedChannels] = useState({
    channel1: "",
    channel2: "",
  });
  const [threshold, setThreshold] = useState(2500);
  const [prominence, setProminence] = useState(2500);
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState(null);

  const handleChannelChange = (key, value) => {
    setSelectedChannels((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleProminenceChange = (value) => {
    setProminence(prominence);
  };

  const handleThresholdChange = (value) => {
    setThreshold(threshold);
  };

  const handleSubmit = () => {
    setIsLoading(true);
    console.log("Selected Channels:", selectedChannels);
    console.log("Prominence:", prominence);
    console.log("Threshold:", threshold);

    const formData = new FormData();
    const fileInput = document.getElementById("fileInput");
    const file = fileInput.files[0];
    if (file) {
      formData.append("file", file);
    }

    formData.append("loadChannel", selectedChannels.channel1);
    formData.append("revChannel", selectedChannels.channel2);
    formData.append("prominence", JSON.stringify(prominence));
    formData.append("threshold", JSON.stringify(threshold));

    fetch("http://localhost:5000/findPeaks", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json()) // Parse the initial response as JSON
      .then((data) => {
        console.log("Data after parsing:", data);
    
        if (data.status === "success") {
          try {
            // Check if results are a string (which it is in your case)
            const parsedResults = typeof data.results === 'string' 
              ? JSON.parse(data.results) // Parse the stringified JSON inside results
              : data.results;  // If it's already an object, use it directly
    
            setResults(parsedResults);  // Update state with parsed results
            onResultsReceived(parsedResults);  // Send results to parent component
          } catch (error) {
            console.error("Error parsing the results:", error);
            alert("Error parsing the results: " + error.message);
          }
        } else {
          alert("Error: " + data.message);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    
  }

  return (
    <>
      <h2>Select Channels and Adjust Inputs</h2>
      <div
        style={{
          padding: "16px",
          maxWidth: "600px",
          margin: "0 auto",
          marginTop: "0px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="channel1" style={{ marginRight: "10px" }}>
            Select Load Channel:
          </label>
          <select
            id="channel1"
            value={selectedChannels.channel1}
            onChange={(e) => handleChannelChange("channel1", e.target.value)}
            style={{ padding: "5px", width: "200px" }}
          >
            <option value="">-- Select Channel --</option>
            {channelNames.map((channel, index) => (
              <option key={index} value={channel}>
                {channel}
              </option>
            ))}
          </select>
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="channel2" style={{ marginRight: "10px" }}>
            Select Counter Channel:
          </label>
          <select
            id="channel2"
            value={selectedChannels.channel2}
            onChange={(e) => handleChannelChange("channel2", e.target.value)}
            style={{ padding: "5px", width: "200px" }}
          >
            <option value="">-- Select Channel --</option>
            {channelNames.map((channel, index) => (
              <option key={index} value={channel}>
                {channel}
              </option>
            ))}
          </select>
        </div>

        <div style={{ marginBottom: "16px" }}>
          <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}>
            Prominence: {prominence}
          </label>
          <input
            type="range"
            min="0"
            max="5000"
            step="10"
            value={prominence}
            onChange={(e) => setProminence(Number(e.target.value))}
            style={{ width: "100%" }}
          />
        </div>

        <div style={{ marginBottom: "16px" }}>
          <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}>
            Threshold: {threshold}
          </label>
          <input
            type="range"
            min="0"
            max="10000"
            step="10"
            value={threshold}
            onChange={(e) => setThreshold(Number(e.target.value))}
            style={{ width: "100%" }}
          />
        </div>
      </div>
      <button
        onClick={handleSubmit}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        Submit
      </button>
      {isLoading && <LoadingBars />} {/* Show LoadingBar when loading */}
    </>
  );
};

export default PeakLocatorInputs;