import React from "react";
import { useState } from 'react'
import Formula from "../components/WeightedMean/Formula";
import FileSelector from "../components/FileSelector/FileSelector";
import ChannelSelector from "../components/WeightedMean/ChannelSelector";
import Footer from "../components/Footer/Footer";

function WeightedMean() {
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
            <div className="card">
            <FileSelector className='File Selector' onUploadComplete={handleFileUploadResponse}></FileSelector>
            </div>
            <div className='card'>
            {channelNames.length > 0 && <ChannelSelector channelNames={channelNames} />}
            </div>
        </>
    )}

export default WeightedMean;
