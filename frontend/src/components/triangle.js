import React from 'react';

const Triangle = () => {
  const triangleStyle = {
    width: '0',
    height: '0',
    borderLeft: '50px solid transparent',
    borderRight: '50px solid transparent',
    borderBottom: '90px solid #fff', // Height of the equilateral triangle
  };

  return (
    <div style={{
      position:'relative',
        width: 'auto',
        height: 'auto',
        zIndex:'-1',
       
        borderLeft: '3rem solid transparent',
        borderRight: '3rem solid transparent',
        borderBottom: '5rem solid #fff',
        transform:'rotate(90deg)' ,
        position:'absolute',
        top:'-2%',
        left:'-1%',
    }}>
      {/* Your content goes here */}
    </div>
  );
};

export default Triangle;
