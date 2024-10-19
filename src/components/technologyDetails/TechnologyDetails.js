import React, { useEffect, useState } from "react";
import VehicleImg from "../../assets/technology/image-launch-vehicle-portrait.jpg";
import VehicleImgSmall from "../../assets/technology/image-launch-vehicle-landscape.jpg";
import SpaceportImg from "../../assets/technology/image-spaceport-portrait.jpg";
import SpaceportImgSmall from "../../assets/technology/image-spaceport-landscape.jpg";
import CapsuleImg from "../../assets/technology/image-space-capsule-portrait.jpg";
import CapsuleImgSmall from "../../assets/technology/image-space-capsule-landscape.jpg";
import "./TechnologyDetails.css";
import Stepper from "../stepper/Stepper";

const TechnologyDetails = () => {
  const [activeStep, setActiveStep] = useState(0);
  const technologyData = {
    Vehicle: {
      title: "Launch Vehicle",
      description:
        "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
      image: VehicleImg,
      imageSmall: VehicleImgSmall,
      alt: "launch vehicle image",
    },
    Spaceport: {
      title: "Spaceport",
      description:
        "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
      image: SpaceportImg,
      imageSmall: SpaceportImgSmall,
      alt: "spaceport image",
    },
    Capsule: {
      title: "Space Capsule",
      description:
        "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
      image: CapsuleImg,
      imageSmall: CapsuleImgSmall,
      alt: "capsule image ",
    },
  };

  const technologyKeys = Object.keys(technologyData);
  const currentTech = technologyData[technologyKeys[activeStep]];

  const [currentImage, setCurrentImage] = useState(currentTech.image);

  const handleResize = () => {
    if (window.innerWidth <= 1024) {
      setCurrentImage(currentTech.imageSmall);
    } else {
      setCurrentImage(currentTech.image);
    }
  };

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="technology-details">
      <div className="technology-img">
        <img src={currentImage} alt={currentTech.alt} />
      </div>{" "}
      <div className="stepper-container">
        <Stepper onStepChange={setActiveStep} />
      </div>
      <div className="technology-item">
        <h3>The terminology.. </h3>
        <h2>{currentTech.title}</h2>
        <p>{currentTech.description}</p>
      </div>
    </div>
  );
};

export default TechnologyDetails;
