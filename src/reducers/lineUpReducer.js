const initialState = {
  pokemonLineUp: [],
  customizingPokemon: null,
};

const pokemonLineUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_POKEMON":
      return {
        ...state,
        pokemonLineUp: [...state.pokemonLineUp, action.payload],
      };
    case "REMOVE_POKEMON":
      return {
        ...state,
        pokemonLineUp: state.filter(
          (pokemon) => pokemon.name !== action.payload.name
        ),
      };
    case "LOAD_CUSTOMIZING_POKEMON":
      return {
        ...state,
        customizingPokemon: action.payload,
      };
    case "SAVE_NICK_NAME":
      return {
        ...state,
        pokemonLineUp: state.pokemonLineUp.map((pokemon) => {
          if (pokemon.name === action.payload.pokemon.name) {
            return { ...pokemon, nickname: action.payload.nickname };
          }
          return pokemon;
        }),
        customizingPokemon: {
          ...state.customizingPokemon,
          nickname: action.payload.nickname,
        },
      };
    case "SAVE_CUSTOMIZING_POKEMON":
      return {
        ...state,
        pokemonLineUp: state.pokemonLineUp.map((pokemon) => {
          if (pokemon.name === action.payload.pokemon.name) {
            return { ...pokemon, [action.payload.field]: action.payload.value };
          }
          return pokemon;
        }),
        customizingPokemon: {
          ...state.customizingPokemon,
          [action.payload.field]: action.payload.value,
        },
      };
    default:
      return state;
  }
};

export default pokemonLineUpReducer;
