function displayTemperature(response) {
    console.log(response.data);
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = Math.round 
    (response.data.temperature.current);
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = response.data.city;
    let conditionElement = document.querySelector("#condition");
    conditionElement.innerHTML = response.data.condition.description;
    let humidityElement = document.querySelector("#humidity");
    humidityElement.innerHTML = response.data.temperature.humidity;
    let windElement = document.querySelector("#wind");
    windElement.innerHTML = Math.round(response.data.wind.speed);

    
}


let apiKey = "05f7bca06f5co4b63152fe40b36t5d34";
let apiUrl =
  "https://api.shecodes.io/weather/v1/current?query=Lisbon&key=05f7bca06f5co4b63152fe40b36t5d34&units=metric";
  

  axios.get(apiUrl).then(displayTemperature);