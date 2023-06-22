import "./App.css";
import Home from "./Pages/Home";
import Details from "./Pages/Details";
import "./variables.css";
import TopSection from "./Components/TopSection";
import Header from "./Components/Header";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Favourites from "./Components/Favourites";
import { Suspense, useEffect, useState } from "react";
import { GridLoader, PulseLoader } from "react-spinners";

function App() {
  const [favState, setFavState] = useState(false);
  const [favCards, setFavCards] = useState([]);

  useEffect(() => {
    console.log(favCards, "favCards");
  }, [favCards]);
  return (
    <BrowserRouter>
      <Header setFavState={setFavState} />
      <TopSection />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<GridLoader loading={true} />}>
              <Home />
            </Suspense>
          }
        />
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
  );
}

export default App;
