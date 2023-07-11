import { AiFillHeart } from "react-icons/ai";
import styles from "./index.module.css";
import { useContext } from "react";
import ThemeContext from "../../contexts/ThemeContext";

const Footer = () => {
  const theme = useContext(ThemeContext);

  return (
    <footer className={`${theme}`}>
      <span style={{ marginRight: "5px" }}>Developed with love</span>{" "}
      <AiFillHeart color="#dc143c" size={20} style={{ marginRight: "5px" }} />
      <span>© 2023</span>
    </footer>
  );
};

export default Footer;
