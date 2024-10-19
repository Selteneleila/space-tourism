import React, { useState } from "react";
import "./Stepper.css";

function Stepper({ onStepChange }) {
  const [activeStep, setActiveStep] = useState(0);
  const steps = ["1", "2", "3"];

  const handleStepClick = (index) => {
    setActiveStep(index);
    onStepChange(index);
  };

  return (
    <div className="stepper-container">
      {steps.map((step, index) => (
        <button
          key={index}
          className={`stepper-btn ${
            activeStep === index ? "active" : "inactive"
          }`}
          onClick={() => handleStepClick(index)}
        >
          {step}
        </button>
      ))}
    </div>
  );
}

export default Stepper;
