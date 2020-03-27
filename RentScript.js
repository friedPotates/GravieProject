const title = document.getElementById("title");
const thumbnail = document.getElementById("thumbnail");
const game = localStorage.getItem("currentGame");
const gameThumbnail = localStorage.getItem("currentThumbnail");

function loadAll(){
  loadTitle();
  loadThumbnail();
}

function loadTitle(){
  title.innerHTML = "<h1>" + game + "</h1>"
}

function loadThumbnail(){
  thumbnail.innerHTML = "<img src=\"" + gameThumbnail + "\" alt=\"Current Image\">";
}

function rentGame(){
  var rented = localStorage.getItem("rented");

  if(typeof rented == "undefined"){
    console.log("undefined")
    var temp = [];
    temp[0] = game;
    localStorage.setItem("rented", JSON.stringify(temp));
  }else{
    console.log("defined")
    var temp = JSON.parse(rented);
    temp.push(game);
    localStorage.setItem("rented", JSON.stringify(temp));
  }

  console.log(localStorage.getItem("rented"));
}
