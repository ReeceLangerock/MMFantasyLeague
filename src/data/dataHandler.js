var highScore = 0;
var lowScore = 1000;
var highestScore = [
  {
    data: [
      {
        user: "",
        opponent: "",
        score: 0,
        week: 0,
        rank: 0
      }
    ]
  },
  {
    data: [
      {
        user: "",
        opponent: "",
        score: 0,
        week: 0,
        rank: 0
      }
    ]
  },
  {
    data: [
      {
        user: "",
        opponent: "",
        score: 0,
        week: 0,
        rank: 0
      }
    ]
  },
  {
    data: [
      {
        user: "",
        opponent: "",
        score: 0,
        week: 0,
        rank: 0
      }
    ]
  },
  {
    data: [
      {
        user: "",
        opponent: "",
        score: 0,
        week: 0,
        rank: 0
      }
    ]
  },
  {
    data: [
      {
        user: "",
        opponent: "",
        score: 0,
        week: 0,
        rank: 0
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
        week: 0,
        rank: 0
      }
    ]
  },
  {
    data: [
      {
        user: "",
        opponent: "",
        score: 1000,
        week: 0,
        rank: 0
      }
    ]
  },
  {
    data: [
      {
        user: "",
        opponent: "",
        score: 1000,
        week: 0,
        rank: 0
      }
    ]
  },
  {
    data: [
      {
        user: "",
        opponent: "",
        score: 1000,
        week: 0,
        rank: 0
      }
    ]
  },
  {
    data: [
      {
        user: "",
        opponent: "",
        score: 1000,
        week: 0,
        rank: 0
      }
    ]
  },
  {
    data: [
      {
        user: "",
        opponent: "",
        score: 1000,
        week: 0,
        rank: 0
      }
    ]
  }
];

module.exports = {
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

  run(data) {
    var uI = 0; //userIndex
    var sI = 0; //seasonIndex
    var rI = 0; //regularSeasonWeekIndex
    var pI = 0; //playoffWeekIndex
    var rS = "regular season"; //regular season  string
    var pS = "playoffs"; //playoffs string

    for (uI =0; uI < data.users.length; uI++) {
      var userName = data.users[uI].name;
      for (sI =0; sI < data.users[uI].season.length - 1; sI++) {
        for (rI =0; rI < data.users[uI].season[sI][rS].length; rI++) {
          var dataToCheck = data.users[uI].season[sI][rS][rI];
          this.checkHighestScore(dataToCheck, sI, userName, "R");
          this.checkLowestScore(dataToCheck, sI, userName, "R");
        }
        for (pI; pI < data.users[uI].season[sI][pS].length; pI++) {
          this.checkHighestScore(
            data.users[uI].season[sI][pS][pI],
            sI,
            data.users[uI].name,
            "P"
          );
        }
      }
    }
    console.log(highestScore);
    console.log(lowestScore);
  }
};
