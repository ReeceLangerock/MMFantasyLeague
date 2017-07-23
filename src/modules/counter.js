import awardData from "./../data/awardData.json";

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
  statistics: "highestScore"
};

export var seasonStatsReducer = (state = { season: 0, statistics: "highestScore" }, action) => {
  switch (action.type) {
    case "UPDATE_LEAGUE_SEASON":
      return { ...state, season: action.season };
    case "UPDATE_LEAGUE_STATISTICS":
      return { ...state, statistics: action.stat };
    default:
      return state;
  }
};

export var awardDataReducer = (state = { awardData, trophy: "Champion" }, action) => {
  switch (action.type) {
    case "UPDATE_TROPHY":
      return { ...state, trophy: action.trophy };
    default:
      return state;
  }
};

export var seasonStatsGenerationReducer = (state = { isGenerating: false, data: {} }, action) => {
  switch (action.type) {
    case "TOGGLE_ISGENERATING_LEAGUE_STATISTICS":
      return { ...state, isGenerating: !state.isGenerating };

    case "GENERATE_LEAGUE_STATISTICS":
      return { ...state, data: action.data };

    default:
      return state;
  }
};

export var userStatsGenerationReducer = (state = { isGenerating: false, data: {} }, action) => {
  switch (action.type) {
    case "TOGGLE_ISGENERATING_USER_STATISTICS":
      return { ...state, isGenerating: !state.isGenerating };

    case "GENERATE_USER_STATISTICS":
      return { ...state, data: action.data };

    default:
      return state;
  }
};

export var userStatsReducer = (state = { statistics: "wins", seasons: [0,1,2,3,4], users: ['Ryan Coxe', 'Kevin Dobkin', 'Jason Knaak', 'JD Langefeld', 'Reece Langerock' , 'Jimmy Ouska',
'Sean Quill', 'Matt Reschke', 'Bryan Steger', 'Mike Unverricht', 'Trey Ward', 'Alex Warner'] }, action) => {

  switch (action.type) {
    case "UPDATE_USER_STATISTICS":
      return { ...state, statistics: action.stat };
      case "UPDATE_USER_SEASONS":
        return { ...state, seasons: action.seasons };
      case "UPDATE_USER_USERS":
        return {...state, users: action.users}
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
