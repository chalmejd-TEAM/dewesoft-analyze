import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Overview from './pages/Overview';
import WeightedMean from './pages/WeightedMean';
import PeakLocator from './pages/PeakLoacator';

import './App.css'
import './components/Header/Header.css';
import FileSelector from './components/FileSelector/FileSelector';
import ChannelSelector from './components/WeightedMean/ChannelSelector';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Formula from './components/WeightedMean/Formula';

function App() {
  return (
    
    <Router>
    <div style={{ display: "flex", height: "100vh", margin: "0" }}>
      {/* Sidebar */}
      <nav
        style={{
          width: "250px",
          background: "#282c34",
          color: "white",
          padding: "20px",
          position: "fixed", // Keeps the sidebar fixed to the left
          top: 0,
          left: 0,
          height: "100%", // Full height of the viewport
          boxSizing: "border-box", // Ensures padding doesn't affect width
        }}
      >
        <h2 style={{ marginBottom: "20px" } }className='gradient-text'>Dewesoft Analyze</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li style={{ marginBottom: "10px" }}>
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
              Overview
            </Link>
          </li>
          <li style={{ marginBottom: "10px" }}>
            <Link to="/weighted-mean" style={{ color: "white", textDecoration: "none" }}>
              Weighted Mean
            </Link>
          </li>
          <li style={{ marginBottom: "10px" }}>
            <Link to="/peak-locator" style={{ color: "white", textDecoration: "none" }}>
              Peak Locator
            </Link>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <div
        style={{
          marginLeft: "250px", // Offset content to the right of the fixed sidebar
          flex: 1,
          padding: "20px",
          // background: "#f4f4f4", // Light background to contrast with the sidebar
          boxSizing: "border-box",
          width: "calc(100% - 250px)", // Adjust width for responsive behavior
        }}
      >
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/weighted-mean" element={<WeightedMean />} />
          <Route path="/peak-locator" element={<PeakLocator />} />
        </Routes>
      </div>
    </div>
  </Router>
  )
}

export default App
