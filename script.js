// search button handeler
$("#searchButton").on("click", searchWeather);
var searchInput = $("#searchInput");
// API key
var APIKEY = "9d9b7a8cb4be76fd65e04d054d9c1c93";
function searchWeather() {
  console.log(searchInput.val());
  // add to history
  addHistory(searchInput.val());
  var cityName = searchInput.val();
  // variable for current weather working apikey
  var weatherAPIurl =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    cityName +
    "&appid=" +
    APIKEY;

  $.ajax({
    url: weatherAPIurl,
    method: "GET",
  }).then(function (response) {
    console.log(response);
    // for adjust the date
    var date = new Date(response.dt * 1000).toLocaleDateString();

    var icon2 = response.weather[0].icon;
    var imageUrl2 = "http://openweathermap.org/img/wn/" + icon2 + ".png";
    $("#cityName").html(
      response.name + "  (" + date + ")" + "  <img src=" + imageUrl2 + ">"
    );
    var farTemp1 = (response.main.temp - 273.15) * 1.8 + 32;
    $("#temperature").html(farTemp1.toFixed(2));
    $("#humidity").html(response.main.humidity + "%");
    $("#windspeed").html(response.wind.speed);
    // variable for uvIndex
    var lat = response.coord.lat;
    var lon = response.coord.lon;
    findUVIndex(lat, lon);
  });
  // variable for current weather working apikey
  var forecastAPIurl =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    cityName +
    "&appid=" +
    APIKEY;

  $.ajax({
    url: forecastAPIurl,
    method: "GET",
  }).then(function (response) {
    console.log("Forecast", response);
    // forloop forecast working
    for (var i = 0; i < 5; i++) {
      var date2 = new Date(
        response.list[(i + 1) * 8 - 1].dt * 1000
      ).toLocaleDateString();

      $("#day" + (i + 1)).html(date2);
      var farTemp2 =
        (response.list[(i + 1) * 8 - 1].main.temp - 273.15) * 1.8 + 32;
      $("#temp" + (i + 1)).html(farTemp2.toFixed(2));
      $("#humidity" + (i + 1)).html(
        response.list[(i + 1) * 8 - 1].main.humidity + "%"
      );
      var icon = response.list[(i + 1) * 8 - 1].weather[0].icon;
      var imageUrl = "http://openweathermap.org/img/wn/" + icon + ".png";

      $("#image" + (i + 1)).html("<img src=" + imageUrl + ">");
    }
  });
}
// function for uvindex
function findUVIndex(lat, lon) {
  var uvIndexUrl =
    "http://api.openweathermap.org/data/2.5/uvi?lat=" +
    lat +
    "&lon=" +
    lon +
    "&appid=" +
    APIKEY;
  $.ajax({
    url: uvIndexUrl,
    method: "GET",
  }).then(function (response) {
    $("#uvindex").html(response.value);
  });
}

function addHistory(search) {}
