const apiKey = "04c058d3ef0debef9020ef8e301820074fdf2f75";
const gameSearch = document.getElementById("searchTerm");
const searchType = "game"
const subBtn = document.getElementById("submitBtn");

<<<<<<< HEAD
gg

=======
>>>>>>> 79392262c42259ee0a6a60c2f5641e6453764b2e

subBtn.addEventListener("click", function() {
  $(document).ready(function() {
    var url = buildURL(gameSearch.value) + "&callback=?";
    console.log(url);
    $.ajax({
      url: url,
      dataType: "jsonp",
      type: "GET",
      jsonpCallback: 'processJSONPResponse', // add this property
      contentType: "application/json; charset=utf-8",
<<<<<<< HEAD
      success: function(result) {
=======
      success: function(result, status, xhr) {
>>>>>>> 79392262c42259ee0a6a60c2f5641e6453764b2e
        console.log(result);
      },
      error: function(xhr, status, error) {
        console.log("Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText)
      }
    });
  });
});

function buildURL(gameName) {
  var url = 'http://www.giantbomb.com/api/search/?api_key=' + apiKey +
    '&format=jsonp&json_callback=processJSONPResponse&query=\"' + gameName + '\"&resources=game';

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
