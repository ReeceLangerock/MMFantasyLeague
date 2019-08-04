var data = require("./data.json");
var highestScore = [
  {
    data: [
      {
        user: "",
        opponent: "",
        score: 0,
        week: ""
      }
    ]
  },
  {
    data: [
      {
        user: "",
        opponent: "",
        score: 0,
        week: ""
      }
    ]
  },
  {
    data: [
      {
        user: "",
        opponent: "",
        score: 0,
        week: ""
      }
    ]

  },
  {
    data: [
      {
        user: "",
        opponent: "",
        score: 0,
        week: ""
      }
    ]
  },
  {
    data: [
      {
        user: "",
        opponent: "",
        score: 0,
        week: ""
      }
    ]
  },
  {
    data: [
      {
        user: "",
        opponent: "",
        score: 0,
        week: ""
      }
    ]
  },
  {
    data: [
      {
        user: "",
        opponent: "",
        score: 0,
        week: ""
      }
    ]
  }
];
var lowestScore = [
  {
    data: [
      {
        user: "",
        opponent: "",
        score: 1000,
        week: ""
      }
    ]
  },
  {
    data: [
      {
        user: "",
        opponent: "",
        score: 1000,
        week: ""
      }
    ]
  },
  {
    data: [
      {
        user: "",
        opponent: "",
        score: 1000,
        week: ""
      }
    ]
  },
  {
    data: [
      {
        user: "",
        opponent: "",
        score: 1000,
        week: ""
      }
    ]
  },
  {
    data: [
      {
        user: "",
        opponent: "",
        score: 1000,
        week: ""
      }
    ]
  },
  {
    data: [
      {
        user: "",
        opponent: "",
        score: 1000,
        week: ""
      }
    ]
  },
  {
    data: [
      {
        user: "",
        opponent: "",
        score: 1000,
        week: ""
      }
    ]
  }
];
var largestMargin = [
  {
    data: [
      {
        user: "",
        opponent: "",
        margin: 0,
        week: ""
      }
    ]
  },
  {
    data: [
      {
        user: "",
        opponent: "",
        margin: 0,
        week: ""
      }
    ]
  },
  {
    data: [
      {
        user: "",
        opponent: "",
        margin: 0,
        week: ""
      }
    ]
  },
  {
    data: [
      {
        user: "",
        opponent: "",
        margin: 0,
        week: ""
      }
    ]
  },
  {
    data: [
      {
        user: "",
        opponent: "",
        margin: 0,
        week: ""
      }
    ]
  },
  {
    data: [
      {
        user: "",
        opponent: "",
        margin: 0,
        week: ""
      }
    ]
  },
  {
    data: [
      {
        user: "",
        opponent: "",
        margin: 0,
        week: ""
      }
    ]
  }
];
var smallestMargin = [
  {
    data: [
      {
        user: "",
        opponent: "",
        margin: 1000,
        week: ""
      }
    ]
  },
  {
    data: [
      {
        user: "",
        opponent: "",
        margin: 1000,
        week: ""
      }
    ]
  },
  {
    data: [
      {
        user: "",
        opponent: "",
        margin: 1000,
        week: ""
      }
    ]
  },
  {
    data: [
      {
        user: "",
        opponent: "",
        margin: 1000,
        week: ""
      }
    ]
  },
  {
    data: [
      {
        user: "",
        opponent: "",
        margin: 1000,
        week: ""
      }
    ]
  },
  {
    data: [
      {
        user: "",
        opponent: "",
        margin: 1000,
        week: ""
      }
    ]
  },
  {
    data: [
      {
        user: "",
        opponent: "",
        margin: 1000,
        week: ""
      }
    ]
  }
];
var worstWins = [
  {
    data: [
      {
        user: "",
        opponent: "",
        score: 1000,
        week: ""
      }
    ]
  },
  {
    data: [
      {
        user: "",
        opponent: "",
        score: 1000,
        week: ""
      }
    ]
  },
  {
    data: [
      {
        user: "",
        opponent: "",
        score: 1000,
        week: ""
      }
    ]
  },
  {
    data: [
      {
        user: "",
        opponent: "",
        score: 1000,
        week: ""
      }
    ]
  },
  {
    data: [
      {
        user: "",
        opponent: "",
        score: 1000,
        week: ""
      }
    ]
  },
  {
    data: [
      {
        user: "",
        opponent: "",
        score: 1000,
        week: ""
      }
    ]
  },
  {
    data: [
      {
        user: "",
        opponent: "",
        score: 1000,
        week: ""
      }
    ]
  }
];
var bestLosses = [
  {
    data: [
      {
        user: "",
        opponent: "",
        score: 0,
        week: ""
      }
    ]
  },
  {
    data: [
      {
        user: "",
        opponent: "",
        score: 0,
        week: ""
      }
    ]
  },
  {
    data: [
      {
        user: "",
        opponent: "",
        score: 0,
        week: ""
      }
    ]
  },
  {
    data: [
      {
        user: "",
        opponent: "",
        score: 0,
        week: ""
      }
    ]
  },
  {
    data: [
      {
        user: "",
        opponent: "",
        score: 0,
        week: ""
      }
    ]
  },
  {
    data: [
      {
        user: "",
        opponent: "",
        score: 0,
        week: ""
      }
    ]
  },
  {
    data: [
      {
        user: "",
        opponent: "",
        score: 0,
        week: ""
      }
    ]
  }
];

