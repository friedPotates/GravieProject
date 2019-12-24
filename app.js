const apiKey = "04c058d3ef0debef9020ef8e301820074fdf2f75";
const gameSearch = document.getElementById("searchTerm");
const searchType = "game"
const subBtn = document.getElementById("submitBtn");
const gameList = document.getElementById("gameList");

subBtn.addEventListener("click", function() {
  $(document).ready(function() {
    var url = buildURL(gameSearch.value);
    console.log(url);
    $.ajax({
      url: url,
      dataType: "jsonp",
      type: "GET",
      jsonpCallback: 'processJSONPResponse', // add this property
      contentType: "application/json; charset=utf-8",
      success: function(result) {
        var games = getGames(result["results"]);
        createList(games);
      },
      error: function(xhr, status, error) {
        console.log("Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText)
      }
    });
  });
});

function buildURL(gameName) {
  var url = 'http://www.giantbomb.com/api/search/?api_key=' + apiKey +
    '&format=jsonp&json_callback=processJSONPResponse&query=\"'
    + gameName + '\"&resources=game';

  return url;
}

function processJSONPResponse(json) {
  if (!json.Error) {
    $('#resultForm').submit();
  } else {
    $('#loading').hide();
    $('#userForm').show();
    alert(json.Message);
  }
}

function getGames(games){
  var i;
  var namesAndImages = [];

  for (i = 0; i < games.length; i++){
    var name = games[i]["name"];
    var thumbnail = games[i]["image"]["thumb_url"];

    namesAndImages[i] = {
      gameName: name,
      thumbnail: thumbnail
    };
  }
  console.log(namesAndImages);
  return namesAndImages;
}

function createList(games){
  var list = "<ul>";
  var i;
  for(i = 0; i < games.length; i++){
    list += "<li>" + games[i]["gameName"] + "</li>";
    console.log(games[i]["gameName"]);
  }

  list += "</ul>"
  gameList.innerHTML = list;
  console.log(list);
}
