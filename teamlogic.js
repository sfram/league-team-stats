//Consider doing team win-rate, or something of the sort.
//Think of stats that populate as a team.
var nameSpace = {};
var allChamps = {};
var players = new Array();

//Insert your key here.
var key = "";
var ddversion = "5.14.1"

var championurl = "https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion/<champid>?api_key=" + key;
var imgurl = "http://ddragon.leagueoflegends.com/cdn/" + ddversion + "/img/champion/";
var iconurl = "http://ddragon.leagueoflegends.com/cdn/" + ddversion + "/img/profileicon/";
var playernameurl = "https://na.api.pvp.net/api/lol/na/v1.4/summoner/<id>?api_key=" + key;

//"wholeTeam":"https://na.api.pvp.net/api/lol/na/v1.4/summoner/5908, 57029179, 50759139, 56917699, 18991200?api_key=",
var playersu = {
  "Team SoloMid": {
    "Dyrus":{url:("https://na.api.pvp.net/api/lol/na/v1.3/stats/by-summoner/5908/ranked?season=SEASON2015&api_key=" + key), id:5908, position:0},
    "Santorin":{url:("https://na.api.pvp.net/api/lol/na/v1.3/stats/by-summoner/57029179/ranked?season=SEASON2015&api_key=" + key), id:57029179, position:1},  
    "Bjergsen":{url:("https://na.api.pvp.net/api/lol/na/v1.3/stats/by-summoner/50759139/ranked?season=SEASON2015&api_key=" + key), id:50759139, position:2},
    "Lustboy":{url:("https://na.api.pvp.net/api/lol/na/v1.3/stats/by-summoner/56917699/ranked?season=SEASON2015&api_key=" + key), id:56917699, position:3},
    "Wildturtle":{url:("https://na.api.pvp.net/api/lol/na/v1.3/stats/by-summoner/18991200/ranked?season=SEASON2015&api_key=" + key), id:18991200, position:4}
   },
  "Counter Logic Gaming": {
    "ZionSpartan":{url:("https://na.api.pvp.net/api/lol/na/v1.3/stats/by-summoner/19738326/ranked?season=SEASON2015&api_key=" + key), id:19738326, position:0},
    "Xmithie":{url:("https://na.api.pvp.net/api/lol/na/v1.3/stats/by-summoner/44979348/ranked?season=SEASON2015&api_key=" + key), id:44979348, position:1},  
    "Pobelter":{url:("https://na.api.pvp.net/api/lol/na/v1.3/stats/by-summoner/51409228/ranked?season=SEASON2015&api_key=" + key), id:51409228, position:2},
    "Aphromoo":{url:("https://na.api.pvp.net/api/lol/na/v1.3/stats/by-summoner/442232/ranked?season=SEASON2015&api_key=" + key), id:442232, position:3},
    "Doublelift":{url:("https://na.api.pvp.net/api/lol/na/v1.3/stats/by-summoner/20132258/ranked?season=SEASON2015&api_key=" + key), id:20132258, position:4}         
  },
  "Cloud9": {
    "Balls":{url:("https://na.api.pvp.net/api/lol/na/v1.3/stats/by-summoner/44989299/ranked?season=SEASON2015&api_key=" + key), id:44989299, position:0},
    "Hai":{url:("https://na.api.pvp.net/api/lol/na/v1.3/stats/by-summoner/492066/ranked?season=SEASON2015&api_key=" + key), id:492066, position:1},
    "Incarnati0n":{url:("https://na.api.pvp.net/api/lol/na/v1.3/stats/by-summoner/68479082/ranked?season=SEASON2015&api_key=" + key), id:68479082, position:2},
    "Sneaky":{url:("https://na.api.pvp.net/api/lol/na/v1.3/stats/by-summoner/51405/ranked?season=SEASON2015&api_key=" + key), id:51405, position:3},
    "LemonNation":{url:("https://na.api.pvp.net/api/lol/na/v1.3/stats/by-summoner/44979325/ranked?season=SEASON2015&api_key=" + key), id:44979325, position:4}      
  },
  "Team Liquid": {
    "Quas":{url:("https://na.api.pvp.net/api/lol/na/v1.3/stats/by-summoner/50539313/ranked?season=SEASON2015&api_key=" + key), id:50539313, position:0},
    "IWillDominate":{url:("https://na.api.pvp.net/api/lol/na/v1.3/stats/by-summoner/50759303/ranked?season=SEASON2015&api_key=" + key), id:50759303, position:1},  
    "FeniX":{url:("https://na.api.pvp.net/api/lol/na/v1.3/stats/by-summoner/60939398/ranked?season=SEASON2015&api_key=" + key), id:60939398, position:2},
    "Piglet":{url:("https://na.api.pvp.net/api/lol/na/v1.3/stats/by-summoner/62374009/ranked?season=SEASON2015&api_key=" + key), id:62374009, position:3},
    "Xpecial":{url:("https://na.api.pvp.net/api/lol/na/v1.3/stats/by-summoner/19199530/ranked?season=SEASON2015&api_key=" + key), id:19199530, position:4}         
  },
  "Team Dignitas": {
    "Gamsu":{url:("https://na.api.pvp.net/api/lol/na/v1.3/stats/by-summoner/65399097/ranked?season=SEASON2015&api_key=" + key), id:65399097, position:0},
    "Helios":{url:("https://na.api.pvp.net/api/lol/na/v1.3/stats/by-summoner/55779191/ranked?season=SEASON2015&api_key=" + key), id:55779191, position:1},  
    "Shiphtur":{url:("https://na.api.pvp.net/api/lol/na/v1.3/stats/by-summoner/19967304/ranked?season=SEASON2015&api_key=" + key), id:19967304, position:2},
    "CoreJJ":{url:("https://na.api.pvp.net/api/lol/na/v1.3/stats/by-summoner/62599179/ranked?season=SEASON2015&api_key=" + key), id:62599179, position:3},
    "KiWiKiD":{url:("https://na.api.pvp.net/api/lol/na/v1.3/stats/by-summoner/24332462/ranked?season=SEASON2015&api_key=" + key), id:24332462, position:4}         
  },                 
};

