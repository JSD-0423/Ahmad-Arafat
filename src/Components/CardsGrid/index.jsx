import "./index.css";
import LinkCard from "../LinkCard";

const CardsGrid = ({ cardsData }) => {
  return (
    <main className="cards-grid">
      {cardsData.map((obj) => {
        return (
          <LinkCard
            rating={obj.rating}
            name={obj.name}
            category={obj.category}
            image={obj.image}
            topic={obj.topic}
            key={obj.id}
          />
        );
      })}
    </main>
  );
};

export default CardsGrid;
