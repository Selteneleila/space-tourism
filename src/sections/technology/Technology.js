import "./Technology.css";
import TechnologyDetails from "../../components/technologyDetails/TechnologyDetails";
import { useLocation } from "react-router-dom";

function Technology() {
  const location = useLocation();
  const sectionNumber = location.state?.number;

  return (
    <div className="technology-container">
      <h2>
        <span>{sectionNumber}</span> Space Launch 101
      </h2>
      <TechnologyDetails />
    </div>
  );
}

export default Technology;
