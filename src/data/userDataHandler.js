var data = require("./data.json");
var awardData = require("./awardData.json");

var users = {
  users: {
    "Ryan Coxe": {
      wins: 0,
      losses: 0,
      earnings: 0,
      "buy-in": 600,
      "total-points-scored": 0,
      "total-points-allowed": 0,
      "high-score": 0,
      "low-score": 1000,
      "what-if-wins": 0,
      "what-if-losses": 0
    },
    "Kevin Dobkin": {
      wins: 0,
      losses: 0,
      earnings: 0,
      "buy-in": 600,
      "total-points-scored": 0,
      "total-points-allowed": 0,
      "high-score": 0,
      "low-score": 1000,
      "what-if-wins": 0,
      "what-if-losses": 0
    },
    "Jason Knaak": {
      wins: 0,
      losses: 0,
      earnings: 0,
      "buy-in": 600,
      "total-points-scored": 0,
      "total-points-allowed": 0,
      "high-score": 0,
      "low-score": 1000,
      "what-if-wins": 0,
      "what-if-losses": 0
    },
    "JD Langefeld": {
      wins: 0,
      losses: 0,
      earnings: 0,
      "buy-in": 600,
      "total-points-scored": 0,
      "total-points-allowed": 0,
      "high-score": 0,
      "low-score": 1000,
      "what-if-wins": 0,
      "what-if-losses": 0
    },
    "Reece Langerock": {
      wins: 0,
      losses: 0,
      earnings: 0,
      "buy-in": 600,
      "total-points-scored": 0,
      "total-points-allowed": 0,
      "high-score": 0,
      "low-score": 1000,
      "what-if-wins": 0,
      "what-if-losses": 0
    },
    "Dave Longwell": {
      wins: 0,
      losses: 0,
      earnings: 0,
      "buy-in": 100,
      "total-points-scored": 0,
      "total-points-allowed": 0,
      "high-score": 0,
      "low-score": 1000,
      "what-if-wins": 0,
      "what-if-losses": 0
    },
    "Jimmy Ouska": {
      wins: 0,
      losses: 0,
      earnings: 0,
      "buy-in": 600,
      "total-points-scored": 0,
      "total-points-allowed": 0,
      "high-score": 0,
      "low-score": 1000,
      "what-if-wins": 0,
      "what-if-losses": 0
    },
    "Sean Quill": {
      wins: 0,
      losses: 0,
      earnings: 0,
      "buy-in": 600,
      "total-points-scored": 0,
      "total-points-allowed": 0,
      "high-score": 0,
      "low-score": 1000,
      "what-if-wins": 0,
      "what-if-losses": 0
    },
    "Matt Reschke": {
      wins: 0,
      losses: 0,
      earnings: 0,
      "buy-in": 600,
      "total-points-scored": 0,
      "total-points-allowed": 0,
      "high-score": 0,
      "low-score": 1000,
      "what-if-wins": 0,
      "what-if-losses": 0
    },
    "Bryan Steger": {
      wins: 0,
      losses: 0,
      earnings: 0,
      "buy-in": 600,
      "total-points-scored": 0,
      "total-points-allowed": 0,
      "high-score": 0,
      "low-score": 1000,
      "what-if-wins": 0,
      "what-if-losses": 0
    },
    "Mike Unverricht": {
      wins: 0,
      losses: 0,
      earnings: 0,
      "buy-in": 600,
      "total-points-scored": 0,
      "total-points-allowed": 0,
      "high-score": 0,
      "low-score": 1000,
      "what-if-wins": 0,
      "what-if-losses": 0
    },
    "Trey Ward": {
      wins: 0,
      losses: 0,
      earnings: 0,
      "buy-in": 600,
      "total-points-scored": 0,
      "total-points-allowed": 0,
      "high-score": 0,
      "low-score": 1000,
      "what-if-wins": 0,
      "what-if-losses": 0
    },
    "Alex Warner": {
      wins: 0,
      losses: 0,
      earnings: 0,
      "buy-in": 600,
      "total-points-scored": 0,
      "total-points-allowed": 0,
      "average-points-scored": 0,
      "high-score": 0,
      "low-score": 1000,
      "what-if-wins": 0,
      "what-if-losses": 0
    }
  }
};

