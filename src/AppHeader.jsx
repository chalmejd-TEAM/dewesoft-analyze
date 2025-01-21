import React from 'react';
import './AppHeader.css';

const AppHeader = () => {
  return (
      <header style={headerStyle}>
        <h1 className='gradient-text'>Dewesoft Analyze</h1>
      </header>
  );
};

// Inline styles
const headerStyle = {
  // position: 'absolute',    // Keeps the header fixed at the top
  top: 0,               // Aligns it to the top of the screen
  left: 0,              // Aligns it to the left edge of the screen
  width: '100%',        // Makes the header full width
  padding: '25px 0',
  textAlign: 'center',
  color: '#dddddd',            // White text
  zIndex: 1000,             // Ensures the header stays on top of other content
};

export default AppHeader;
