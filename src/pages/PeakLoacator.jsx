import React from "react";
import { useState } from 'react';
import FileSelector from "../components/FileSelector/FileSelector";
import PeakLocatorInputs from "../components/PeakLocator/PeakLocatorInputs";

function PeakLocator() {
    const [channelNames, setChannelNames] = useState([]);

    const handleFileUploadResponse = (response) => {
      console.log("File upload response:", response);
      if (response.channels) {
        setChannelNames(response.channels);
      } else {
        alert("No channel names found in the response.");
      }
    };
    return (
        <>
            <h1 style={{fontSize: 40}}>Peak Locator</h1>
            <hr></hr>
            <div className="card">
            <FileSelector className='File Selector' onUploadComplete={handleFileUploadResponse}></FileSelector>
            </div>
            <div>
              <PeakLocatorInputs channelNames={channelNames}/>
            </div>
        </>
    )}

export default PeakLocator;
