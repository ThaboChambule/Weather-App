const weatherData = document.querySelector(".content");
fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/retrievebulkdataset?&key=5BSKWDZYG3QG7X5CSQZSZFVE4&taskId=825af98195a54c42781aa074100d759a&zip=false')
.then(function(response){
    return response.json();
})
.then(function(data){
    weatherData.innerHTML = JSON.stringify(data,null,2)


})
