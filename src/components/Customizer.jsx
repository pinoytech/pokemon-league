import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeCustomizingPokemon } from "../actions/pokemonActions";

const Customizer = () => {
  const { customizingPokemon } = useSelector((state) => state.lineUp);
  const dispatch = useDispatch();

  const handleChange = (event, field, pokemon) => {
    dispatch(changeCustomizingPokemon(event.target.value, field, pokemon));
  };

  return (
    <>
      <div className="row">
        <div className="col align-items-center">
          <h3 className="align-items-center">Customizer</h3>
        </div>
      </div>
      {customizingPokemon ? (
        <div className="row">
          <div className="col">
            <img
              src={customizingPokemon.image}
              alt={`${customizingPokemon.name}`}
            />
          </div>
          <div className="col">
            <div className="form-group">
              <label htmlFor="nickname">Nickname</label>
              <input
                value={customizingPokemon.nickname || ""}
                type="text"
                className="form-control"
                onChange={(event) =>
                  handleChange(event, "nickname", customizingPokemon)
                }
                id="nickname"
              />
            </div>
            <div className="form-group">
              <label htmlFor="favorite-color">Favorite color</label>
              <input
                value={customizingPokemon.color || ""}
                type="text"
                onChange={(event) =>
                  handleChange(event, "color", customizingPokemon)
                }
                className="form-control"
                id="favorite-color"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="row">
          <div className="col">
            Choose a pokemon from your lineup to customize
          </div>
        </div>
      )}
    </>
  );
};

export default Customizer;
