import React from 'react';

const AppHeader = () => {
  return (
    <header style={headerStyle}>
      <h1 style={titleStyle}>Dewesoft Analyze</h1>
    </header>
  );
};

// Inline styles
const headerStyle = {
  position: 'absolute',    // Keeps the header fixed at the top
  top: 0,               // Aligns it to the top of the screen
  left: 0,              // Aligns it to the left edge of the screen
  width: '100%',        // Makes the header full width
  padding: '20px 0',
  textAlign: 'center',
  color: '#dddddd',            // White text
  zIndex: 1000,             // Ensures the header stays on top of other content
};

const titleStyle = {
  margin: 0,
  fontSize: '2.5em', // Adjust the size of the title as needed
};

export default AppHeader;
