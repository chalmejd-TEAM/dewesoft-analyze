import React from 'react';

const AppFooter = () => {
  return (
    <footer style={footerStyle}>
      <p style={textStyle}>
        Created by <strong>Jacob Chalmers </strong> 
        | <a href="https://github.com/chalmejd-TEAM/dewesoft-analyze" target="_blank" rel="noopener noreferrer">GitHub - Front End </a>
        | <a href="https://github.com/chalmejd-TEAM/dewesoft-analyze-server" target="_blank" rel="noopener noreferrer">GitHub - Back End </a>
      </p>
    </footer>
  );
};

// Inline styles
const footerStyle = {
  position: 'fixed',
  bottom: 0,
  left: 0,
  width: '98%',
  textAlign: 'right',
  padding: '10px 5px',
  backgroundColor: 'transparent', // Transparent background
};

const textStyle = {
  fontSize: '12px',
  color: '#555',
  margin: 0,
};

export default AppFooter;
