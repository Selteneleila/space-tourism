import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import DestinationPicker from "../destinationPicker/DestinationPicker";
import data from "../../assets/data.json";
import "./Destination.css";

const Destination = () => {
  const location = useLocation();
  const sectionNumber = location.state?.number;
  console.log(sectionNumber);
  const [currentDestination, setCurrentDestination] = useState("Moon");

  const destinationData = data.destinations;
  const currentDest = destinationData.find(
    (destination) => destination.name === currentDestination
  );
  console.log(currentDestination.travel);
  return (
    <div className="destination-details">
      <div className="title-container">
        <h2>
          <span>{sectionNumber}</span> Pick Your Destination
        </h2>
      </div>
      <div className="content-container">
        <img
          src={currentDest.images.webp}
          alt={currentDest.name}
          className="planet-image"
        />
        <div className="text-content">
          <DestinationPicker
            currentDestination={currentDest}
            setCurrentDestination={setCurrentDestination}
          />
          <h2>{currentDest.name}</h2>
          <p>{currentDest.description}</p>
          <hr />
          <div className="stats">
            <div className="stat">
              <h3>Avg. Distance</h3>
              <p>{currentDest.distance}</p>
            </div>
            <div className="stat">
              <h3>Est. Travel Time</h3>
              <p>{currentDest.travel}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