module.exports = {
  clear() {
    highestScore = highestScore = [
      {
        data: [
          {
            user: "",
            opponent: "",
            score: 0,
            week: ""
          }
        ]
      },
      {
        data: [
          {
            user: "",
            opponent: "",
            score: 0,
            week: ""
          }
        ]
      },
      {
        data: [
          {
            user: "",
            opponent: "",
            score: 0,
            week: ""
          }
        ]
      },
      {
        data: [
          {
            user: "",
            opponent: "",
            score: 0,
            week: ""
          }
        ]
      },
      {
        data: [
          {
            user: "",
            opponent: "",
            score: 0,
            week: ""
          }
        ]
      },
      {
        data: [
          {
            user: "",
            opponent: "",
            score: 0,
            week: ""
          }
        ]
      },{
        data: [
          {
            user: "",
            opponent: "",
            score: 0,
            week: ""
          }
        ]
      }
    ];
    lowestScore = lowestScore = [
      {
        data: [
          {
            user: "",
            opponent: "",
            score: 1000,
            week: ""
          }
        ]
      },
      {
        data: [
          {
            user: "",
            opponent: "",
            score: 1000,
            week: ""
          }
        ]
      },
      {
        data: [
          {
            user: "",
            opponent: "",
            score: 1000,
            week: ""
          }
        ]
      },
      {
        data: [
          {
            user: "",
            opponent: "",
            score: 1000,
            week: ""
          }
        ]
      },
      {
        data: [
          {
            user: "",
            opponent: "",
            score: 1000,
            week: ""
          }
        ]
      },
      {
        data: [
          {
            user: "",
            opponent: "",
            score: 1000,
            week: ""
          }
        ]
      },{
        data: [
          {
            user: "",
            opponent: "",
            score: 1000,
            week: ""
          }
        ]
      }
    ];
    largestMargin = largestMargin = [
      {
        data: [
          {
            user: "",
            opponent: "",
            margin: 0,
            week: ""
          }
        ]
      },
      {
        data: [
          {
            user: "",
            opponent: "",
            margin: 0,
            week: ""
          }
        ]
      },
      {
        data: [
          {
            user: "",
            opponent: "",
            margin: 0,
            week: ""
          }
        ]
      },
      {
        data: [
          {
            user: "",
            opponent: "",
            margin: 0,
            week: ""
          }
        ]
      },
      {
        data: [
          {
            user: "",
            opponent: "",
            margin: 0,
            week: ""
          }
        ]
      },
      {
        data: [
          {
            user: "",
            opponent: "",
            margin: 0,
            week: ""
          }
        ]
      },{
        data: [
          {
            user: "",
            opponent: "",
            margin: 0,
            week: ""
          }
        ]
      }
    ];
    smallestMargin = smallestMargin = [
      {
        data: [
          {
            user: "",
            opponent: "",
            margin: 1000,
            week: ""
          }
        ]
      },
      {
        data: [
          {
            user: "",
            opponent: "",
            margin: 1000,
            week: ""
          }
        ]
      },
      {
        data: [
          {
            user: "",
            opponent: "",
            margin: 1000,
            week: ""
          }
        ]
      },
      {
        data: [
          {
            user: "",
            opponent: "",
            margin: 1000,
            week: ""
          }
        ]
      },
      {
        data: [
          {
            user: "",
            opponent: "",
            margin: 1000,
            week: ""
          }
        ]
      },
      {
        data: [
          {
            user: "",
            opponent: "",
            margin: 1000,
            week: ""
          }
        ]
      },{
        data: [
          {
            user: "",
            opponent: "",
            margin: 1000,
            week: ""
          }
        ]
      }
    ];
    worstWins = worstWins = [
      {
        data: [
          {
            user: "",
            opponent: "",
            score: 1000,
            week: ""
          }
        ]
      },
      {
        data: [
          {
            user: "",
            opponent: "",
            score: 1000,
            week: ""
          }
        ]
      },
      {
        data: [
          {
            user: "",
            opponent: "",
            score: 1000,
            week: ""
          }
        ]
      },
      {
        data: [
          {
            user: "",
            opponent: "",
            score: 1000,
            week: ""
          }
        ]
      },
      {
        data: [
          {
            user: "",
            opponent: "",
            score: 1000,
            week: ""
          }
        ]
      },
      {
        data: [
          {
            user: "",
            opponent: "",
            score: 1000,
            week: ""
          }
        ]
      }, {
        data: [
          {
            user: "",
            opponent: "",
            score: 1000,
            week: ""
          }
        ]
      }
    ];
    bestLosses = bestLosses = [
      {
        data: [
          {
            user: "",
            opponent: "",
            score: 0,
            week: ""
          }
        ]
      },
      {
        data: [
          {
            user: "",
            opponent: "",
            score: 0,
            week: ""
          }
        ]
      },
      {
        data: [
          {
            user: "",
            opponent: "",
            score: 0,
            week: ""
          }
        ]
      },
      {
        data: [
          {
            user: "",
            opponent: "",
            score: 0,
            week: ""
          }
        ]
      },
      {
        data: [
          {
            user: "",
            opponent: "",
            score: 0,
            week: ""
          }
        ]
      },
      {
        data: [
          {
            user: "",
            opponent: "",
            score: 0,
            week: ""
          }
        ]
      },{
        data: [
          {
            user: "",
            opponent: "",
            score: 0,
            week: ""
          }
        ]
      }
    ];
  },

  calculateLargestMargins(weekData, season, user, regularOrPlayoffs) {
    var lowestIndex = 0;
    var lowestMargin = 1000;
    for (let i = 0; i < largestMargin[season].data.length; i++) {
      if (largestMargin[season].data[i].margin < lowestMargin) {
        lowestMargin = largestMargin[season].data[i].margin;
        lowestIndex = i;
      }
    }
    var margin = weekData["points-scored"] - weekData["points-allowed"];

    if (season === 0) {
    }
    if (largestMargin[season].data[lowestIndex].margin < margin) {
      if (largestMargin[season].data.length === 10) {
        largestMargin[season].data.splice(lowestIndex, 1);
      }
      largestMargin[season].data.push({
        user: user,
        opponent: weekData.opponent,
        margin: margin,
        week: weekData["week-number"],
        regularOrPlayoffs
      });
    }
  },

  calculateSmallestMargins(weekData, season, user, regularOrPlayoffs) {
    var largestIndex = 0;
    var hihgestMargin = 0;
    for (let i = 0; i < smallestMargin[season].data.length; i++) {
      if (smallestMargin[season].data[i].margin > hihgestMargin) {
        hihgestMargin = smallestMargin[season].data[i].margin;
        largestIndex = i;
      }
    }
    var margin = weekData["points-scored"] - weekData["points-allowed"];

    if (smallestMargin[season].data[largestIndex].margin > margin && margin > 0) {
      if (smallestMargin[season].data.length === 10) {
        smallestMargin[season].data.splice(largestIndex, 1);
      }
      smallestMargin[season].data.push({
        user: user,
        opponent: weekData.opponent,
        margin: margin,
        week: weekData["week-number"],
        regularOrPlayoffs
      });
    }
  },

  checkHighestScore(weekData, season, user, regularOrPlayoffs) {

    var lowestIndex = 0;
    var lowestScore = 1000;

    for (let i = 0; i < highestScore[season].data.length; i++) {
      if (highestScore[season].data[i].score < lowestScore) {
        lowestScore = highestScore[season].data[i].score;
        lowestIndex = i;
      }
    }

    if (highestScore[season].data[lowestIndex].score < weekData["points-scored"]) {
      if (highestScore[season].data.length === 10) {
        highestScore[season].data.splice(lowestIndex, 1);
      }
      highestScore[season].data.push({
        user: user,
        opponent: weekData.opponent,
        score: weekData["points-scored"],
        week: weekData["week-number"],
        regularOrPlayoffs
      });
    }
  },

  checkLowestScore(weekData, season, user, regularOrPlayoffs) {
    if (weekData.opponent === "") {
      return 0;
    }
    var highestIndex = 0;
    var currentHigh = 0;
    for (let i = 0; i < lowestScore[season].data.length; i++) {
      if (lowestScore[season].data[i].score > currentHigh) {
        currentHigh = lowestScore[season].data[i].score;
        highestIndex = i;
      }
    }

    if (lowestScore[season].data[highestIndex].score > weekData["points-scored"]) {
      if (lowestScore[season].data.length === 10) {
        lowestScore[season].data.splice(highestIndex, 1);
      }
      lowestScore[season].data.push({
        user: user,
        opponent: weekData.opponent,
        score: weekData["points-scored"],
        week: weekData["week-number"],
        regularOrPlayoffs
      });
    }
  },

  calculateWorstWins(weekData, season, user, regularOrPlayoffs) {
    if (weekData.opponent === "") {
      return 0;
    }
    let highestIndex = 0;
    let currentHigh = 0;
    for (let i = 0; i < worstWins[season].data.length; i++) {
      if (worstWins[season].data[i].score > currentHigh) {
        currentHigh = worstWins[season].data[i].score;
        highestIndex = i;
      }
    }

    if (worstWins[season].data[highestIndex].score > weekData["points-scored"] && weekData["points-scored"] > weekData["points-allowed"]) {
      if (worstWins[season].data.length === 10) {
        worstWins[season].data.splice(highestIndex, 1);
      }
      worstWins[season].data.push({
        user: user,
        opponent: weekData.opponent,
        score: weekData["points-scored"],
        week: weekData["week-number"],
        regularOrPlayoffs
      });
    }
  },

  calculateBestLosses(weekData, season, user, regularOrPlayoffs) {
    var lowestIndex = 0;
    var lowestScore = 1000;
    for (let i = 0; i < bestLosses[season].data.length; i++) {
      if (bestLosses[season].data[i].score < lowestScore) {
        lowestScore = bestLosses[season].data[i].score;
        lowestIndex = i;
      }
    }

    if (bestLosses[season].data[lowestIndex].score < weekData["points-scored"] && weekData["points-scored"] < weekData["points-allowed"]) {
      if (bestLosses[season].data.length === 10) {
        bestLosses[season].data.splice(lowestIndex, 1);
      }
      bestLosses[season].data.push({
        user: user,
        opponent: weekData.opponent,
        score: weekData["points-scored"],
        week: weekData["week-number"],
        regularOrPlayoffs
      });
    }
  },

  run(includeRegularSeason, includePlayoffs, season = 6) {

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
        for (sI = 0; sI < data.users[uI].season.length; sI++) {
          if (parseInt(season,10) === sI) {
            
            if (includeRegularSeason) {
              for (rI = 0; rI < data.users[uI].season[sI][rS].length; rI++) {
                let dataToCheck = data.users[uI].season[sI][rS][rI];
                that.checkHighestScore(dataToCheck, sI, userName, "Regular Season");
                that.checkLowestScore(dataToCheck, sI, userName, "Regular Season");
                that.calculateLargestMargins(dataToCheck, sI, userName, "Regular Season");
                that.calculateSmallestMargins(dataToCheck, sI, userName, "Regular Season");
                that.calculateWorstWins(dataToCheck, sI, userName, "Regular Season");
                that.calculateBestLosses(dataToCheck, sI, userName, "Regular Season");
              }
            }
            if (includePlayoffs) {
              for (pI = 0; pI < data.users[uI].season[sI][pS].length; pI++) {
                let dataToCheck = data.users[uI].season[sI][pS][pI];
                that.checkHighestScore(dataToCheck, sI, userName, "Playoffs");
                that.checkLowestScore(dataToCheck, sI, userName, "Playoffs");
                that.calculateLargestMargins(dataToCheck, sI, userName, "Playoffs");
                that.calculateSmallestMargins(dataToCheck, sI, userName, "Playoffs");
                that.calculateWorstWins(dataToCheck, sI, userName, "Playoffs");
                that.calculateBestLosses(dataToCheck, sI, userName, "Playoffs");
              }
            }
          }
        }
      }
    
      resolve({
        highestScore,
        lowestScore,
        largestMargin,
        smallestMargin,
        worstWins,
        bestLosses,
        completed: true
      });
    });

  }
};
