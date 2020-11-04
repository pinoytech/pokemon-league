import axios from "axios";

export const getPokemon = (query) => async (dispatch) => {
  await axios
    .get(`https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`)
    .then((res) => {
      const {
        data: {
          name,
          types,
          sprites: { front_default },
          weight,
          height,
          abilities,
        },
      } = res;

      dispatch({
        type: "SEARCH_POKEMON_SUCCESS",
        payload: {
          name,
          types,
          image: front_default,
          weight,
          height,
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

export const addPokemonToList = (pokemon) => {
  return { type: "ADD_POKEMON", payload: pokemon };
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
