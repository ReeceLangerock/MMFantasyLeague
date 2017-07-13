
var data = require('./data.json')
const NUM_SEASONS = 5;
var users = { "users" : {
  "Alex Warner": {
      "total-wins": 0,
      "total-losses": 0,
      "high-score": 0,
      "low-score": 0,
      "average-score": 0,
      "earnings": 0,
      "buy-in": 0,

  }
}
}


module.exports = {

  clear(){

  },

  calculateHighScores(weekData, season, user, regularOrPlayoffs) {
    console.log(user);
    if (
      users.users[user]['high-score'] < weekData['points-scored']
    ) {
      users.users[user]['high-score'] = weekData['points-scored']
    }
  },

  run(includeRegularSeason, includePlayoffs) {
    var that = this;
    that.clear();
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
          that.calculateHighScores(dataToCheck, sI, userName, "R");


        }
      }
        if(includePlayoffs){
        for (pI = 0; pI < data.users[uI].season[sI][pS].length; pI++) {
          var dataToCheck = data.users[uI].season[sI][pS][pI];
          that.calculateHighScores(dataToCheck, sI, userName, "P");



        }
      }
      }
    }
   console.log(users)
    resolve({

      completed: true
    })
  });

    //console.log(lowestScore);
  }
};
