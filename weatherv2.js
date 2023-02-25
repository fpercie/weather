const API_KEY = "a76aca2cbf214ceb941193109221012";

//call functions

async function displayData() {
  await displayweather();
  await displayForecast();
  await displayAstronomy();
}

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

  //do so when user for example types la the output  is Los angeles, USA

  document.getElementById("weatherinformationforcity").innerHTML =
    "Weather information for " + city;

  //////////////////////////////////////////////////////////////////////

  document.getElementById("currenttemp").innerHTML =
    Math.round(cityWeather.current.temp_c) + "°C";

  document.getElementById(
    "currenticon"
  ).innerHTML = `<img class="weathericon2" src="${cityWeather.current.condition.icon}">`;

  document.getElementById("currentwind").innerHTML =
    "Wind: " + cityWeather.current.wind_kph + " Kph";

  document.getElementById("currentprecipitation").innerHTML =
    "Precipitation: " + cityWeather.current.precip_mm + " mm";

  document.getElementById("humidityporcentage").innerHTML =
    cityWeather.current.humidity + "%";

  document.getElementById("pressuremb").innerHTML =
    cityWeather.current.pressure_mb + " mb";

  document.getElementById("datacurrent").classList.add("visible");
  document.getElementById("dataforecasthour").classList.add("visible");
  document.getElementById("dataforecastday").classList.add("visible");

  document.getElementById("currentuv").innerHTML =
    "UV Index: " + cityWeather.current.uv;
}

//weather forecast

async function getForecast(city, date) {
  const hour = date.getHours();
  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&hour=${hour}`
  );
  const data = await response.json();
  return data;
}

async function displayForecast() {
  const city = document.getElementById("input").value;
  const currentTime = new Date();

  const forecastTime3h = new Date(currentTime.getTime() + 3 * 60 * 60 * 1000);
  const forecastTime6h = new Date(currentTime.getTime() + 6 * 60 * 60 * 1000);
  const forecastTime9h = new Date(currentTime.getTime() + 9 * 60 * 60 * 1000);
  const forecastTime12h = new Date(currentTime.getTime() + 12 * 60 * 60 * 1000);

  const forecast3h = await getForecast(city, forecastTime3h);
  const forecast6h = await getForecast(city, forecastTime6h);
  const forecast9h = await getForecast(city, forecastTime9h);
  const forecast12h = await getForecast(city, forecastTime12h);

  document.getElementById("forecasttemp3h").innerHTML =
    Math.round(forecast3h.forecast.forecastday[0].hour[0].temp_c) + "°C";
  document.getElementById("forecasttemp6h").innerHTML =
    Math.round(forecast6h.forecast.forecastday[0].hour[0].temp_c) + "°C";
  document.getElementById("forecasttemp9h").innerHTML =
    Math.round(forecast9h.forecast.forecastday[0].hour[0].temp_c) + "°C";
  document.getElementById("forecasttemp12h").innerHTML =
    Math.round(forecast12h.forecast.forecastday[0].hour[0].temp_c) + "°C";

  document.getElementById(
    "forecasthouricon3h"
  ).innerHTML = `<img class="forecasthouricon" src="${forecast3h.forecast.forecastday[0].hour[0].condition.icon}">`;
  document.getElementById(
    "forecasthouricon6h"
  ).innerHTML = `<img class="forecasthouricon" src="${forecast6h.forecast.forecastday[0].hour[0].condition.icon}">`;
  document.getElementById(
    "forecasthouricon9h"
  ).innerHTML = `<img class="forecasthouricon" src="${forecast9h.forecast.forecastday[0].hour[0].condition.icon}">`;
  document.getElementById(
    "forecasthouricon12h"
  ).innerHTML = `<img class="forecasthouricon" src="${forecast12h.forecast.forecastday[0].hour[0].condition.icon}">`;

  const cityWeather = await getForecast(city, currentDate);

  document.getElementById("maxtemp").innerHTML =
    Math.round(cityWeather.forecast.forecastday[0].day.maxtemp_c) + "°C";

  document.getElementById("mintemp").innerHTML =
    Math.round(cityWeather.forecast.forecastday[0].day.mintemp_c) + "°C";

  document.getElementById("chanceofraintoday").innerHTML =
    cityWeather.forecast.forecastday[0].day.daily_chance_of_rain + "%";

  document.getElementById("chanceofsnowtoday").innerHTML =
    cityWeather.forecast.forecastday[0].day.daily_chance_of_snow + "%";
}

//astronomy

async function getAstronomy(city, date) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/astronomy.json?key=${API_KEY}&q=${city}&dt=${date}`
  );
  const data = await response.json();
  return data;
}

async function displayAstronomy() {
  const city = document.getElementById("input").value;
  const currentDate = new Date().toISOString().slice(0, 10);
  const cityWeather = await getAstronomy(city, currentDate);

  document.getElementById("sunreise").innerHTML =
    "Sunrise: " + cityWeather.astronomy.astro.sunrise;

  document.getElementById("sunset").innerHTML =
    "Sunset: " + cityWeather.astronomy.astro.sunset;
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

//weekdays for forecast

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const currentDate = new Date();
const currentWeekday = currentDate.getDay();

const twoDaysLaterWeekday = (currentWeekday + 2) % 7;
const twoDaysLaterWeekdayString = weekdays[twoDaysLaterWeekday];

document.getElementById("weekdayin2days").innerHTML = twoDaysLaterWeekdayString;

const ThreeDaysLaterWeekday = (currentWeekday + 3) % 7;
const ThreeDaysLaterWeekdayString = weekdays[ThreeDaysLaterWeekday];

document.getElementById("weekdayin3days").innerHTML =
  ThreeDaysLaterWeekdayString;

const FourDaysLaterWeekday = (currentWeekday + 4) % 7;
const FourDaysLaterWeekdayString = weekdays[FourDaysLaterWeekday];

document.getElementById("weekdayin4days").innerHTML =
  FourDaysLaterWeekdayString;
