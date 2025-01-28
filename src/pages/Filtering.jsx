import React from "react";
import { useState } from 'react';
import FileSelector from "../components/FileSelector/FileSelector";

function Filtering() {
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
            <h1 style={{fontSize: 40}}>Filtering</h1>
            <hr></hr>
            <h2>In process...</h2>
        </>
    )}

export default Filtering;
