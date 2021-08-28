function showTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "856b5bb0ab2beee3a272dcebd03929e8";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}=${apiKey}&units=metric`;

temperatureElement.innerHTML = `${temperature}°C`;
let description = document.querySelector("#temperature-description");
axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);

let city = "London";


let h1 = document.querySelector("#city");
h1.innerHTML = city;


let now = new Date();
let h3 = document.querySelector("h3");

let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let year = now.getFullYear();
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[now.getDay()];
let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
let month = months[now.getMonth()];

h3.innerHTML = `${day}, ${month} ${date}, ${year}, ${hours}:${minutes}`;

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");

  let h2 = document.querySelector("h2");
  if (searchInput.value) {
    h2.innerHTML = `Searching for ${searchInput.value}...`;
  } else {
    h2.innerHTML = null;
    alert("Please enter a city");
  }
}
let form = document.querySelector("form");
form.addEventListener("submit", search);
