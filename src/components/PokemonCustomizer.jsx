import React from "react";

import Customizer from "./Customizer";
import LineUp from "./LineUp";

const PokemonCustomizer = () => {
  return (
    <div className="col-12 order-2 order-lg-1 col-md-6 mt-5">
      <div className="card bg-white">
        <div className="card-body">
          <LineUp />
          <Customizer />
        </div>
      </div>
    </div>
  );
};

export default PokemonCustomizer;
