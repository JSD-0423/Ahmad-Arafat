import "../../variables.css";
import "./index.css";

const IconButton = ({ icon, text }) => {
  return (
    <button className="icon-button">
      {icon}
      <label className="button-label">{text}</label>
    </button>
  );
};

export default IconButton;
