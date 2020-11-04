import React from "react";
import LineUp from "./LineUp";
import Customizer from "./Customizer";

const PokemonCustomizer = () => {
  return (
    <div className="col bg-white card mt-5">
      <div className="card-body">
        <LineUp />
        <Customizer />
      </div>
    </div>
  );
};

export default PokemonCustomizer;
