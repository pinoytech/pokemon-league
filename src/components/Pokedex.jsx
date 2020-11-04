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
    <div className="col-12 order-1 order-lg-2 col-md-6 mt-5">
      <div className="card bg-white">
        <div className="card-body">
          <h2 className="h4 text-uppercase font-weight-bold">Pokedex</h2>
          <div className="form-row align-items-center">
            <div className="col-12 col-md-10">
              <input
                placeholder="Search by name or number..."
                type="text"
                onChange={onChange}
                value={query}
                className="form-control mb-2"
              />
            </div>
            <div className="col-12 col-md-2">
              <input
                type="submit"
                value="Search"
                className="btn btn-block btn-primary mb-2"
                onClick={searchPokemon}
              />
            </div>
          </div>
          {errorMessage && (
            <div className="row mt-2">
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
                  className="bg-light"
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
              <div className="col-12 mt-5 text-white">
                <div className="card bg-info">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-6 text-left">
                        <h5 className="font-weight-bold">Weight & Height</h5>
                        <p className="text-light">
                          <strong>Weight:</strong>{" "}
                          {parseInt(pokemon.weight) / 10} kgs
                        </p>
                        <p className="text-light">
                          <strong>Height:</strong>{" "}
                          {parseInt(pokemon.height) / 10} meters
                        </p>
                      </div>
                      <div className="col-6 text-left">
                        <h5 className="font-weight-bold">Abilities</h5>
                        {pokemon.abilities.map((ability, index) => (
                          <span
                            key={index}
                            className="btn btn-warning btn-sm mb-2 default-pointer mr-2 text-dark"
                          >
                            {ability.ability.name}
                          </span>
                        ))}
                      </div>
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
                  <span className="btn btn-block btn-success">
                    This pokemon is in your lineup!
                  </span>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Pokedex;
