import React from 'react';

const Triangle = () => {
  const triangleStyle = {
    width: '0',
    height: '0',
    borderLeft: '50px solid transparent',
    borderRight: '50px solid transparent',
    borderBottom: '86.6px solid #fff', // Height of the equilateral triangle
  };

  return (
    <div style={{
        width: '0',
        height: '0',
        marginTop:'5.123rem',
        borderLeft: '50px solid transparent',
        borderRight: '50px solid transparent',
        borderBottom: '86.6px solid #fff',
        transform:'rotate(90deg)'
    }}>
      {/* Your content goes here */}
    </div>
  );
};

export default Triangle;
