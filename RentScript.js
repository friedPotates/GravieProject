const title = document.getElementById("title");
const thumbnail = document.getElementById("thumbnail");

function loadAll(){
  loadTitle();
  loadThumbnail();
}

function loadTitle(){
  title.innerHTML = "<h1>" + localStorage.getItem("currentGame") + "</h1>"
}

function loadThumbnail(){
  thumbnail.innerHTML = "<img src=\"" + localStorage.getItem("currentThumbnail") + "\" alt=\"Current Image\">";
}
