import "./index.css";
import IconButton from "../IconButton";
import { IoMoonOutline } from "react-icons/io5";
import { AiOutlineHeart } from "react-icons/ai";

const Header = () => {
  return (
    <header>
      <h1>Web Topics</h1>
      <div className="icons">
        <IconButton
          icon={<IoMoonOutline size={"15"} color="#333333" />}
          text={"Dark Mode"}
        />
        <IconButton
          icon={<AiOutlineHeart size={"15"} color="#333333" />}
          text={"Favourites"}
        />
      </div>
    </header>
  );
};

export default Header;
