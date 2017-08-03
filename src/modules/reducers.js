import awardData from "./../data/awardData.json";

//REDUCERS
//----------------
export var dataSelectionReducer = (
  state = {
    leagueDataStatSelected: "highestScore",
    leagueDataSeasonSelected: 4,
    userDataStatSelected: "wins",
    userDataSeasonsSelected: [4, 3, 2, 1, 0],
    userDataUsersSelected: [
      "Ryan Coxe",
      "Kevin Dobkin",
      "Jason Knaak",
      "JD Langefeld",
      "Reece Langerock",
      "Jimmy Ouska",
      "Sean Quill",
      "Matt Reschke",
      "Bryan Steger",
      "Mike Unverricht",
      "Trey Ward",
      "Alex Warner"
    ],
    regularOrPlayoffsSelected: [true, false]
  },
  action
) => {
  switch (action.type) {
    case "UPDATE_LEAGUE_SEASON_SELECTED":
      return { ...state, leagueDataSeasonSelected: action.leagueDataSeasonSelected };
    case "UPDATE_LEAGUE_STATISTIC_SELECTED":
      return { ...state, leagueDataStatSelected: action.leagueDataStatSelected };

    case "UPDATE_USER_STATISTIC_SELECTED":
      return { ...state, userDataStatSelected: action.userDataStatSelected };
    case "UPDATE_USER_SEASONS_SELECTED":
      return { ...state, userDataSeasonsSelected: action.userDataSeasonsSelected };
    case "UPDATE_USER_DATA_USERS_SELECTED":
      return { ...state, userDataUsersSelected: action.userDataUsersSelected };
    case "SET_REGULAR_OR_PLAYOFF_SELECTED":
      return { ...state, regularOrPlayoffsSelected: action.regularOrPlayoffsSelected };
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

export var seasonStatsGenerationReducer = (state = { isGenerating: false, neitherRegularOrPlayoff: false, data: {} }, action) => {
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
