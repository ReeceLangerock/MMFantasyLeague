import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {counter, seasonStatsReducer} from './counter'

export default combineReducers({
  routing: routerReducer,
  counter,
  seasonStatsReducer
})
