import { combineReducers } from "redux";

import selectedReducer from "./selectedReducer";
import lineUpReducer from "./lineUpReducer";

const allReducers = combineReducers({
  lineUp: lineUpReducer,
  selected: selectedReducer,
});

export default allReducers;
