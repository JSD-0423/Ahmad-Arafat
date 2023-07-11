import "./App.css";
import Home from "./Pages/Home";
import Details from "./Pages/Details";
import "./variables.css";
import TopSection from "./Components/TopSection";
import Header from "./Components/Header";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Favourites from "./Components/Favourites";
import { useState } from "react";
import ThemeContext from "./contexts/ThemeContext";
import Footer from "./Components/Footer";

function App() {
  const [favState, setFavState] = useState(false);
  const [favCards, setFavCards] = useState(null);
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={theme}>
      <BrowserRouter basename="/Ahmad-Arafat-project-1">
        <Header setFavState={setFavState} setTheme={setTheme} />
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
        <Footer />
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
