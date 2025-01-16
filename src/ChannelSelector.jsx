import React, { useState } from "react";

const ChannelSelector = ({ channelNames }) => {
  const [selectedChannels, setSelectedChannels] = useState({
    channel1: "",
    channel2: "",
  });
  const [exponents, setExponents] = useState([]);

  const handleChannelChange = (key, value) => {
    setSelectedChannels((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleExponentChange = (value) => {
    // Split input by commas, trim whitespace, and parse to numbers
    const parsedExponents = value
      .split(",")
      .map((exponent) => exponent.trim())
      .filter((exponent) => !isNaN(Number(exponent)))
      .map(Number);
    setExponents(parsedExponents);
  };

  const handleSubmit = () => {
    console.log("Selected Channels:", selectedChannels);
    console.log("Exponents:", exponents);
    alert(
      `Selected Channels: ${JSON.stringify(selectedChannels)}\nExponents: ${exponents.join(
        ", "
      )}`
    );
  };

  return (
    <div>
      <h2>Select Channels and Set Exponents</h2>

      {/* Dropdown for First Channel */}
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="channel1" style={{ marginRight: "10px" }}>
          Select Channel 1:
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

      {/* Dropdown for Second Channel */}
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="channel2" style={{ marginRight: "10px" }}>
          Select Channel 2:
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

      {/* Input for Exponents */}
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="exponent" style={{ marginRight: "10px" }}>
          Enter Exponents (comma-separated):
        </label>
        <input
          id="exponent"
          type="text"
          onChange={(e) => handleExponentChange(e.target.value)}
          placeholder="E.g., 2, 3.5, 7"
          style={{ width: "300px", padding: "5px" }}
        />
      </div>

      {/* Submit Button */}
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
    </div>
  );
};

export default ChannelSelector;
