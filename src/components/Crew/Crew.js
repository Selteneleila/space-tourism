import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import data from "../../assets/data.json";
import Indicator from "../Indicators/Indicator";
import "./Crew.css";

const Crew = () => {
  const location = useLocation();
  const sectionNumber = location.state?.number;

  const crewData = data.crew;

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const currentCrew = crewData[currentIndex];

  return (
    <div className="crew-details">
      <div className="title-container">
        <h2>
          <span>{sectionNumber}</span> Meet our crew
        </h2>
      </div>
      <div className="crew-content">
        <div className="crew-info">
          <h2>{currentCrew.role}</h2>
          <h3>{currentCrew.name}</h3>
          <p>{currentCrew.bio}</p>
          <Indicator
            totalDots={crewData.length}
            currentIndex={currentIndex}
            onDotClick={goToSlide}
          />
        </div>
        <img
          className="crew-img"
          src={currentCrew.images.webp}
          alt={currentCrew.name}
        />
      </div>
    </div>
  );
};

export default Crew;
