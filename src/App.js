import React from "react";

import PokemonCustomizer from "./components/PokemonCustomizer";
import Pokedex from "./components/Pokedex";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

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
