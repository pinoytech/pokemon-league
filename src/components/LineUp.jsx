import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removePokemonFromList,
  addPokemonToCustomizer,
} from "../actions/pokemonActions";

const LineUp = () => {
  const { pokemonLineUp } = useSelector((state) => state.lineUp);
  const dispatch = useDispatch();
  const removePokemon = (pokemon) => {
    dispatch(removePokemonFromList(pokemon));
  };

  const customizePokemon = (pokemon) => {
    dispatch(addPokemonToCustomizer(pokemon));
  };

  return (
    <>
      <div className="row">
        <div className="col align-items-center">
          <h3 className="align-items-center">Line Up</h3>
        </div>
      </div>
      <div className="row">
        {pokemonLineUp.map((pokemon, index) => (
          <div key={index} className="col">
            <img src={pokemon.image} alt={`${pokemon.name} pokemon`} />
            <br />
            <button
              className="btn btn-sm btn-warning"
              onClick={() => removePokemon(pokemon)}
            >
              Remove
            </button>
            <br />
            <button
              className="btn btn-sm btn-link"
              onClick={() => customizePokemon(pokemon)}
            >
              Customize
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default LineUp;
