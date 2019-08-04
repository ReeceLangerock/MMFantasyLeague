const data = require("./data.json");
const awardData = require("./awardData.json");
const NUM_SEASONS = 7;

var allScores = {
  seasons: [{ weeks: [] }]
};
var whatIf = {
  "Ryan Coxe": {
    seasons: [
      {
        ownScores: []
      }
    ]
  },
  "Kevin Dobkin": {
    seasons: [
      {
        ownScores: []
      }
    ]
  },
  "Jason Knaak": {
    seasons: [
      {
        ownScores: []
      }
    ]
  },
  "JD Langefeld": {
    seasons: [
      {
        ownScores: []
      }
    ]
  },
  "Reece Langerock": {
    seasons: [
      {
        ownScores: []
      }
    ]
  },
  "Dave Longwell": {
    seasons: [
      {
        ownScores: []
      }
    ]
  },
  "Jimmy Ouska": {
    seasons: [
      {
        ownScores: []
      }
    ]
  },
  "Sean Quill": {
    seasons: [
      {
        ownScores: []
      }
    ]
  },
  "Matt Reschke": {
    seasons: [
      {
        ownScores: []
      }
    ]
  },
  "Bryan Steger": {
    seasons: [
      {
        ownScores: []
      }
    ]
  },
  "Mike Unverricht": {
    seasons: [
      {
        ownScores: []
      }
    ]
  },
  "Trey Ward": {
    seasons: [
      {
        ownScores: []
      }
    ]
  },
  "Alex Warner": {
    seasons: [
      {
        ownScores: []
      }
    ]
  }
};

var users = {
  users: {
    "Ryan Coxe": {
      wins: 0,
      losses: 0,
      earnings: 0,
      net: 0,
      "buy-in": 800,
      "total-points-scored": 0,
      "total-points-allowed": 0,
      "high-score": 0,
      "low-score": 1000,
      "what-if-wins": 0,
      "what-if-losses": 0,
      "what-if-vs-actual": 0,
      "win-percentage": 0
    },
    "Kevin Dobkin": {
      wins: 0,
      losses: 0,
      earnings: 0,
      net: 0,
      "buy-in": 800,
      "total-points-scored": 0,
      "total-points-allowed": 0,
      "high-score": 0,
      "low-score": 1000,
      "what-if-wins": 0,
      "what-if-losses": 0,
      "what-if-vs-actual": 0,
      "win-percentage": 0
    },
    "Jason Knaak": {
      wins: 0,
      losses: 0,
      earnings: 0,
      net: 0,
      "buy-in": 800,
      "total-points-scored": 0,
      "total-points-allowed": 0,
      "high-score": 0,
      "low-score": 1000,
      "what-if-wins": 0,
      "what-if-losses": 0,
      "what-if-vs-actual": 0,
      "win-percentage": 0
    },
    "JD Langefeld": {
      wins: 0,
      losses: 0,
      earnings: 0,
      net: 0,
      "buy-in": 800,
      "total-points-scored": 0,
      "total-points-allowed": 0,
      "high-score": 0,
      "low-score": 1000,
      "what-if-wins": 0,
      "what-if-losses": 0,
      "what-if-vs-actual": 0,
      "win-percentage": 0
    },
    "Reece Langerock": {
      wins: 0,
      losses: 0,
      earnings: 0,
      net: 0,
      "buy-in": 800,
      "total-points-scored": 0,
      "total-points-allowed": 0,
      "high-score": 0,
      "low-score": 1000,
      "what-if-wins": 0,
      "what-if-losses": 0,
      "what-if-vs-actual": 0,
      "win-percentage": 0
    },
    "Dave Longwell": {
      wins: 0,
      losses: 0,
      earnings: 0,
      net: 0,
      "buy-in": 100,
      "total-points-scored": 0,
      "total-points-allowed": 0,
      "high-score": 0,
      "low-score": 1000,
      "what-if-wins": 0,
      "what-if-losses": 0,
      "what-if-vs-actual": 0,
      "win-percentage": 0
    },
    "Jimmy Ouska": {
      wins: 0,
      losses: 0,
      earnings: 0,
      net: 0,
      "buy-in": 800,
      "total-points-scored": 0,
      "total-points-allowed": 0,
      "high-score": 0,
      "low-score": 1000,
      "what-if-wins": 0,
      "what-if-losses": 0,
      "what-if-vs-actual": 0,
      "win-percentage": 0
    },
    "Sean Quill": {
      wins: 0,
      losses: 0,
      earnings: 0,
      net: 0,
      "buy-in": 700,
      "total-points-scored": 0,
      "total-points-allowed": 0,
      "high-score": 0,
      "low-score": 1000,
      "what-if-wins": 0,
      "what-if-losses": 0,
      "what-if-vs-actual": 0,
      "win-percentage": 0
    },
    "Matt Reschke": {
      wins: 0,
      losses: 0,
      earnings: 0,
      net: 0,
      "buy-in": 800,
      "total-points-scored": 0,
      "total-points-allowed": 0,
      "high-score": 0,
      "low-score": 1000,
      "what-if-wins": 0,
      "what-if-losses": 0,
      "what-if-vs-actual": 0,
      "win-percentage": 0
    },
    "Bryan Steger": {
      wins: 0,
      losses: 0,
      earnings: 0,
      net: 0,
      "buy-in": 800,
      "total-points-scored": 0,
      "total-points-allowed": 0,
      "high-score": 0,
      "low-score": 1000,
      "what-if-wins": 0,
      "what-if-losses": 0,
      "what-if-vs-actual": 0,
      "win-percentage": 0
    },
    "Mike Unverricht": {
      wins: 0,
      losses: 0,
      earnings: 0,
      net: 0,
      "buy-in": 800,
      "total-points-scored": 0,
      "total-points-allowed": 0,
      "high-score": 0,
      "low-score": 1000,
      "what-if-wins": 0,
      "what-if-losses": 0,
      "what-if-vs-actual": 0,
      "win-percentage": 0
    },
    "Trey Ward": {
      wins: 0,
      losses: 0,
      earnings: 0,
      net: 0,
      "buy-in": 800,
      "total-points-scored": 0,
      "total-points-allowed": 0,
      "high-score": 0,
      "low-score": 1000,
      "what-if-wins": 0,
      "what-if-losses": 0,
      "what-if-vs-actual": 0,
      "win-percentage": 0
    },
    "Alex Warner": {
      wins: 0,
      losses: 0,
      earnings: 0,
      net: 0,
      "buy-in": 800,
      "total-points-scored": 0,
      "total-points-allowed": 0,
      "average-points-scored": 0,
      "high-score": 0,
      "low-score": 1000,
      "what-if-wins": 0,
      "what-if-losses": 0,
      "what-if-vs-actual": 0,
      "win-percentage": 0
    }
  }
};

