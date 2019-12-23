const apiKey = "04c058d3ef0debef9020ef8e301820074fdf2f75";
var gameName = "Metroid"
const searchType = "game"
var url = "http://www.giantbomb.com/api/search/?api_key=" + apiKey + "&format=json&query=\"" + gameName + "\"&resources=game";

function clicked(){
  console.log(url);
}
