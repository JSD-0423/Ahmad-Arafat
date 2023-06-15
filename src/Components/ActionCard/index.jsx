import "./index.css";

const ActionCard = ({ parentStyles, Icon, id }) => {
  return (
    <div className={`action-card ${parentStyles}`}>
      <div
        className="action-card-content"
        style={{
          backgroundImage: `url(${require(`../../assets/images/html.png`)})`,
        }}
      ></div>
      <div className="action-card-content">
        <h4 className="action-card-info">HTML</h4>{" "}
        <span className="action-card-info">by</span>{" "}
        <a className="action-card-info">Sarah Smith</a>
        <div className="action-card-info">
          <div>Intersted about this topic?</div>
          <button className="big-icon-button">
            <label>Add To Favourites</label>
            {Icon}
          </button>
          <h5>Unlimited Credits</h5>
        </div>
      </div>
    </div>
  );
};

export default ActionCard;
