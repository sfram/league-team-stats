  function loadJSONAsync(player, callback) {
  var xmlHttp = new XMLHttpRequest();
  if (xmlHttp) {
    xmlHttp.onreadystatechange = function() {
      if (xmlHttp.readyState == 1) {
        //console.log("Status 1: Server connection established! <br/>");
      } else if (xmlHttp.readyState == 2) {
        //console.log("Status 2: Request recieved! <br/>");
      } else if (xmlHttp.readyState == 3) {
        //console.log("Status 3: Processing Request!<br/>");
      } else if (xmlHttp.readyState == 4) {

        if (xmlHttp.status == 200) {
          var text = xmlHttp.responseText;
          var obj = JSON.parse(text);
          callback(obj);
        } else {
          console.log(xmlHttp.statusText);
        }
      }
    };

    xmlHttp.open("GET", player, true);
    xmlHttp.send();
  }
}

function sendRequest(team) {
    var xmlHttp = new XMLHttpRequest();
    if (xmlHttp) {
      xmlHttp.onreadystatechange = function() {      
        if (xmlHttp.status == 200 && xmlHttp.readyState == 4) {
          var text = xmlHttp.responseText;
          console.log(text);
        }
        
        else {
          console.log(xmlHttp.statusText);  
        }
      };
      
      xmlHttp.open("GET", "http://127.0.0.1:8081/" + team, true);
      xmlHttp.send();      
    }
}