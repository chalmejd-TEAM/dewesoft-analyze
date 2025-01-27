import React, { useState } from 'react';

const PeakLocatorInputs = () => {
  const [numExtrema, setNumExtrema] = useState(1);
  const [prominence, setProminence] = useState(2500);
  const [threshold, setThreshold] = useState(5000);
  const [rmsValue, setRmsValue] = useState(2500);
  const [loadChannel, setLoadChannel] = useState("");
  const [cycleChannel, setCycleChannel] = useState("");

  return (
    <>
        <h2>Adjust Inputs</h2>
        <div style={{ padding: '16px', maxWidth: '600px', margin: '0 auto', marginTop: '0px', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <div style={{ marginBottom: '8px' }}>
                <label htmlFor="numExtrema" style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Number of Extrema</label>
                <input
                id="numExtrema"
                type="number"
                min="1"
                value={numExtrema}
                onChange={(e) => setNumExtrema(Number(e.target.value))}
                style={{ width: '50%', padding: '8px', border: '1px solid #ccc', borderRadius: '10px' }}
                />
            </div>

            <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Prominence: {prominence}</label>
                <input
                type="range"
                min="0"
                max="5000"
                step="10"
                value={prominence}
                onChange={(e) => setProminence(Number(e.target.value))}
                style={{ width: '100%' }}
                />
            </div>

            <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Threshold: {threshold}</label>
                <input
                type="range"
                min="0"
                max="10000"
                step="10"
                value={threshold}
                onChange={(e) => setThreshold(Number(e.target.value))}
                style={{ width: '100%' }}
                />
            </div>

            <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>RMS Value: {rmsValue}</label>
                <input
                type="range"
                min="0"
                max="5000"
                step="10"
                value={rmsValue}
                onChange={(e) => setRmsValue(Number(e.target.value))}
                style={{ width: '100%' }}
                />
            </div>

            <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Load Channel</label>
                <select
                value={loadChannel}
                onChange={(e) => setLoadChannel(e.target.value)}
                style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
                >
                <option value="">Select Load Channel</option>
                <option value="Load Channel">Load Channel</option>
                </select>
            </div>

            <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Cycle Count Channel</label>
                <select
                value={cycleChannel}
                onChange={(e) => setCycleChannel(e.target.value)}
                style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
                >
                <option value="">Select Cycle Count Channel</option>
                <option value="Cycle Count Channel">Cycle Count Channel</option>
                </select>
            </div>
        </div>
    </>
   
  );
};

export default PeakLocatorInputs;
