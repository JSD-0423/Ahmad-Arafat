import "./index.css";
import Rating from "../Rating";
import { Link } from "react-router-dom";

const TopicLinkCard = ({ rating, category, name, topic, image, id }) => {
  return (
    <Link to={`/details/${id}`}>
      <div className="card card-1">
        <div
          className="card-content"
          style={{
            backgroundImage: `url(${require(`../../assets/images/${image}`)})`,
          }}
        ></div>
        <div className="card-content">
          <h3 className="card-info">{category}</h3>
          <h4 className="card-info">{topic}</h4>
          <Rating className="card-info" rating={rating} size={15} />
          <h5 className="card-info">Author: {name}</h5>
        </div>
      </div>
    </Link>
  );
};

export default TopicLinkCard;
