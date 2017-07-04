export const INCREMENT_REQUESTED = "counter/INCREMENT_REQUESTED";
export const INCREMENT = "counter/INCREMENT";
export const DECREMENT_REQUESTED = "counter/DECREMENT_REQUESTED";
export const DECREMENT = "counter/DECREMENT";

//REDUCERS
//----------------
const initialState = {
  count: 0,
  isIncrementing: false,
  isDecrementing: false,
  season: 0,
  statistics: "highest-score"
};

export var seasonStatsReducer = (
  state = {season: 0, statistics: "highest-score"},
  action
) => {
  switch (action.type) {
    case "UPDATE_LEAGUE_SEASON":
      return {...state, season: action.season };
    case "UPDATE_LEAGUE_STATISTICS":
      return {...state, statistics: action.stat };
    default:
      return state;
  }
};

export var counter = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_REQUESTED:
      return {
        ...state,
        isIncrementing: true
      };

    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
        isIncrementing: !state.isIncrementing
      };

    case DECREMENT_REQUESTED:
      return {
        ...state,
        isDecrementing: true
      };

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
        isDecrementing: !state.isDecrementing
      };

    default:
      return state;
  }
};

//ACTIONS
//----------------

export const increment = () => {
  return dispatch => {
    dispatch({
      type: INCREMENT_REQUESTED
    });

    dispatch({
      type: INCREMENT
    });
  };
};

export const incrementAsync = () => {
  return dispatch => {
    dispatch({
      type: INCREMENT_REQUESTED
    });

    return setTimeout(() => {
      dispatch({
        type: INCREMENT
      });
    }, 3000);
  };
};

export const decrement = () => {
  return dispatch => {
    dispatch({
      type: DECREMENT_REQUESTED
    });

    dispatch({
      type: DECREMENT
    });
  };
};

export const decrementAsync = () => {
  return dispatch => {
    dispatch({
      type: DECREMENT_REQUESTED
    });

    return setTimeout(() => {
      dispatch({
        type: DECREMENT
      });
    }, 3000);
  };
};
