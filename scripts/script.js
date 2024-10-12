
const search = document.querySelector(".search-icon").addEventListener("click", ()=>{
const input = document.querySelector(".input");
const city = input.value;
console.log(city);

 const apiUrl =
  `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=5BSKWDZYG3QG7X5CSQZSZFVE4&contentType=json`;

fetch(apiUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    console.log(response);
    document.querySelector(".city").innerHTML = response.address;
    document.querySelector(".temp").innerHTML =
      response.currentConditions.temp + "°C";
    document.querySelector(".humidity").innerHTML =
      response.currentConditions.humidity + "%";
    document.querySelector(".wind").innerHTML =
      response.currentConditions.windspeed + " km/h";
  });

}
)