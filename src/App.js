import "./App.css";
import Home from "./Pages/Home";
import "./variables.css";
import TopSection from "./Components/TopSection";
import Header from "./Components/Header";
import CardsData from "./assets/CardsData";

function App() {
  return (
    <>
      <Header />
      <TopSection />
      <Home cardsData={CardsData} />
    </>
  );
}

export default App;
