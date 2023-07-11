import "./index.css";
import { useContext } from "react";
import ThemeContext from "../../contexts/ThemeContext";

const TopSection = () => {
  const theme = useContext(ThemeContext);
  return (
    <section className={`top-section ${theme}`}>
      <div className="colorful-bar">
        <div className="left-colorful-bar"></div>
        <div className="right-colorful-bar"></div>
      </div>
      <div className="welcome">
        <h6>Welcome to our website!</h6>
        <p>We have a new design that's fresh, modern, and easy to use</p>
      </div>
    </section>
  );
};

export default TopSection;