function mostPlayed(stats) {
  var champs = {};
  //Creates object that maps individual player champions to amount of games played.
  //Also creates object that maps team champions to amount of games played by adding individual player objects.
  for (var i in stats["champions"]) {
    var champid = stats["champions"][i]["id"];

    var all = stats["champions"][i]["stats"].totalSessionsPlayed;
    var won = stats["champions"][i]["stats"].totalSessionsWon;
    var lost = stats["champions"][i]["stats"].totalSessionsLost;

    champs[champid] = {
      all: all,
      won: won,
      lost: lost
    };
	
	//allChamps is an object which tallies a team's total champion games.
	//If a champion has already been counted, then add to that id instead of adding a new one.
    if (allChamps.hasOwnProperty(champid)) {
      allChamps[champid].totalAll += all;
      allChamps[champid].totalWon += won;
      allChamps[champid].totalLost += lost;	  	    
    } 
    
    else {
      allChamps[champid] = 
	  {totalAll: all,  
	  totalWon: won,	
	  totalLost: lost};		
    }
  }
  var idd = stats["summonerId"];

  var pospospos;
  var namenamename;
  var teamteamteam;

  //Compares player objects to current JSON player ID to figure out player lane.
  for (var team in playersu) {
    for (var p in playersu[team]) {
      if ((playersu[team][p]["id"]) == idd) {
        pospospos = (playersu[team][p]["position"])
        teamteamteam = team;
      }
    }
  }
  var hchampnid = organizeStats(champs);
  var newurl = championurl.replace("<champid>", hchampnid.highestid);

  loadJSONAsync(newurl, function(obj) {
    loadJSONAsync(playernameurl.replace("<id>", idd), function(objj) {
      var summonername = objj[idd].name;
      var iconid = objj[idd].profileIconId;
      var playerstats = {
        summonername: summonername,
        champ: obj.key,
        games: hchampnid.highest,
        champwr: hchampnid.champwr,
        totalgames: hchampnid.totalgames,
        winrate: hchampnid.winrate,
        position: pospospos,
        iconid: iconid
      };
      players.push(playerstats);
      champs = {};
    });
  });
}

