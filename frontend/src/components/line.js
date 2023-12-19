import React from 'react';

const VerticalLine = () => {
  const lineStyle = {
    height: '2px', // Adjust the height as needed
    width: '34%', // Full width of the container
    background: 'white',
    position: 'absolute',
    top: '54%', // Adjust the top position to move the line vertically
    left: '48%', // Align the left side of the line to the left of the container
    transform: 'translateY(-50%) rotate(90deg)', // Center the line vertically and rotate
    zIndex: '2',
  };

  return (
    <div style={lineStyle}>
      {/* Your content goes here */}
    </div>
  );
};

export default VerticalLine;
