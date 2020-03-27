const rentedGames = document.getElementById("RentedGames");

function loadGames(){
  createList();
  createCloseListeners();
}

function createList(){
  var list = "<ul>";
  var games = JSON.parse(localStorage.getItem("rented"));

  for(var i = 0; i < games.length; i++){
    var gameName = games[i];
    var clickString = "onClick=\"removeGame(\'" + gameName + "\')\"";
    list += "<li>" + gameName + "<span class=\"close\"" + clickString +">Return</span></li>";
    console.log(list);
  }

  list += "</ul>";
  rentedGames.innerHTML = list;
}

function createCloseListeners(){
  var closebtns = document.getElementsByClassName("close");
  var games = JSON.parse(localStorage.getItem("rented"));

  for (var i = 0; i < closebtns.length; i++) {
    closebtns[i].addEventListener("click", function() {
      this.parentElement.style.display = 'none';
    });
  }
}

function removeGame(gameName){
  console.log(gameName);
  var games = JSON.parse(localStorage.getItem("rented"));

  for(var i = 0; i < games.length; i++){
    if(games[i].localeCompare(gameName) === 0){
      console.log("found match");
      games.splice(i, 1);
      localStorage.setItem("rented", JSON.stringify(games));
      break;
    }
  }
}

function returnAll(){
  var temp = [];
  localStorage.setItem("rented", JSON.stringify(temp));

  closeAll();
}

function closeAll(){
  var closebtns = document.getElementsByClassName("close");

  for (var i = 0; i < closebtns.length; i++) {
    closebtns[i].parentElement.style.display = 'none';
  }
}
