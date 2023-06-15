import "./App.css";
import Home from "./Pages/Home";
import Details from "./Pages/Details";
import "./variables.css";
import TopSection from "./Components/TopSection";
import Header from "./Components/Header";
import CardsData from "./assets/CardsData";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Favourites from "./Components/Favourites";
import { useState } from "react";

function App() {
  const [favState, setFavState] = useState(false);
  return (
    <>
      <BrowserRouter>
        <Header setFavState={setFavState} />
        <TopSection />
        <Routes>
          <Route path="/" element={<Home cardsData={CardsData} />} />
          <Route path="/details" element={<Details />} />
        </Routes>
        <Favourites visibale={favState} />
      </BrowserRouter>
    </>
  );
}

export default App;
