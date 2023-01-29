const API_KEY = "a76aca2cbf214ceb941193109221012";

async function getWeatherFromCityApi(city) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
  );
  const data = await response.json();
  return data;
}

async function getWeatherFromCityApi(city) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
  );
  const data = await response.json();
  return data;
}

async function displayweather() {
  const city = document.getElementById("input").value;
  const cityWeather = await getWeatherFromCityApi(city);

  document.getElementById("currenttemp").innerHTML =
    Math.round(cityWeather.current.temp_c) + "°C";

  document.getElementById(
    "currenticon"
  ).innerHTML = `<img class="weathericon2" src="${cityWeather.current.condition.icon}">`;

  document.getElementById("currentwind").innerHTML =
    "Wind: " + cityWeather.current.wind_kph;

  document.getElementById("currentprecipitation").innerHTML =
    "Precipitation: " + cityWeather.current.precip_mm + " mm";

  document.getElementById("data").classList.add("visible");
}
