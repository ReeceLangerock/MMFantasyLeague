import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { dataSelectionReducer, seasonStatsGenerationReducer, awardDataReducer, userStatsGenerationReducer } from "./reducers";

export default combineReducers({
  routing: routerReducer,
  seasonStatsGenerationReducer,
  userStatsGenerationReducer,
  dataSelectionReducer,
  awardDataReducer
});
