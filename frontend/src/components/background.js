import { React, useState, useEffect } from "react";
import "./background.css";

const Background = () => {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const squareSize = 30;
  const numColumns = Math.ceil(screenWidth / squareSize);
  const numRows = Math.ceil(screenHeight / squareSize);
  const renderGrid = () => {
    const grid = [];
    for (let row = 0; row < numRows; row++) {
      for (let col = 0; col < numColumns; col++) {
        const key = `${row}-${col}`;
        const style = {
          width: squareSize,
          height: squareSize,
        };
        grid.push(<div key={key} className="grid-square" style={style}></div>);
      }
    }
    return grid;
  };
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", updateMousePosition);

    return () => {
      document.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <div className="background-container">
      <div className="background-grid">
        {renderGrid()}
        <div
          className="black-overlay"
          style={{
            background: `radial-gradient(200px circle at ${
              mousePosition.x + 25
            }px ${
              mousePosition.y + 25
            }px, rgba(17,17,21,0.85) 0%, rgba(17,17,21,1) 100%)`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Background;
