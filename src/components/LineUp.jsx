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
          <h2 className="h4 text-uppercase font-weight-bold">Pokemon LineUp</h2>
        </div>
      </div>
      <div className="row">
        {pokemonLineUp.length === 0 && (
          <div>
            <p>Complete your Pokemon Lineup</p>
          </div>
        )}
        {pokemonLineUp.map((pokemon, index) => (
          <div key={index} className="col-4 col-xs-12 mb-2">
            <div className="card">
              <div className="card-body text-center">
                <p className="font-weight-bold">
                  {pokemon.name} <br />
                  {`#${pokemon.id}`}
                </p>
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
                  className="btn btn-link btn-sm"
                  onClick={() => customizePokemon(pokemon)}
                >
                  Customize
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default LineUp;
