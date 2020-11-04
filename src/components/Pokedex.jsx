import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPokemon, addPokemonToList } from "../actions/pokemonActions";

import typeColors from "../helpers/typeColors";

const Pokedex = () => {
  const { pokemon, errorMessage } = useSelector((state) => state.selected);
  const { pokemonLineUp } = useSelector((state) => state.lineUp);
  console.log(pokemonLineUp);
  const dispatch = useDispatch();

  const [query, setQuery] = useState("");

  const onChange = (event) => {
    setQuery(event.target.value);
  };

  const searchPokemon = () => {
    if (query === "") return;
    dispatch(getPokemon(query));
    // getPokemon(dispatch, query);
    setQuery("");
  };

  const addPokemon = () => {
    if (pokemonLineUp.length === 6) return;
    dispatch(addPokemonToList(pokemon));
  };

  const inLineUp = pokemonLineUp.find((item) => pokemon.name === item.name);

  return (
    <div className="col-6">
      <h2>Pokedex</h2>
      <div className="form-row align-items-center">
        <div className="col-10">
          <input
            type="text"
            onChange={onChange}
            value={query}
            className="form-control"
          />
        </div>
        <div className="col-2">
          <input
            type="submit"
            value="Search"
            className="btn btn-primary"
            onClick={searchPokemon}
          />
        </div>
      </div>
      {errorMessage && (
        <div className="row">
          <div className="col-12 alert alert-danger">{errorMessage}</div>
        </div>
      )}
      {pokemon && (
        <div className="row">
          <div className="col-12 align-items-center">
            <img src={pokemon.image} alt={`${pokemon.name} pokemon`} />
          </div>
          <div className="col-12">
            {pokemon.types.map((type, index) => (
              <span
                key={index}
                className="btn"
                style={{
                  backgroundColor: typeColors[type.type.name],
                  color: "#FFF",
                }}
              >
                {type.type.name}
              </span>
            ))}
          </div>
          <div className="col-6">
            <h3>Weight & Height</h3>
            <p>Weight: {pokemon.weight}</p>
            <p>Height: {pokemon.height}</p>
          </div>
          <div className="col-6">
            <h3>Abilities</h3>
            {pokemon.abilities.map((ability, index) => (
              <span key={index} className="btn">
                {ability.ability.name}
              </span>
            ))}
          </div>
          <div className="col-12">
            {!inLineUp ? (
              <input
                onClick={addPokemon}
                type="submit"
                className="btn btn-primary"
                value="Add to LineUp"
              />
            ) : (
              <span className="btn btn-success">
                This pokemon is in your lineup!
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Pokedex;
