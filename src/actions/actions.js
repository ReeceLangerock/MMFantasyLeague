import dataHandler from './../data/dataHandler.js'
import userDataHandler from './../data/userDataHandler.js'
import awardData from './../data/awardData.json'

export var updateLeagueSeason = season => {
  return {
    type: "UPDATE_LEAGUE_SEASON",
    season
  };
};


export var updateLeagueStatistics = stat => {
  return {
    type: "UPDATE_LEAGUE_STATISTICS",
    stat
  };
};

export var updateTrophy = trophy => {
  return {
    type: "UPDATE_TROPHY",
    trophy
  };
};
export var generateLeagueStatistics = (includeRegularSeason, includePlayoffs) => {
  return (dispatch) => {
  dispatch(isGeneratingLeagueStatistics())
  dataHandler.run(includeRegularSeason, includePlayoffs).then((data) => {
    dispatch ({
      type: "GENERATE_LEAGUE_STATISTICS",
      data
    });
    (dispatch(isGeneratingLeagueStatistics()));
    })

 }
};

export var generateUserStatistics = (includeRegularSeason, includePlayoffs) => {
  return (dispatch) => {
  dispatch(isGeneratingUserStatistics())

  userDataHandler.run(includeRegularSeason, includePlayoffs).then((data) => {
    dispatch ({
      type: "GENERATE_USER_STATISTICS",
      data
    });
    (dispatch(isGeneratingUserStatistics()));
    })

 }
};

export var updateUserStatistics = stat => {
  return {
    type: "UPDATE_USER_STATISTICS",
    stat
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
