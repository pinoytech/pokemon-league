import React from "react";

import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import PokemonCustomizer from "./components/PokemonCustomizer";
import Pokedex from "./components/Pokedex";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="row">
          <PokemonCustomizer />
          <Pokedex />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
