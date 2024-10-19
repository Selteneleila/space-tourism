import React, { useState } from "react";
import MoonImg from "../../assets/destination/image-moon.png";
import MarsImg from "../../assets/destination/image-mars.png";
import EuropaImg from "../../assets/destination/image-europa.png";
import TitanImg from "../../assets/destination/image-titan.png";
import "./DestinationDetails.css";
import DestinationPicker from "../destinationPicker/DestinationPicker";

const DestinationDetails = () => {
  const [currentDestination, setCurrentDestination] = useState("Moon");

  const destinationData = {
    Moon: {
      name: "Moon",
      description:
        "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      distance: "384,400 KM",
      travelTime: "3 Days",
      image: MoonImg,
    },
    Mars: {
      name: "Mars",
      description:
        "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest! ",
      distance: "225 mil. km",
      travelTime: "9 months",
      image: MarsImg,
    },
    Europa: {
      name: "Europa",
      description:
        "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin. ",
      distance: "628 mil. km",
      travelTime: "3 years",
      image: EuropaImg,
    },
    Titan: {
      name: "Titan",
      description:
        "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      distance: "1.6 bil. km",
      travelTime: "7 years",
      image: TitanImg,
    },
  };

  const { name, description, distance, travelTime, image } =
    destinationData[currentDestination];

  return (
    <section className="destination-details">
      <div className="image-container">
        <img src={image} alt={name} className="planet-image" />
      </div>
      <div className="text-content">
        <DestinationPicker
          currentDestination={currentDestination}
          setCurrentDestination={setCurrentDestination}
        />
        <h2>{name}</h2>
        <p>{description}</p>
        <hr />
        <div className="stats">
          <div className="stat">
            <h3>Avg. Distance</h3>
            <p>{distance}</p>
          </div>
          <div className="stat">
            <h3>Est. Travel Time</h3>
            <p>{travelTime}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DestinationDetails;
