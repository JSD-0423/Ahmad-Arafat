import "./App.css";
import Home from "./Pages/Home";
import Details from "./Pages/Details";
import "./variables.css";
import TopSection from "./Components/TopSection";
import Header from "./Components/Header";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Favourites from "./Components/Favourites";
import { useState } from "react";
import { createContext } from "react";

function App() {
  const [favState, setFavState] = useState(false);
  const [favCards, setFavCards] = useState(null);

  return (
    // <ThemeContext.Provider value={theme}>
    <BrowserRouter basename="/Ahmad-Arafat-project-1">
      <Header setFavState={setFavState} />
      <TopSection />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/details/:id"
          element={<Details setFavCards={setFavCards} favCards={favCards} />}
        />
      </Routes>
      <Favourites
        cardsData={favCards}
        visibale={favState}
        setFavCards={setFavCards}
      />
    </BrowserRouter>
    // </ThemeContext.Provider>
  );
}

export default App;
