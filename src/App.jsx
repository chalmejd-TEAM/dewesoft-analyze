import { useState } from 'react'
import './App.css'
import FileSelector from './FileSelector'
import ChannelSelector from './ChannelSelector';
import AppFooter from './AppFooter';
import AppHeader from './AppHeader';

function App() {
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
      <AppHeader />
      <div className="card">
        <FileSelector className='File Selector' onUploadComplete={handleFileUploadResponse}></FileSelector>
      </div>
      <div className='card'>
        {channelNames.length > 0 && <ChannelSelector channelNames={channelNames} />}
      </div>
      <div>
        <AppFooter />
      </div>
    </>
  )
}

export default App
