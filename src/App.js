import "./App.css";

import React from "react";

import PokemonCustomizer from "./components/PokemonCustomizer";
import Pokedex from "./components/Pokedex";

function App() {
  return (
    <div className="App container">
      <div className="row">
        <PokemonCustomizer />
        <Pokedex />
      </div>
    </div>
  );
}

export default App;
