import "./index.css";

const IconButton = ({ icon, text, clickAction }) => {
  return (
    <button
      onClick={() => {
        if (clickAction) clickAction();
      }}
      className="icon-button"
    >
      {icon}
      <label className="button-label">{text}</label>
    </button>
  );
};

export default IconButton;
