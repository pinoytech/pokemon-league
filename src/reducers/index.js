import selectedReducer from "./selectedReducer";
import lineUpReducer from "./lineUpReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  lineUp: lineUpReducer,
  selected: selectedReducer,
});

export default allReducers;
