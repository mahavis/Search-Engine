function showTemperature(response) {
  let temperature = document.querySelector("#currentTemp");
  temperature.innerHTML = Math.round(response.data.main.temp);
  let city = document.querySelector("#currentCity");
  city.innerHTML = response.data.name;
  let description = document.querySelector("#description");
  description.innerHTML = response.data.weather[0].description;
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = response.data.main.humidity;
  let wind = document.querySelector("#speed");
  wind.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "4d6942c0f6f8b66b251e082acf3b3d83";
let units = "metric";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=The Hague&appid=${apiKey}&units=${units}`;

axios.get(apiUrl).then(showTemperature);
