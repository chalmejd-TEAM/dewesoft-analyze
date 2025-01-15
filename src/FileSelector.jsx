import React, { useState } from 'react';

const FileSelector = () => {
  // State to store the selected file
  const [file, setFile] = useState(null);

  // Handles changes to the file input
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0]; // Get the first selected file
    setFile(selectedFile); // Update state with the selected file
  };

  // Handles the file upload and sends it to the server
  const handleFileUpload = () => {
    if (!file) {
      alert('Please select a file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file); // Attach the file to the FormData object

    // Send the file to the server
    fetch('/api/upload-file', {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to upload file to the server.');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Server response:', data);

        // Trigger Python script using the uploaded file
        fetch('/api/run-script', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ script: 'loadChannelList.py', args: [data.filePath] }),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error('Failed to execute Python script.');
            }
            return response.json();
          })
          .then((scriptResponse) => {
            console.log('Python script response:', scriptResponse);
          })
          .catch((error) => {
            console.error('Error executing Python script:', error);
          });
      })
      .catch((error) => {
        console.error('Error uploading file to server:', error);
      });
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
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
    </div>
  );
};

export default FileSelector;
