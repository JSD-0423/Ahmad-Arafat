import "./index.css";
import IconButton from "../IconButton";
import { IoMoonOutline } from "react-icons/io5";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import ThemeContext from "../../contexts/ThemeContext";

const Header = ({ setFavState, setTheme }) => {
  const theme = useContext(ThemeContext);

  const themeButtonHandler = () => {
    setTheme((prevState) => {
      let theme;
      if (prevState === "light") theme = "dark";
      else theme = "light";
      return theme;
    });
  };

  const favButtonHandler = () => {
    setFavState((prevState) => !prevState);
  };

  return (
    <header className={`${theme}`}>
      <Link to={"/"}>
        <h1>Web Topics</h1>
      </Link>
      <div className="icons">
        <IconButton
          icon={
            <IoMoonOutline
              size={"15"}
              color={theme === "light" ? "#333333" : "#ededed"}
            />
          }
          text={
            window.innerWidth >= 900
              ? theme === "dark"
                ? "Light Mode"
                : "Dark Mode"
              : null
          }
          clickAction={themeButtonHandler}
        />
        <IconButton
          icon={
            <AiOutlineHeart
              size={"15"}
              color={theme === "light" ? "#333333" : "#ededed"}
            />
          }
          text={"Favourites"}
          clickAction={favButtonHandler}
        />
      </div>
    </header>
  );
};

export default Header;
