import axios from "axios";

export const getPokemon = (query) => async (dispatch) => {
  await axios
    .get(`https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`)
    .then((res) => {
      const {
        data: {
          id,
          description,
          name,
          types,
          sprites: { front_default },
          weight,
          height,
          abilities,
          moves,
        },
      } = res;

      dispatch({
        type: "SEARCH_POKEMON_SUCCESS",
        payload: {
          id,
          description,
          name,
          types,
          image: front_default,
          weight,
          height,
          moves,
          moveSet: [],
          abilities,
        },
      });
    })
    .catch((error) => {
      const errorMessage = error.message;

      dispatch({
        type: "SEARCH_POKEMON_FAIL",
        payload: errorMessage,
      });
    });
};

export const addPokemonToList = (pokemon) => (dispatch) => {
  if (pokemon.length === 6) {
    dispatch({ type: "TOO_MANY_POKEMON" });
  }
  dispatch({ type: "ADD_POKEMON", payload: pokemon });
};

export const removePokemonFromList = (pokemon) => {
  return { type: "REMOVE_POKEMON", payload: pokemon };
};

export const addPokemonToCustomizer = (pokemon) => {
  return { type: "LOAD_CUSTOMIZING_POKEMON", payload: pokemon };
};

export const changeCustomizingPokemon = (value, field, pokemon) => {
  return {
    type: "SAVE_CUSTOMIZING_POKEMON",
    payload: { pokemon, value, field },
  };
};

export const addMoveToSet = (pokemon, move) => (dispatch) => {
  if (pokemon.moveSet.length === 4) {
    return dispatch({
      type: "TOO_MANY_MOVES",
    });
  }
  if (pokemon.moveSet.includes(move)) {
    return dispatch({
      type: "SAME_MOVE",
    });
  }
  dispatch({
    type: "ADD_MOVE_TO_SET",
    payload: { pokemon, move },
  });
};

export const removeMoveFromSet = (pokemon, move) => {
  console.log("stuff");
  return {
    type: "REMOVE_MOVE_FROM_SET",
    payload: { pokemon, move },
  };
};
