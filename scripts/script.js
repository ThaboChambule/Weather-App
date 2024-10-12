
const apiUrl = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Bloemfontein?unitGroup=metric&key=5BSKWDZYG3QG7X5CSQZSZFVE4&contentType=json"

fetch(apiUrl)
.then(function(response){
    return response.json();
})
.then(function(response){
    console.log(response)
    document.querySelector(".city").innerHTML = response.address;


})
   
