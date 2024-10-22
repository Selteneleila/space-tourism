import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate("/destination");

    console.log("click");
  };

  return (
    <div className="home-container">
      <div className="home-content">
        <div className="text">
          <h2>So, you want to travel to</h2>
          <h1>Space</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="explore">
          <button className="explore-button" onClick={handleExploreClick}>
            explore
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
