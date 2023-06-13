import "./index.css";
import SearchBar from "../../Components/SearchBar";
import CardsGrid from "../../Components/CardsGrid";

const Home = ({ cardsData }) => {
  return (
    <div className="home">
      <SearchBar />
      <h2>
        <span>{cardsData.length}</span> Web Topics Found
      </h2>
      <CardsGrid cardsData={cardsData} />
    </div>
  );
};

export default Home;
