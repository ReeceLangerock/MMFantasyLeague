const SEASONS = [{ season: 2016, id: 4 }, { season: 2015, id: 3 }, { season: 2014, id: 2 }, { season: 2013, id: 1 }, { season: 2012, id: 0 }];

const USER_LIST = [
  {
    name: "Ryan Coxe",
    active: true
  },
  {
    name: "Kevin Dobkin",

    active: true
  },
  {
    name: "Jason Knaak",
    active: true
  },
  {
    name: "JD Langefeld",
    active: true
  },
  {
    name: "Reece Langerock",
    active: true
  },
  {
    name: "Jimmy Ouska",
    active: true
  },
  {
    name: "Sean Quill",
    active: true
  },
  {
    name: "Matt Reschke",
    active: true
  },
  {
    name: "Bryan Steger",
    active: true
  },
  {
    name: "Mike Unverricht",

    active: true
  },
  {
    name: "Trey Ward",

    active: true
  },
  {
    name: "Alex Warner",

    active: true
  },
  {
    name: "Dave Longwell",

    active: false
  }
];
const USER_STAT_CATEGORY_LIST = [
  {
    name: "wins",
    formattedName: "Wins"
  },
  {
    name: "losses",
    formattedName: "Losses"
  },
  {
    name: "total-points-scored",
    formattedName: "Points Scored"
  },
  {
    name: "total-points-allowed",
    formattedName: "Points Allowed"
  },
  {
    name: "high-score",
    formattedName: "High Score"
  },
  {
    name: "low-score",
    formattedName: "Low Score"
  },
  {
    name: "earnings",
    formattedName: "Earnings"
  },
  {
    name: "average-points-scored",
    formattedName: "Average Points Scored"
  },
  {
    name: "average-points-allowed",
    formattedName: "Average Points Allowed"
  },
  {
    name: "win-percentage",
    formattedName: "Win Percentage"
  }
  //,
  // {
  //   name: "what-if-record",
  //   formattedName: "'What If' Record"
  // }
];

const LEAGUE_STAT_CATEGORY_LIST = [
  {
    name: "highestScore",
    formattedName: "Highest Score"
  },
  {
    name: "lowestScore",
    formattedName: "Lowest Score"
  },
  {
    name: "largestMargin",
    formattedName: "Largest Margin"
  },
  {
    name: "smallestMargin",
    formattedName: "Smallest Margin"
  },
  {
    name: "worstWins",
    formattedName: "Worst Wins"
  },
  {
    name: "bestLosses",
    formattedName: "Best Losses"
  }
];
module.exports = {
  getUserStatList() {
    return USER_STAT_CATEGORY_LIST;
  },

  getLeagueStatList() {
    return LEAGUE_STAT_CATEGORY_LIST;
  },
  getUserList() {
    return USER_LIST;
  },
  getSeasons() {
    return SEASONS;
  }
};