module.exports = {
  clear() {
    allScores = {
      seasons: [{ weeks: [] }]
    };
    var whatIf = {
      "Ryan Coxe": {
        seasons: [
          {
            ownScores: []
          }
        ]
      },
      "Kevin Dobkin": {
        seasons: [
          {
            ownScores: []
          }
        ]
      },
      "Jason Knaak": {
        seasons: [
          {
            ownScores: []
          }
        ]
      },
      "JD Langefeld": {
        seasons: [
          {
            ownScores: []
          }
        ]
      },
      "Reece Langerock": {
        seasons: [
          {
            ownScores: []
          }
        ]
      },
      "Dave Longwell": {
        seasons: [
          {
            ownScores: []
          }
        ]
      },
      "Jimmy Ouska": {
        seasons: [
          {
            ownScores: []
          }
        ]
      },
      "Sean Quill": {
        seasons: [
          {
            ownScores: []
          }
        ]
      },
      "Matt Reschke": {
        seasons: [
          {
            ownScores: []
          }
        ]
      },
      "Bryan Steger": {
        seasons: [
          {
            ownScores: []
          }
        ]
      },
      "Mike Unverricht": {
        seasons: [
          {
            ownScores: []
          }
        ]
      },
      "Trey Ward": {
        seasons: [
          {
            ownScores: []
          }
        ]
      },
      "Alex Warner": {
        seasons: [
          {
            ownScores: []
          }
        ]
      }
    };
    users = {
      users: {
        "Ryan Coxe": {
          wins: 0,
          losses: 0,
          earnings: 0,
          net: 0,
          "buy-in": 800,
          "total-points-scored": 0,
          "total-points-allowed": 0,
          "high-score": 0,
          "low-score": 1000,
          "what-if-wins": 0,
          "what-if-losses": 0,
          "what-if-vs-actual": 0,
          "win-percentage": 0
        },
        "Kevin Dobkin": {
          wins: 0,
          losses: 0,
          earnings: 0,
          net: 0,
          "buy-in": 800,
          "total-points-scored": 0,
          "total-points-allowed": 0,
          "high-score": 0,
          "low-score": 1000,
          "what-if-wins": 0,
          "what-if-losses": 0,
          "what-if-vs-actual": 0,
          "win-percentage": 0
        },
        "Jason Knaak": {
          wins: 0,
          losses: 0,
          earnings: 0,
          net: 0,
          "buy-in": 800,
          "total-points-scored": 0,
          "total-points-allowed": 0,
          "high-score": 0,
          "low-score": 1000,
          "what-if-wins": 0,
          "what-if-losses": 0,
          "what-if-vs-actual": 0,
          "win-percentage": 0
        },
        "JD Langefeld": {
          wins: 0,
          losses: 0,
          earnings: 0,
          net: 0,
          "buy-in": 800,
          "total-points-scored": 0,
          "total-points-allowed": 0,
          "high-score": 0,
          "low-score": 1000,
          "what-if-wins": 0,
          "what-if-losses": 0,
          "what-if-vs-actual": 0,
          "win-percentage": 0
        },
        "Reece Langerock": {
          wins: 0,
          losses: 0,
          earnings: 0,
          net: 0,
          "buy-in": 800,
          "total-points-scored": 0,
          "total-points-allowed": 0,
          "high-score": 0,
          "low-score": 1000,
          "what-if-wins": 0,
          "what-if-losses": 0,
          "what-if-vs-actual": 0,
          "win-percentage": 0
        },
        "Dave Longwell": {
          wins: 0,
          losses: 0,
          earnings: 0,
          net: 0,
          "buy-in": 100,
          "total-points-scored": 0,
          "total-points-allowed": 0,
          "high-score": 0,
          "low-score": 1000,
          "what-if-wins": 0,
          "what-if-losses": 0,
          "what-if-vs-actual": 0,
          "win-percentage": 0
        },
        "Jimmy Ouska": {
          wins: 0,
          losses: 0,
          earnings: 0,
          net: 0,
          "buy-in": 800,
          "total-points-scored": 0,
          "total-points-allowed": 0,
          "high-score": 0,
          "low-score": 1000,
          "what-if-wins": 0,
          "what-if-losses": 0,
          "what-if-vs-actual": 0,
          "win-percentage": 0
        },
        "Sean Quill": {
          wins: 0,
          losses: 0,
          earnings: 0,
          net: 0,
          "buy-in": 700,
          "total-points-scored": 0,
          "total-points-allowed": 0,
          "high-score": 0,
          "low-score": 1000,
          "what-if-wins": 0,
          "what-if-losses": 0,
          "what-if-vs-actual": 0,
          "win-percentage": 0
        },
        "Matt Reschke": {
          wins: 0,
          losses: 0,
          earnings: 0,
          net: 0,
          "buy-in": 800,
          "total-points-scored": 0,
          "total-points-allowed": 0,
          "high-score": 0,
          "low-score": 1000,
          "what-if-wins": 0,
          "what-if-losses": 0,
          "what-if-vs-actual": 0,
          "win-percentage": 0
        },
        "Bryan Steger": {
          wins: 0,
          losses: 0,
          earnings: 0,
          net: 0,
          "buy-in": 800,
          "total-points-scored": 0,
          "total-points-allowed": 0,
          "high-score": 0,
          "low-score": 1000,
          "what-if-wins": 0,
          "what-if-losses": 0,
          "what-if-vs-actual": 0,
          "win-percentage": 0
        },
        "Mike Unverricht": {
          wins: 0,
          losses: 0,
          earnings: 0,
          net: 0,
          "buy-in": 800,
          "total-points-scored": 0,
          "total-points-allowed": 0,
          "high-score": 0,
          "low-score": 1000,
          "what-if-wins": 0,
          "what-if-losses": 0,
          "what-if-vs-actual": 0,
          "win-percentage": 0
        },
        "Trey Ward": {
          wins: 0,
          losses: 0,
          earnings: 0,
          net: 0,
          "buy-in": 800,
          "total-points-scored": 0,
          "total-points-allowed": 0,
          "high-score": 0,
          "low-score": 1000,
          "what-if-wins": 0,
          "what-if-losses": 0,
          "what-if-vs-actual": 0,
          "win-percentage": 0
        },
        "Alex Warner": {
          wins: 0,
          losses: 0,
          earnings: 0,
          net: 0,
          "buy-in": 800,
          "total-points-scored": 0,
          "total-points-allowed": 0,
          "average-points-scored": 0,
          "high-score": 0,
          "low-score": 1000,
          "what-if-wins": 0,
          "what-if-losses": 0,
          "what-if-vs-actual": 0,
          "win-percentage": 0
        }
      }
    };
    Object.keys(whatIf).map(user => {
      while (whatIf[user].seasons.length < NUM_SEASONS) {
        whatIf[user].seasons.push({ ownScores: [] });
      }
      while (allScores.seasons.length < NUM_SEASONS) {
        allScores.seasons.push({ weeks: [] });
      }
    });
  },

  // ['Head-To-Head'][user].opponents[weekData.opponent][points-allowed-array].push(weekData['points-scored'])
  calculateHighScores(weekData, season, user, regularOrPlayoffs) {
    if (users.users[user]["high-score"] < weekData["points-scored"]) {
      users.users[user]["high-score"] = weekData["points-scored"];
    }
  },
  calculateLowScores(weekData, season, user, regularOrPlayoffs) {
    var low = users.users[user]["low-score"];
    var score = weekData["points-scored"];
    if (low > score && score !== null && score !== 0) {
      users.users[user]["low-score"] = score;
    }
  },

  calculateWinsAndLosses(weekData, season, user, regularOrPlayoffs) {
    if (weekData["points-scored"] > weekData["points-allowed"]) {
      users.users[user].wins++;
    } else if (weekData["points-scored"] < weekData["points-allowed"]) {
      users.users[user].losses++;
    }
  },

  calculateTotalPointsForAndAgainst(weekData, season, user, regularOrPlayoffs) {
    if (weekData["points-scored"] !== null) {
      users.users[user]["total-points-scored"] += weekData["points-scored"];
    }
    if (weekData["points-allowed"] !== null) {
      users.users[user]["total-points-allowed"] += weekData["points-allowed"];
    }
  },
  calculateAverageScores(user) {
    let games = users.users[user]["wins"] + users.users[user]["losses"];
    let avgScored = users.users[user]["total-points-scored"] / games;
    let avgAllowed = users.users[user]["total-points-allowed"] / games;
    avgScored = isNaN(parseFloat(avgScored)) ? 0 : avgScored;
    avgAllowed = isNaN(parseFloat(avgAllowed)) ? 0 : avgAllowed;

    users.users[user]["average-points-scored"] = avgScored;
    users.users[user]["average-points-allowed"] = avgAllowed;
  },
  calculateWinPercentage(user) {
    var games = users.users[user]["wins"] + users.users[user]["losses"];

    var winPercentage = (users.users[user]["wins"] / games) * 100;
    winPercentage = winPercentage.toPrecision(4);
    winPercentage = isNaN(parseFloat(winPercentage)) ? 0 : winPercentage;

    users.users[user]["win-percentage"] = parseFloat(winPercentage);
  },

  calculateEarnings() {
    var awards = awardData.awards;
    for (var key in awards) {
      if (awards.hasOwnProperty(key)) {
        for (let i = 0; i < awards[key].season.length; i++) {
          let awardUser = awards[key].season[i].user;
          if (key === "Weekly Points Champion") {
            for (let j = 0; j < awards[key].season[i].users.length; j++) {
              awardUser = awards[key].season[i].users[j]["user-name"];
              let earnings = awards[key].season[i].users[j]["total-payout"];

              if (awardUser !== "" && earnings) {
                users.users[awardUser].earnings += earnings;
              }
            }
          } else {
            awardUser = awards[key].season[i].user;
            let earnings = awards[key].season[i].payout;

            if (awardUser !== "" && earnings) {
              users.users[awardUser].earnings += earnings;
            }
          }
        }
      }
    }
  },
  populateWhatIf(weekData, season, user, regularOrPlayoffs) {
    if (whatIf[user].seasons.length < NUM_SEASONS) {
      whatIf[user].seasons.push({
        ownScores: []
      });
    }
    while (allScores.seasons[season].weeks.length < 3) {
      allScores.seasons[season].weeks.push([]);
    }

    whatIf[user].seasons[season].ownScores.push(weekData["points-scored"]);

    if (!allScores.seasons[season]) {
      allScores.seasons.push({ weeks: [] });
    }
    if (!allScores.seasons[season].weeks[weekData["week-number"] - 1]) {
      allScores.seasons[season].weeks.push([]);
    }

    allScores.seasons[season].weeks[weekData["week-number"] - 1].push(
      weekData["points-scored"]
    );
  },
  calculateWhatIf() {
    Object.keys(whatIf).map(user => {
      whatIf[user].seasons.map((season, seasonIndex) => {
        season.ownScores.map((score, scoreIndex) => {
          if (allScores.seasons[seasonIndex].weeks[scoreIndex]) {
            for (
              let i = 0;
              i < allScores.seasons[seasonIndex].weeks[scoreIndex].length;
              i++
            ) {
              if (allScores.seasons[seasonIndex].weeks[scoreIndex][i] > score) {
                users.users[user]["what-if-losses"]++;
              } else {
                users.users[user]["what-if-wins"]++;
              }
            }
          }
        });
      });
    });
  },
  calculateWhatIfvsActual(selectedUsers) {
    selectedUsers.map(user => {
      var whatIfGames =
        users.users[user]["what-if-wins"] + users.users[user]["what-if-losses"];
      var whatIfWinPercentage =
        (users.users[user]["what-if-wins"] / whatIfGames) * 100;

      var whatIfVsActual =
        users.users[user]["win-percentage"] - whatIfWinPercentage;
      whatIfVsActual = whatIfVsActual.toPrecision(4);

      whatIfVsActual = isNaN(parseFloat(whatIfVsActual)) ? 0 : whatIfVsActual;

      users.users[user]["what-if-vs-actual"] = parseFloat(whatIfVsActual);
    });
  },
  run(
    includeRegularSeason,
    includePlayoffs,
    seasons = [0, 1, 2, 3, 4, 5,6],
    selectedUsers = [
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
    ]
  ) {
    var that = this;
    that.clear();
    return new Promise(function(resolve, reject) {
      var uI = 0; //userIndex
      var sI = 0; //seasonIndex
      var rI = 0; //regularSeasonWeekIndex
      var pI = 0; //playoffWeekIndex
      var rS = "regular season"; //regular season  string
      var pS = "playoffs"; //playoffs string

      for (uI = 0; uI < data.users.length; uI++) {
        var userName = data.users[uI].name;

        if (selectedUsers.includes(userName)) {
          for (sI = 0; sI < data.users[uI].season.length; sI++) {
            if (seasons.includes(sI)) {
              if (includeRegularSeason) {
                for (rI = 0; rI < data.users[uI].season[sI][rS].length; rI++) {
                  let dataToCheck = data.users[uI].season[sI][rS][rI];

                  if (
                    dataToCheck.opponent !== "Bye" &&
                    dataToCheck.opponent !== ""
                  ) {
                    that.calculateHighScores(dataToCheck, sI, userName, "R");
                    that.calculateLowScores(dataToCheck, sI, userName, "R");
                    that.calculateWinsAndLosses(dataToCheck, sI, userName, "R");
                    that.calculateTotalPointsForAndAgainst(
                      dataToCheck,
                      sI,
                      userName,
                      "R"
                    );
                    that.populateWhatIf(dataToCheck, sI, userName, "R");
                  }
                }
              }
              if (includePlayoffs) {
                for (pI = 0; pI < data.users[uI].season[sI][pS].length; pI++) {
                  let dataToCheck = data.users[uI].season[sI][pS][pI];
                  if (
                    dataToCheck.opponent !== "Bye" &&
                    dataToCheck.opponent !== ""
                  ) {
                    that.calculateHighScores(dataToCheck, sI, userName, "P");
                    that.calculateLowScores(dataToCheck, sI, userName, "P");
                    that.calculateWinsAndLosses(dataToCheck, sI, userName, "P");
                    that.calculateTotalPointsForAndAgainst(
                      dataToCheck,
                      sI,
                      userName,
                      "P"
                    );
                    that.populateWhatIf(dataToCheck, sI, userName, "P");
                  }
                }
              }
            }
          }
        }
        that.calculateAverageScores(userName);
        that.calculateWinPercentage(userName);
      }

      that.calculateWhatIf();
      that.calculateEarnings();
      that.calculateWhatIfvsActual(selectedUsers);
      resolve({
        users,
        completed: true
      });
    });
  }
};
