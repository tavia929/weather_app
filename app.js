let apiKey = "856b5bb0ab2beee3a272dcebd03929e8";
let city = "London";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;

function showTemperature(response) {
  console.log(response.data);
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = `${temperature}°C`;
  let description = document.querySelector("#temperature-description");
  description.innerHTML = response.data.weather[0].description;
}

let h1 = document.querySelector("#city");
h1.innerHTML = city;

axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);

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
