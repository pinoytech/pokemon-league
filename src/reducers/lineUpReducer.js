const initialState = {
  errorMessage: "",
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
    case "ADD_MOVE_TO_SET":
      return {
        ...state,
        errorMessage: "",
        pokemonLineUp: state.pokemonLineUp.map((pokemon) => {
          if (pokemon.name === action.payload.pokemon.name) {
            return {
              ...pokemon,
              moveSet: [...pokemon.moveSet, action.payload.move],
            };
          }
          return pokemon;
        }),
        customizingPokemon: {
          ...state.customizingPokemon,
          moveSet: [...state.customizingPokemon.moveSet, action.payload.move],
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
    case "TOO_MANY_MOVES":
      return {
        ...state,
        errorMessage: "You can only add 4 moves",
      };
    case "SAME_MOVE":
      return {
        ...state,
        errorMessage: "This move has already been added",
      };
    case "TOO_MANY_POKEMON":
      return {
        ...state,
        errorMessage: "You can only add 6 pokemon",
      };
    case "REMOVE_MOVE_FROM_SET":
      return {
        ...state,
        errorMessage: "",
        pokemonLineUp: state.pokemonLineUp.map((pokemon) => {
          if (pokemon.name === action.payload.pokemon.name) {
            return {
              ...pokemon,
              moveSet: pokemon.moveSet.filter(
                (move) => move !== action.payload.move
              ),
            };
          }
          return pokemon;
        }),
        customizingPokemon: {
          ...state.customizingPokemon,
          moveSet: state.customizingPokemon.moveSet.filter(
            (move) => move !== action.payload.move
          ),
        },
      };
    default:
      return state;
  }
};

export default pokemonLineUpReducer;
