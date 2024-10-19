import React from "react";
import "./Indicator.css";

function Indicator({ totalDots, currentIndex, onDotClick }) {
  return (
    <div className="dots-indicator">
      {Array.from({ length: totalDots }, (_, index) => (
        <span
          key={index}
          className={`dot ${currentIndex === index ? "active" : ""}`}
          onClick={() => onDotClick(index)} // Call the click handler for the dot
        />
      ))}
    </div>
  );
}

export default Indicator;
