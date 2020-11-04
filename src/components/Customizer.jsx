import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { GithubPicker } from "react-color";
import {
  changeCustomizingPokemon,
  addMoveToSet,
  removeMoveFromSet,
} from "../actions/pokemonActions";
import styled from "styled-components";

const MovesContainer = styled.div`
  overflow-y: scroll;
  height: 400px;
`;

const MovesContainerList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  li {
    margin-bottom: 5px;
  }
`;

const Move = styled.span`
  text-transform: "capitalize"
  margin-right: 2px;
`;

const Customizer = () => {
  const { customizingPokemon, errorMessage } = useSelector(
    (state) => state.lineUp
  );
  const dispatch = useDispatch();

  const handleChange = (event, field, pokemon) => {
    dispatch(changeCustomizingPokemon(event.target.value, field, pokemon));
  };

  const handleColorChange = (color) => {
    dispatch(changeCustomizingPokemon(color.hex, "color", customizingPokemon));
  };

  const addMoves = (pokemon, move) => {
    dispatch(addMoveToSet(pokemon, move));
  };

  const removeMove = (pokemon, move) => {
    dispatch(removeMoveFromSet(pokemon, move));
  };
  return (
    <>
      <div className="row bg mt-2">
        <div className="col align-items-center">
          <h2 className="h4 text-uppercase font-weight-bold">Customizer</h2>
        </div>
      </div>
      {errorMessage && (
        <div className="row">
          <div className="col">
            <div className="alert alert-danger">{errorMessage}</div>
          </div>
        </div>
      )}
      {customizingPokemon ? (
        <>
          <div className="row mb-2">
            <div className="col">
              <div
                className="d-flex flex-column text-center align-items-center justify-content-center"
                style={{
                  backgroundColor: customizingPokemon.color,
                  width: "100%",
                  height: "100%",
                }}
              >
                <img
                  src={customizingPokemon.image}
                  alt={`${customizingPokemon.name}`}
                />
                <br />
                <p className="font-weight-bold">{`${customizingPokemon.name} #${customizingPokemon.id}`}</p>
              </div>
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
                  readOnly
                  value={customizingPokemon.color || ""}
                  type="text"
                  onChange={(event) =>
                    handleChange(event, "color", customizingPokemon)
                  }
                  className="form-control"
                  id="favorite-color"
                />
                <br />
                <GithubPicker onChangeComplete={handleColorChange} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h3 className="h5 text-uppercase font-weight-bold">Move set</h3>
              {customizingPokemon.moveSet.length === 0 && (
                <p>Choose from the moves below to add to your move set</p>
              )}
              {customizingPokemon.moveSet.map((move, index) => (
                <span
                  className="btn btn-sm btn-warning mr-2 mb-2 default-pointer"
                  key={index}
                >
                  <button
                    type="button"
                    className="close"
                    aria-label="Close"
                    onClick={() => removeMove(customizingPokemon, move)}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                  {move.replace("-", " ")}
                </span>
              ))}
            </div>
          </div>
          <div className="row mt-2">
            <div className="col">
              <h3 className="h5 text-uppercase font-weight-bold">Move pool</h3>
            </div>
          </div>
          <div className="row">
            <MovesContainer className="col">
              <MovesContainerList className="bg-light p-2">
                {customizingPokemon.moves.map(({ move }, index) => {
                  return (
                    <li key={index}>
                      <Move className="btn btn-warning">
                        {move.name.replace("-", " ")}
                      </Move>
                      <span
                        className="btn btn-link btn-sm"
                        onClick={() => addMoves(customizingPokemon, move.name)}
                      >
                        Add to Move Set
                      </span>
                    </li>
                  );
                })}
              </MovesContainerList>
            </MovesContainer>
          </div>
        </>
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
