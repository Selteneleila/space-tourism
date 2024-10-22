import React from "react";
import "./Stepper.css";

function Stepper({ activeStep, onStepChange }) {
  const steps = [1, 2, 3];

  const handleStepClick = (index) => {
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
