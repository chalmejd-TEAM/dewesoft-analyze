import React, { useState } from 'react';
import LoadingBars from '../LoadingBars/LoadingBars';

const FileSelector = ({ onUploadComplete }) => {
  // State to store the selected file
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Handles changes to the file input
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0]; // Get the first selected file
    setFile(selectedFile); // Update state with the selected file
  };

  // Handles the file upload and sends it to the server
  const handleFileUpload = () => {
    if (!file) {
        alert("Please select a file to upload.");
        return;
    }

    const formData = new FormData();
    formData.append("file", file); // Attach the file

    setIsLoading(true);

    fetch("http://localhost:5000/run_python", {
        method: "POST",
        body: formData, // Send as multipart/form-data
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to upload file to the server.");
            }
            return response.json();
        })
        .then((data) => {
          console.log("Server response:", data);
  
          // Extract the channel names from the output
          const rawOutput = data.result?.output;
          if (rawOutput) {
            const channelNames = JSON.parse(rawOutput); // Parse the JSON string
            onUploadComplete({ channels: channelNames }); // Pass the channels to the parent component
          } else {
            alert("No valid output found in the server response.");
          }
        })
        .catch((error) => {
            console.error("Error uploading file to server:", error);
        })
        .finally(() => {
          setIsLoading(false);
        });
};

  return (
    <div style={{fontFamily: 'Arial, sans-serif' }}>
      <h2>File Selection</h2>

      {/* File input section */}
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="fileInput">Select a file (.dxd) : </label>
        <input
          id="fileInput"
          type="file"
          accept=".dxd" // Allow only .dxd files
          onChange={handleFileChange} // Trigger file selection handler
        />
      </div>

      {/* Button to upload file */}
      <button
        onClick={handleFileUpload} // Trigger file upload
        style={{ padding: '10px 20px', cursor: 'pointer' }}
      >
        Use Selected File
      </button>
      {/*Show Loading bars when uploading*/}
      {isLoading && < LoadingBars />}
    </div>
  );
};

export default FileSelector;
