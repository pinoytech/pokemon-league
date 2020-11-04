const initialState = {
  pokemon: null,
  errorMessage: "",
};

const selectedReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH_POKEMON_SUCCESS":
      return {
        ...state,
        pokemon: action.payload,
        errorMessage: "",
      };
    case "SEARCH_POKEMON_FAIL":
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default selectedReducer;
