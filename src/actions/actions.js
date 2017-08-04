import dataHandler from './../data/dataHandler.js'
import userDataHandler from './../data/userDataHandler.js'
import h2hHandler from './../data/h2hDataHandler.js'

export var updateSelectedHomeUser = homeUser => {
  return {
    type: "UPDATE_SELECTED_HOME_USER",
    homeUser
  };
};


export var updateSelectedAwayUser = awayUser => {
  return {
    type: "UPDATE_SELECTED_AWAY_USER",
    awayUser
  };
};

export var isGeneratingH2HStatistics = () => {
  return {
    type: "TOGGLE_ISGENERATING_H2H_STATISTICS"
  };
};

export var generateH2HStatistics = (includeRegularSeason, includePlayoffs, seasonSelected) => {
  return (dispatch) => {
  dispatch(isGeneratingH2HStatistics())
  h2hHandler.run(includeRegularSeason, includePlayoffs,seasonSelected).then((data) => {
    dispatch ({
      type: "GENERATE_H2H_STATISTICS",
      data
    });
    (dispatch(isGeneratingH2HStatistics()));
    })

 }
};

export var updateLeagueSeason = leagueDataSeasonSelected => {
  return {
    type: "UPDATE_LEAGUE_SEASON_SELECTED",
    leagueDataSeasonSelected
  };
};


export var updateLeagueStatistics = leagueDataStatSelected => {
  return {
    type: "UPDATE_LEAGUE_STATISTIC_SELECTED",
    leagueDataStatSelected
  };
};

export var updateTrophy = trophy => {
  return {
    type: "UPDATE_TROPHY",
    trophy
  };
};
export var setRegularOrPlayoffsSelected = (regularOrPlayoffsSelected) => {
  return {
    type: "SET_REGULAR_OR_PLAYOFF_SELECTED",
    regularOrPlayoffsSelected
  }
}

export var generateLeagueStatistics = (includeRegularSeason, includePlayoffs, seasonSelected) => {
  return (dispatch) => {
  dispatch(isGeneratingLeagueStatistics())
  dataHandler.run(includeRegularSeason, includePlayoffs,seasonSelected).then((data) => {
    dispatch ({
      type: "GENERATE_LEAGUE_STATISTICS",
      data
    });
    (dispatch(isGeneratingLeagueStatistics()));
    })

 }
};

export var generateUserStatistics = (includeRegularSeason, includePlayoffs, seasonsSelected, usersSelected) => {
  return (dispatch) => {
  dispatch(isGeneratingUserStatistics())

  userDataHandler.run(includeRegularSeason, includePlayoffs, seasonsSelected, usersSelected).then((data) => {
    dispatch ({
      type: "GENERATE_USER_STATISTICS",
      data
    });
    (dispatch(isGeneratingUserStatistics()));
    })

 }
};

export var updateUserStatistics = userDataStatSelected => {
  return {
    type: "UPDATE_USER_STATISTIC_SELECTED",
    userDataStatSelected
  };
};

export var updateUserSeasons = userDataSeasonsSelected => {
  return {
    type: "UPDATE_USER_SEASONS_SELECTED",
    userDataSeasonsSelected
  };
};

export var updateUserUsers = userDataUsersSelected => {
  return {
    type: "UPDATE_USER_DATA_USERS_SELECTED",
    userDataUsersSelected
  };
};

export var isGeneratingUserStatistics = () => {
  return {
    type: "TOGGLE_ISGENERATING_USER_STATISTICS"
  };
};

export var startLeagueStatGeneration=() =>{}

export var isGeneratingLeagueStatistics = () => {
  return {
    type: "TOGGLE_ISGENERATING_LEAGUE_STATISTICS"
  };
};
