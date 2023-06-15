import Rating from "../../Components/Rating";
import ActionCard from "../../Components/ActionCard";
import "./index.css";
import styles from "./card.module.css";
import { AiOutlineHeart } from "react-icons/ai";

const Details = () => {
  return (
    <main className="details">
      <div className="details-main-content">
        <h3>Web Development Languages</h3>
        <h2>HTML</h2>
        <Rating className="rating" size={17} rating={5} />
        <p>
          HTML (Hypertext Markup Language) is the standard markup language for
          creating web pages and other information that can be displayed in a
          web browser. It provides a structure for content and defines how it
          should be displayed on a web page, including text, images, and
          multimedia. HTML is essential for creating static web pages and is a
          foundational technology for the World Wide Web.
        </p>
      </div>
      <ActionCard
        parentStyles={styles.card}
        Icon={<AiOutlineHeart size={30} color={"#ededed"} />}
      />
      <table>
        <tr>
          <td>
            <span></span>Sub Topics
          </td>
        </tr>
        <tr>
          <td>hgd</td>
        </tr>
        <tr>
          <td>hdg</td>
        </tr>

        <tr>
          <td>hdg</td>
        </tr>
        <tr>
          <td>hdg</td>
        </tr>
        <tr>
          <td>hffg</td>
        </tr>
        <tr>
          <td>hds</td>
        </tr>
      </table>
    </main>
  );
};

export default Details;
