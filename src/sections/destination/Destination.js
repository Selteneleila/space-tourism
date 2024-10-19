import React from "react";
import "./Destination.css";
import DestinationDetails from "../../components/destinationDetails/DestinationDetails";
import { useLocation } from "react-router-dom";

function Destination() {
  const location = useLocation();
  const sectionNumber = location.state?.number;

  return (
    <div className="destination-container">
      <h2>
        <span>{sectionNumber}</span> Pick Your Destination
      </h2>
      <DestinationDetails />
    </div>
  );
}

export default Destination;
