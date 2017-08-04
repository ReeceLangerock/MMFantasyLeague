import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { h2hDataReducer,h2hStatsGenerationReducer,dataSelectionReducer, seasonStatsGenerationReducer, awardDataReducer, userStatsGenerationReducer } from "./reducers";

export default combineReducers({
  routing: routerReducer,
  seasonStatsGenerationReducer,
  userStatsGenerationReducer,
  dataSelectionReducer,
  awardDataReducer,
  h2hDataReducer,
  h2hStatsGenerationReducer
});
