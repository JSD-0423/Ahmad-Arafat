import "./index.css";
import IconButton from "../IconButton";
import { IoMoonOutline } from "react-icons/io5";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = ({ setFavState }) => {
  return (
    <header>
      <Link to={"/"}>
        <h1>Web Topics</h1>
      </Link>
      <div className="icons">
        <IconButton
          icon={<IoMoonOutline size={"15"} color="#333333" />}
          text={"Dark Mode"}
        />
        <IconButton
          icon={<AiOutlineHeart size={"15"} color="#333333" />}
          text={"Favourites"}
          clickAction={setFavState}
        />
      </div>
    </header>
  );
};

export default Header;
