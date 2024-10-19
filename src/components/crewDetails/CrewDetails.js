import React, { useState } from "react";
import CommanderImg from "../../assets/crew/image-douglas-hurley.png";
import SpecialistImg from "../../assets/crew/image-mark-shuttleworth.png";
import PilotImg from "../../assets/crew/image-victor-glover.png";
import EngineerImg from "../../assets/crew/image-anousheh-ansari.png";
import "./CrewDetails.css";
import Indicator from "../indicators/Indicator";

const CrewData = {
  Commander: {
    position: "Commander",
    name: "Douglas Hurley",
    description:
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    image: CommanderImg,
  },
  MissionSpecialist: {
    position: "Mission Specialist",
    name: "Mark Shuttleworth",
    description:
      "Mark Shuttleworth Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    image: SpecialistImg,
  },
  Pilot: {
    position: "Pilot",
    name: "Victor Glover",
    description:
      " Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    image: PilotImg,
  },
  Engineer: {
    position: "FLight Engineer",
    name: "Anousheh Ansari",
    description:
      "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    image: EngineerImg,
  },
};
const CrewDetails = () => {
  const crewMembers = Object.values(CrewData);
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <div className="crew-details">
        <div className="crew-info">
          <h2>{crewMembers[currentIndex].position}</h2>
          <h3>{crewMembers[currentIndex].name}</h3>
          <p>{crewMembers[currentIndex].description}</p>
          <Indicator
            totalDots={crewMembers.length}
            currentIndex={currentIndex}
            onDotClick={goToSlide}
          />
        </div>
        <img
          className="crew-img"
          src={crewMembers[currentIndex].image}
          alt={crewMembers[currentIndex].name}
        />
      </div>
    </>
  );
};

export default CrewDetails;
