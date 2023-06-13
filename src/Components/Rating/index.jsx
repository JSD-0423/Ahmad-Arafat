import { IoStar } from "react-icons/io5";
import convertRatingToStars from "./convertRatingToStars";
import "./index.css";

const Rating = ({ rating, size }) => {
  return (
    <div className="rating card-info">
      {convertRatingToStars(rating).map((num) => (
        <IoStar size={size} className="star" key={num} />
      ))}
    </div>
  );
};

export default Rating;
