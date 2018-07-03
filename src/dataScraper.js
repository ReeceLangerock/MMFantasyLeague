var table = document.getElementById("tableId");
var seasonData = {
  "Reece Langerock": {
    "regular season": [],
    playoffs: []
  },
  "Kevin Dobkin": {
    "regular season": [],
    playoffs: []
  },
  "Ryan Coxe": {
    "regular season": [],
    playoffs: []
  },
  "Alex Warner": {
    "regular season": [],
    playoffs: []
  },
  "Mike Unverricht": {
    "regular season": [],
    playoffs: []
  },
  "Matt Reschke": {
    "regular season": [],
    playoffs: []
  },
  "Jason Knaak": {
    "regular season": [],
    playoffs: []
  },
  "JD Langefeld": {
    "regular season": [],
    playoffs: []
  },
  "Trey Ward": {
    "regular season": [],
    playoffs: []
  },
  "Jimmy Ouska": {
    "regular season": [],
    playoffs: []
  },
  "Bryan Steger": {
    "regular season": [],
    playoffs: []
  },
  "Sean Quill": {
    "regular season": [],
    playoffs: []
  }
};
var week = undefined;
var regularSeason = true;
for (var i = 0, row; (row = table.rows[i]); i++) {
  var homeUser = undefined;
  var data = {
    "week-number": undefined,
    "points-scored": undefined,
    "points-allowed": undefined,
    opponent: undefined
  };
  var rowA = row.getElementsByTagName("td")[0];
  var weekNumber;
  try {
    rowA = rowA.innerText.toLowerCase();
    if (rowA.includes("week")) {
      week = rowA.split(" ")[1];
    } else if (rowA.includes("round")) {
      week = rowA.split(" ")[1];
      regularSeason = false;
    }
  } catch (e) {}

  //iterate through rows
  //rows would be accessed using the "row" variable assigned in the for loop
  for (var j = 0, col; (col = row.cells[j]); j++) {
    switch (j) {
      case 1: {
        data.opponent = col.innerText;
        break;
      }
      case 4: {
        homeUser = col.innerText;
        break;
      }
      case 5: {
        data["points-allowed"] = col.innerText.split("-")[0];
        data["points-scored"] = col.innerText.split("-")[1];
        break;
      }
    }
    //iterate through columns
    //columns would be accessed using the "col" variable assigned in the for loop
  }

  try {
    data["week-number"] = week;

    const revData = {
      "week-number": data["week-number"],
      "points-scored": data["points-allowed"],
      "points-allowed": data["points-scored"],
      opponent: homeUser
    };
    if (regularSeason) {
      seasonData[homeUser]["regular season"].push(data);
      seasonData[data.opponent]["regular season"].push(revData);
    } else if (!regularSeason) {
      seasonData[homeUser]["playoffs"].push(data);
      seasonData[data.opponent]["playoffs"].push(revData);
    }
  } catch (e) {}
  //   console.log(data)
}
