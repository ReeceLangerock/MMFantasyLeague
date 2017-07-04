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
