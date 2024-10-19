import React from "react";
import "./DestinationPicker.css";

function DestinationPicker({ currentDestination, setCurrentDestination }) {
  const destinations = ["Moon", "Mars", "Europa", "Titan"];

  return (
    <div className="destination-picker">
      {destinations.map((destination, index) => (
        <button
          key={index}
          className={`tab-button ${
            currentDestination === destination ? "active" : ""
          }`}
          onClick={() => setCurrentDestination(destination)}
        >
          {destination}
        </button>
      ))}
    </div>
  );
}

export default DestinationPicker;
