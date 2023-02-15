const API_KEY = "a76aca2cbf214ceb941193109221012";

//current weather

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
    "Wind: " + cityWeather.current.wind_kph + " Kph";

  document.getElementById("currentprecipitation").innerHTML =
    "Precipitation: " + cityWeather.current.precip_mm + " mm";

  document.getElementById("datacurrent").classList.add("visible");
  document.getElementById("dataforecast").classList.add("visible");
}

//hours

const forecastTime = new Date();
const currentTime = new Date();

const forecastTime3h = new Date(currentTime.getTime() + 3 * 60 * 60 * 1000);
const forecastHour3h = forecastTime3h.getHours() + ":00";

const forecastTime6h = new Date(currentTime.getTime() + 6 * 60 * 60 * 1000);
const forecastHour6h = forecastTime6h.getHours() + ":00";

const forecastTime9h = new Date(currentTime.getTime() + 9 * 60 * 60 * 1000);
const forecastHour9h = forecastTime9h.getHours() + ":00";

const forecastTime12h = new Date(currentTime.getTime() + 12 * 60 * 60 * 1000);
const forecastHour12h = forecastTime12h.getHours() + ":00";

document.getElementById("forecasthour3h").innerHTML = forecastHour3h;
document.getElementById("forecasthour6h").innerHTML = forecastHour6h;
document.getElementById("forecasthour9h").innerHTML = forecastHour9h;
document.getElementById("forecasthour12h").innerHTML = forecastHour12h;
