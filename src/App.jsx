import { useState } from 'react'
import './App.css'
import FileSelector from './components/FileSelector/FileSelector';
import ChannelSelector from './components/WeightedMean/ChannelSelector';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Formula from './components/WeightedMean/Formula';

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
      <Header />
      <Formula />
      <div className="card">
        <FileSelector className='File Selector' onUploadComplete={handleFileUploadResponse}></FileSelector>
      </div>
      <div className='card'>
        {channelNames.length > 0 && <ChannelSelector channelNames={channelNames} />}
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}

export default App
