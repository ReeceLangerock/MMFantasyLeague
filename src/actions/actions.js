import dataHandler from './../data/dataHandler.js'
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
  console.log(includePlayoffs)
  dataHandler.run(includeRegularSeason, includePlayoffs).then((data) => {
    dispatch ({
      type: "GENERATE_LEAGUE_STATISTICS",
      data
    });
    (dispatch(isGeneratingLeagueStatistics()));
    })

 }
};

export var startLeagueStatGeneration=() =>{}

export var isGeneratingLeagueStatistics = () => {
  return {
    type: "TOGGLE_ISGENERATING_LEAGUE_STATISTICS"
  };
};
