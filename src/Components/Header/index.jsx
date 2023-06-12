import "./index.css";
import "../../variables.css";
import IconButton from "../IconButton";

const Header = () => {
  return (
    <header>
      <h1>Web Topics</h1>
      <div className="icons">
        <IconButton />
        <IconButton />
      </div>
    </header>
  );
};

export default Header;
