import React from "react";
import LineUp from "./LineUp";
import Customizer from "./Customizer";

const PokemonCustomizer = () => {
  return (
    <div className="col-6">
      <LineUp />
      <Customizer />
    </div>
  );
};

export default PokemonCustomizer;
