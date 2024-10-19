import React from "react";
import CrewDetails from "../../components/crewDetails/CrewDetails";
import "./Crew.css";
import { useLocation } from "react-router-dom";

function Crew() {
  const location = useLocation();
  const sectionNumber = location.state?.number;

  return (
    <div className="crew-container">
      <h2>
        <span>{sectionNumber}</span> Meet our crew
      </h2>
      <CrewDetails />
    </div>
  );
}

export default Crew;
