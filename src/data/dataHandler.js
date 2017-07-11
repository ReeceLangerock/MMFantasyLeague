//import data from './data.json'
var data = require('./data.json')
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
  }
];

module.exports = {

  calculateLargestMargins(weekData, season, user, regularOrPlayoffs) {
    var lowestIndex = 0;
    var lowestMargin = 1000;
    for (let i = 0; i < largestMargin[season].data.length; i++) {
      if (largestMargin[season].data[i].margin < lowestMargin) {
        lowestMargin = largestMargin[season].data[i].margin;
        lowestIndex = i;
      }
    }
    var margin = weekData["points-scored"] - weekData['points-allowed']

    if(season === 0){
    //console.log("Score 1: " +weekData["points-scored"] + "|| Score 2:"+ weekData['points-allowed']+ "|| margin: "+ margin)
  }
    if (
      largestMargin[season].data[lowestIndex].margin < margin
    ) {
      if (largestMargin[season].data.length === 5) {
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
      var margin = weekData["points-scored"] - weekData['points-allowed']

      if (
        smallestMargin[season].data[largestIndex].margin > margin
      && margin > 0) {
        if (smallestMargin[season].data.length === 5) {
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

    if (
      highestScore[season].data[lowestIndex].score < weekData["points-scored"]
    ) {

      if (highestScore[season].data.length === 5) {
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
    if(weekData.opponent === "") {return 0}
    var highestIndex = 0;
    var currentHigh = 0;
    for (let i = 0; i < lowestScore[season].data.length; i++) {
      if (lowestScore[season].data[i].score > currentHigh) {
        currentHigh = lowestScore[season].data[i].score;
        highestIndex = i;
      }
    }

    if (
      lowestScore[season].data[highestIndex].score > weekData["points-scored"]

    ) {
      if (lowestScore[season].data.length === 5) {
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
    if(weekData.opponent === "") {return 0}
    let highestIndex = 0;
    let currentHigh = 0;
    for (let i = 0; i < worstWins[season].data.length; i++) {
      if (worstWins[season].data[i].score > currentHigh) {
        currentHigh = worstWins[season].data[i].score;
        highestIndex = i;
      }
    }

    if (
      worstWins[season].data[highestIndex].score > weekData["points-scored"] && weekData['points-scored'] > weekData['points-allowed']

    )
    {
      if (worstWins[season].data.length === 5) {
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



    if (
      bestLosses[season].data[lowestIndex].score < weekData["points-scored"] && weekData['points-scored'] < weekData['points-allowed']
    ) {
      if (bestLosses[season].data.length === 5) {
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

  run(includeRegularSeason, includePlayoffs) {
    var that = this;
    return new Promise(function (resolve, reject) {
  
    var uI = 0; //userIndex
    var sI = 0; //seasonIndex
    var rI = 0; //regularSeasonWeekIndex
    var pI = 0; //playoffWeekIndex
    var rS = "regular season"; //regular season  string
    var pS = "playoffs"; //playoffs string

    for (uI =0; uI < data.users.length; uI++) {
      var userName = data.users[uI].name;
      for (sI =0; sI < data.users[uI].season.length - 1; sI++) {

        if(includeRegularSeason){
        for (rI =0; rI < data.users[uI].season[sI][rS].length; rI++) {
          var dataToCheck = data.users[uI].season[sI][rS][rI];
          that.checkHighestScore(dataToCheck, sI, userName, "R");
          that.checkLowestScore(dataToCheck, sI, userName, "R");
          that.calculateLargestMargins(dataToCheck, sI, userName, "R");
          that.calculateSmallestMargins(dataToCheck, sI, userName, "R");
          that.calculateWorstWins(dataToCheck, sI, userName, "R");
          that.calculateBestLosses(dataToCheck, sI, userName, "R");

        }
      }
        if(includePlayoffs){
        for (pI = 0; pI < data.users[uI].season[sI][pS].length; pI++) {
          var dataToCheck = data.users[uI].season[sI][pS][pI];
          that.checkHighestScore(dataToCheck, sI, userName, "P");
          that.checkLowestScore(dataToCheck, sI, userName, "P");
          that.calculateLargestMargins(dataToCheck, sI, userName, "P");
          that.calculateSmallestMargins(dataToCheck, sI, userName, "P");
          that.calculateWorstWins(dataToCheck, sI, userName, "P");
          that.calculateBestLosses(dataToCheck, sI, userName, "P");


        }
      }
      }
    }
//    console.log(largestMargin)
    resolve({
      highestScore,
      lowestScore,
      largestMargin,
      smallestMargin,
      worstWins,
      bestLosses,
      completed: true
    })
  });

    //console.log(lowestScore);
  }
};
