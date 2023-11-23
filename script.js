

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
        var day = dayjs().format("DD/MM/YYYY");
        var dayStart = dayjs().startOf('D');
        var dayEnd = dayjs().endOf('D');
        
        // for (var i = 0; i < data.list.length; i++) {
        //   var today = data.list[i].dt_txt;
          
        //   if (dayjs().isSame(today, "day")) {
        //     console.log(data.list[0].dt_txt);
        //   } else if (dayjs().add(1, 'day').isSame(today, "day")) {
        //     console.log(data.list[1].dt_txt);
        //   } else if (dayjs().add(2, 'day').isSame(today, "day")) {
        //     console.log(data.list[2].dt_txt);
        //   } else if (dayjs().add(3, 'day').isSame(today, "day")) {
        //     console.log(data.list[3].dt_txt);
        //   } else  {
        //       console.log(data.list[4].dt_txt);
        //   }
        // }

        var cityName = data.city.name;
        
        var displacyCity = $("<h2 id=todayCity>").text(cityName + " (" + day + ")" + " ");
        
        var weatherIcon = data.list[0].weather[0].icon;
        var iconURL = "https://openweathermap.org/img/wn/" + weatherIcon + "@2x.png";
        var weatherIconImage = $("<img class=icon>").attr("src", iconURL);
        
     
        var temp = data.list[0].main.temp;
        var tempDisplay = $("<p>").text("Temp: " + temp + " °C");
       
        var wind = data.list[0].wind.speed;
        var windDisplay = $("<p>").text("Wind: " + wind + " KPH");

        var humidity = data.list[0].main.humidity;
        var humidityDisplay = $("<p>").text("Humidity: " + humidity + " %");

        $("#today").empty();
        $("#today").append(displacyCity, weatherIconImage, tempDisplay, windDisplay, humidityDisplay);
      
        var fiveDay = $("<h3>").text("5-day forecast");
        $("#forecast").append(fiveDay);
        
        var dayTwo = $("<h4>").text(dayjs().add(1, 'day').format("DD/MM/YYYY"));
        var weatherIconTwo = data.list[1].weather[0].icon;
        var iconURLTwo = "https://openweathermap.org/img/wn/" + weatherIconTwo + "@2x.png";
        var weatherIconImageTwo = $("<img class=icon>").attr("src", iconURLTwo);
        var tempTwo = data.list[1].main.temp;
        var tempDisplayTwo = $("<p>").text("Temp: " + tempTwo + " °C");
       
        var windTwo = data.list[1].wind.speed;
        var windDisplayTwo = $("<p>").text("Wind: " + windTwo + " KPH");

        var humidityTwo = data.list[1].main.humidity;
        var humidityDisplayTwo = $("<p>").text("Humidity: " + humidityTwo + " %");
        var divOne = $("<div id=colOne>");
        $("#forecast").append(divOne);
        $("#colOne").append(dayTwo, weatherIconImageTwo, tempDisplayTwo, windDisplayTwo, humidityDisplayTwo);
        
      })
    }




$("#search-button").on("click", function(event) {

    event.preventDefault();

    var inputCity = $("#search-input").val().trim();

    checkWheather(inputCity);
})