//Processes most information for playerstats object.
function organizeStats(obj) {
  var highest = 0;
  for (var z in obj) {
    if (obj.hasOwnProperty(z)) {
      if (obj[z].all > highest && z != 0) {
        var highest = obj[z].all;
        var highestid = z;
        var champwr = ((obj[z].won / obj[z].all) * 100).toFixed(3);
      } 
	  else if (z == 0) {
        var totalgames = obj[z].all;
        var winrate = ((obj[z].won / obj[z].all) * 100).toFixed(3);
      }
    }
  }
  var hchampnid = {};
  hchampnid.highestid = highestid;
  hchampnid.highest = highest;
  hchampnid.champwr = champwr;
  hchampnid.totalgames = totalgames;
  hchampnid.winrate = winrate;
  return hchampnid;
}

function highest(obj) {
  var highest = 0;
  for (var z in obj) {
    if (obj.hasOwnProperty(z)) {
		  if (obj[z].totalAll > highest && z != 0) {
			var highest = obj[z].totalAll;
			var highestid = z;
		  }
	  else if (z == 0) {
		
	  }
    }
  }
  var hchampnid = {};
  hchampnid.teamWinRate = (obj[0].totalWon / obj[0].totalAll);
  hchampnid.highestid = highestid;
  hchampnid.highest = highest;
  return hchampnid;
}

//Once all players have been added to player array, this function is called to add whole team statistics.
function addTeamStats() {
	var url = championurl.replace("<champid>", (highest(allChamps)).highestid);
    loadJSONAsync(url, function(obj) {
        players.push(obj.name)
		players.push((highest(allChamps)).teamWinRate);
    });
}

//Returns true if players array is filled to cap.  
function arrayFinished(arr, cap) {
  return (arr.length == cap);
}

//Checks if array is filled to cap every interval. Only then is it processed to avoid processing
//an empty array. Takes a parameter for the array cap that is passed to arrayFinished().
//Also takes a parameter for a callback function that is called once the array is filled to cap.
function checkIfFinished(cap, func) {
  var timeout = setInterval(function() {
    if (arrayFinished(players, cap)) {
		clearInterval(timeout);
		func();
    }
  }, 100);	
}

//Sorts in ascending order by player position down the map, top to adc.
function compare(a, b) {
  return a.position - b.position;
}

//...clears player array.
function clearPlayerArray() {
  players = [];
}

//This is how you call the JSON function every time:
function loadTeam(team) {
  clearPlayerArray();
  for (var player in playersu[team]) {
    loadJSONAsync(playersu[team][player]["url"], mostPlayed);	
  }
  checkIfFinished(5, addTeamStats);
}

//Callback function is whatever I want to actually use it for.
//Like getting most-played champ or whatever.

//My idea is to fill an array with member objects.
//The array will not be processed until it is filled with all members.

//Begin server code
var http = require("http");
var fs = require("fs");
var url = require("url");
var async = require("async");
var XMLHttpRequest = require("xhr2");
eval(fs.readFileSync("requests.js") + '');

http.createServer(function (request, response) {
  
  var pathname = url.parse(request.url).pathname;
  console.log("Request for " + pathname + " received.");

  if (pathname == "/tsm") {
    loadTeam("Team SoloMid");
	checkIfFinished(7, function() {
		response.writeHead(200, {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*'
		});
		  response.end(JSON.stringify(players));
	});
  }
  
}).listen(8081);

console.log('Server running at http://192.241.146.183:8081/');

//Testing node-cache module.
var nodeCache = require("node-cache");
var myCache = new nodeCache();

testobj = {my: "Test", variable: 0};
success = myCache.set("myKey", testobj, 10);
value = myCache.get("myKey");
console.log(value);

setTimeout(function() {
  value2 = myCache.get("myKey");
  if (value2 == undefined) {
    console.log("Expired!");
  }
  else {
    console.log(value2);
  }
}, 15000);