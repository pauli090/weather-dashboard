

function checkWheather(city) {
    // Querying the bandsintown api for the selected artist, the ?app_id parameter is required, but can equal anything
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=metric&appid=4744a375f85ea94ec6e376bf29c19986";
    fetch(queryURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        // Printing the entire object to console
        console.log(queryURL);
        console.log(data);

        var cityName = data.city.name;
        var day = dayjs().format("DD/MM/YYYY");
        var displacyCity = $("<h2 id=todayCity>").text(cityName + " (" + day + ")" + " ");
        var weatherIcon = data.list[0].weather[0].icon;
        console.log(weatherIcon);
        var iconURL = "https://openweathermap.org/img/wn/" + weatherIcon + "@2x.png";
        console.log(iconURL);
        var weatherIconImage = $("<img id=icon>").attr("src", iconURL);
        
      //  $("#today").append(weatherIconImage);

        console.log(weatherIconImage);
        var temp = data.list[0].main.temp;
        var tempDisplay = $("<p>").text("Temp: " + temp + " °C");
       // $("#today").append(tempDisplay);
        var wind = data.list[0].wind.speed;
        var windDisplay = $("<p>").text("Wind: " + wind + " KPH");
      //  $("#today").append(windDisplay);
        var humidity = data.list[0].main.humidity;
        var humidityDisplay = $("<p>").text("Humidity: " + humidity + " %");
      //  $("#today").append(humidityDisplay);
        $("#today").empty();
        $("#today").append(displacyCity, weatherIconImage, tempDisplay, windDisplay, humidityDisplay);
      })
    }
$("#search-button").on("click", function(event) {

    event.preventDefault();

    var inputCity = $("#search-input").val().trim();

    checkWheather(inputCity);
})

