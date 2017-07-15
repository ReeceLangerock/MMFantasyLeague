import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import {
  counter,
  seasonStatsReducer,
  seasonStatsGenerationReducer,
  awardDataReducer,
  userStatsGenerationReducer,
  userStatsReducer

} from "./counter";

export default combineReducers({
  routing: routerReducer,
  counter,
  seasonStatsReducer,
  seasonStatsGenerationReducer,
  userStatsGenerationReducer,
  userStatsReducer,
  awardDataReducer
});
