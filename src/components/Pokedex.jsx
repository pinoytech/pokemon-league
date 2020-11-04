import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPokemon, addPokemonToList } from "../actions/pokemonActions";

import typeColors from "../helpers/typeColors";

const Pokedex = () => {
  const { pokemon, errorMessage } = useSelector((state) => state.selected);
  const { pokemonLineUp } = useSelector((state) => state.lineUp);
  const dispatch = useDispatch();

  const [query, setQuery] = useState("");

  const onChange = (event) => {
    setQuery(event.target.value);
  };

  const searchPokemon = () => {
    if (query === "") return;
    dispatch(getPokemon(query));
    setQuery("");
  };

  const addPokemon = () => {
    if (pokemonLineUp.length === 6) return;
    dispatch(addPokemonToList(pokemon));
  };

  const inLineUp = pokemonLineUp.find((item) => pokemon.name === item.name);

  return (
    <div className="col-6 bg-white card mt-5">
      <div className="card-body">
        <h2 className="h4 text-uppercase font-weight-bold">Pokedex</h2>
        <div className="form-row align-items-center">
          <div className="col-10">
            <input
              placeholder="Search by name or number..."
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
            <div className="col-12 mt-5 text-center">
              <h4>{`${pokemon.name} #${pokemon.id}`}</h4>
            </div>
            <div className="col-12 text-center mb-2">
              <img
                className="img-thumbnail bg-light bigger-image"
                src={pokemon.image}
                alt={`${pokemon.name} pokemon`}
              />
            </div>
            <div className="col-12 text-center">
              {pokemon.types.map((type, index) => (
                <span
                  key={index}
                  className="btn btn-sm mr-2"
                  style={{
                    backgroundColor: typeColors[type.type.name],
                    color: "#FFF",
                  }}
                >
                  {type.type.name}
                </span>
              ))}
            </div>
            <div className="col-12 bg-info mt-5 card text-white">
              <div className="card-body">
                <div className="row">
                  <div className="col-6 text-left">
                    <h5 className="font-weight-bold">Weight & Height</h5>
                    <p className="text-dark">Weight: {pokemon.weight}</p>
                    <p className="text-dark">Height: {pokemon.height}</p>
                  </div>
                  <div className="col-6 text-left">
                    <h5 className="font-weight-bold">Abilities</h5>
                    {pokemon.abilities.map((ability, index) => (
                      <span key={index} className="text-dark">
                        {ability.ability.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 mt-3">
              {!inLineUp ? (
                <input
                  onClick={addPokemon}
                  type="submit"
                  className="btn btn-sm btn-block btn-primary"
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
    </div>
  );
};

export default Pokedex;
