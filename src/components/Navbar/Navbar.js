import React, { useState } from "react";
import Logo from "../../assets/shared/logo.svg";
import BurgerIcon from "../../assets/shared/icon-hamburger.svg";
import "./Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  const sections = [
    { number: "00", label: "Home" },
    { number: "01", label: "Destination" },
    { number: "02", label: "Crew" },
    { number: "03", label: "Technology" },
  ];

  const getLinkPath = (section) => {
    if (section === "Home") return "/";
    return `/${section.toLowerCase()}`;
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav">
      <div className="logo">
        <img src={Logo} alt="logo" onClick={handleClick} />
      </div>
      {/* <div className="burger-icon" onClick={toggleMenu}>
        <img src={BurgerIcon} alt="menu icon" />
      </div> */}
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        {sections.map(({ number, label }) => (
          <NavLink
            key={label}
            to={getLinkPath(label)}
            state={{ number }}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={() => setIsOpen(false)} // Close menu on link click
          >
            <strong className="nav-number">{number}</strong>
            {label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
