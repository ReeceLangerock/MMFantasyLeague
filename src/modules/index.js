import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import {
  counter,
  seasonStatsReducer,
  seasonStatsGenerationReducer,
  awardDataReducer
} from "./counter";

export default combineReducers({
  routing: routerReducer,
  counter,
  seasonStatsReducer,
  seasonStatsGenerationReducer,
  awardDataReducer
});
