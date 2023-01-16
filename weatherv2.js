const API_KEY = "a76aca2cbf214ceb941193109221012";

async function getWeather(city) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
  );
  const data = await response.json();
  return data;
}

async function displayweather() {
  const city = document.getElementById("input").value;
  const cityWeather = await getWeather(city);

  document.getElementById(
    "currenttemp"
  ).innerHTML = `${cityWeather.current.temp_c}°C`;

  document.getElementById(
    "currenticon"
  ).innerHTML = `<img src="${cityWeather.current.condition.icon}">`;
}