module.exports = {
  clear() {
    users = {
      users: {
        "Ryan Coxe": {
          wins: 0,
          losses: 0,
          earnings: 0,
          "buy-in": 600,
          "total-points-scored": 0,
          "total-points-allowed": 0,
          "high-score": 0,
          "low-score": 1000,
          "what-if-wins": 0,
          "what-if-losses": 0
        },
        "Kevin Dobkin": {
          wins: 0,
          losses: 0,
          earnings: 0,
          "buy-in": 600,
          "total-points-scored": 0,
          "total-points-allowed": 0,
          "high-score": 0,
          "low-score": 1000,
          "what-if-wins": 0,
          "what-if-losses": 0
        },
        "Jason Knaak": {
          wins: 0,
          losses: 0,
          earnings: 0,
          "buy-in": 600,
          "total-points-scored": 0,
          "total-points-allowed": 0,
          "high-score": 0,
          "low-score": 1000,
          "what-if-wins": 0,
          "what-if-losses": 0
        },
        "JD Langefeld": {
          wins: 0,
          losses: 0,
          earnings: 0,
          "buy-in": 600,
          "total-points-scored": 0,
          "total-points-allowed": 0,
          "high-score": 0,
          "low-score": 1000,
          "what-if-wins": 0,
          "what-if-losses": 0
        },
        "Reece Langerock": {
          wins: 0,
          losses: 0,
          earnings: 0,
          "buy-in": 600,
          "total-points-scored": 0,
          "total-points-allowed": 0,
          "high-score": 0,
          "low-score": 1000,
          "what-if-wins": 0,
          "what-if-losses": 0
        },
        "Dave Longwell": {
          wins: 0,
          losses: 0,
          earnings: 0,
          "buy-in": 100,
          "total-points-scored": 0,
          "total-points-allowed": 0,
          "high-score": 0,
          "low-score": 1000,
          "what-if-wins": 0,
          "what-if-losses": 0
        },
        "Jimmy Ouska": {
          wins: 0,
          losses: 0,
          earnings: 0,
          "buy-in": 600,
          "total-points-scored": 0,
          "total-points-allowed": 0,
          "high-score": 0,
          "low-score": 1000,
          "what-if-wins": 0,
          "what-if-losses": 0
        },
        "Sean Quill": {
          wins: 0,
          losses: 0,
          earnings: 0,
          "buy-in": 600,
          "total-points-scored": 0,
          "total-points-allowed": 0,
          "high-score": 0,
          "low-score": 1000,
          "what-if-wins": 0,
          "what-if-losses": 0
        },
        "Matt Reschke": {
          wins: 0,
          losses: 0,
          earnings: 0,
          "buy-in": 600,
          "total-points-scored": 0,
          "total-points-allowed": 0,
          "high-score": 0,
          "low-score": 1000,
          "what-if-wins": 0,
          "what-if-losses": 0
        },
        "Bryan Steger": {
          wins: 0,
          losses: 0,
          earnings: 0,
          "buy-in": 600,
          "total-points-scored": 0,
          "total-points-allowed": 0,
          "high-score": 0,
          "low-score": 1000,
          "what-if-wins": 0,
          "what-if-losses": 0
        },
        "Mike Unverricht": {
          wins: 0,
          losses: 0,
          earnings: 0,
          "buy-in": 600,
          "total-points-scored": 0,
          "total-points-allowed": 0,
          "high-score": 0,
          "low-score": 1000,
          "what-if-wins": 0,
          "what-if-losses": 0
        },
        "Trey Ward": {
          wins: 0,
          losses: 0,
          earnings: 0,
          "buy-in": 600,
          "total-points-scored": 0,
          "total-points-allowed": 0,
          "high-score": 0,
          "low-score": 1000,
          "what-if-wins": 0,
          "what-if-losses": 0
        },
        "Alex Warner": {
          wins: 0,
          losses: 0,
          earnings: 0,
          "buy-in": 600,
          "total-points-scored": 0,
          "total-points-allowed": 0,
          "average-points-scored": 0,
          "high-score": 0,
          "low-score": 1000,
          "what-if-wins": 0,
          "what-if-losses": 0
        }
      }
    };
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
    var games = users.users[user]["wins"] + users.users[user]["losses"];
    users.users[user]["average-points-scored"] = users.users[user]["total-points-scored"] / games;
    users.users[user]["average-points-allowed"] = users.users[user]["total-points-allowed"] / games;
  },
  calculateWinPercentage(user) {
    var games = users.users[user]["wins"] + users.users[user]["losses"];

    var winPercentage = users.users[user]["wins"] / games * 100;
    winPercentage = winPercentage.toPrecision(4);
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
  run(
    includeRegularSeason,
    includePlayoffs,
    seasons = [0, 1, 2, 3, 4],
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
          for (sI = 0; sI < data.users[uI].season.length - 1; sI++) {
            if (seasons.includes(sI)) {
              if (includeRegularSeason) {
                for (rI = 0; rI < data.users[uI].season[sI][rS].length; rI++) {
                  let dataToCheck = data.users[uI].season[sI][rS][rI];
                  that.calculateHighScores(dataToCheck, sI, userName, "R");
                  that.calculateLowScores(dataToCheck, sI, userName, "R");
                  that.calculateWinsAndLosses(dataToCheck, sI, userName, "R");
                  that.calculateTotalPointsForAndAgainst(dataToCheck, sI, userName, "R");
                }
              }
              if (includePlayoffs) {
                for (pI = 0; pI < data.users[uI].season[sI][pS].length; pI++) {
                  let dataToCheck = data.users[uI].season[sI][pS][pI];
                  that.calculateHighScores(dataToCheck, sI, userName, "P");
                  that.calculateLowScores(dataToCheck, sI, userName, "P");
                  that.calculateWinsAndLosses(dataToCheck, sI, userName, "P");
                  that.calculateTotalPointsForAndAgainst(dataToCheck, sI, userName, "P");
                }
              }
            }
          }
        }
        that.calculateAverageScores(userName);
        that.calculateWinPercentage(userName);
      }

      that.calculateEarnings();
      resolve({
        users,
        completed: true
      });
    });
  }
};
