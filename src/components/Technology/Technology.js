import React, { useEffect, useState } from "react";
import "./Technology.css";
import Stepper from "../Stepper/Stepper";
import { useLocation } from "react-router-dom";
import data from "../../assets/data.json";

const Technology = () => {
  const location = useLocation();
  const sectionNumber = location.state?.number;

  const [activeStep, setActiveStep] = useState(0);
  const technologyData = data.technology;
  const [currentTech, setCurrentTech] = useState(technologyData[0]);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth <= 1024);
  };

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const technologyKeys = Object.keys(technologyData);
    const current = technologyData[technologyKeys[activeStep]];
    setCurrentTech(current);
  }, [activeStep]);

  return (
    <div className="technology-details">
      <div className="title-container">
        <h2>
          <span>{sectionNumber}</span> Space Launch 101
        </h2>
      </div>
      <div className="technology-content">
        <div className="stepper-container">
          <Stepper activeStep={activeStep} onStepChange={setActiveStep} />
        </div>

        <div className="technology-item">
          <h3>The terminology.. </h3>
          <h2>{currentTech.name}</h2>
          <p>{currentTech.description}</p>
        </div>
        <div className="technology-img">
          <img
            src={
              isSmallScreen
                ? currentTech.images.landscape
                : currentTech.images.portrait
            }
            alt={currentTech.alt}
          />
        </div>
      </div>
    </div>
  );
};

export default Technology;
