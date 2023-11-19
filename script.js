

function checkWheather(city) {
    // Querying the bandsintown api for the selected artist, the ?app_id parameter is required, but can equal anything
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=4744a375f85ea94ec6e376bf29c19986";
    fetch(queryURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        // Printing the entire object to console
        console.log(queryURL);
        console.log(data);
  
        // Constructing HTML containing the artist information
        // var artistName = $("<h1>").text(data.name);
        // var artistURL = $("<a>").attr("href", data.url).append(artistName);
        // var artistImage = $("<img>").attr("src", data.thumb_url);
        // var trackerCount = $("<h2>").text(data.tracker_count + " fans tracking this artist");
        // var upcomingEvents = $("<h2>").text(data.upcoming_event_count + " upcoming events");
        // var goToArtist = $("<a>").attr("href", data.url).text("See Tour Dates");
  
        // // Empty the contents of the artist-div, append the new artist content
        // $("#artist-div").empty();
        // $("#artist-div").append(artistURL, artistImage, trackerCount, upcomingEvents, goToArtist);
      })
    }
$("#search-button").on("click", function(event) {

    event.preventDefault();

    var inputCity = $("#search-input").val().trim();

    checkWheather(inputCity);
})

