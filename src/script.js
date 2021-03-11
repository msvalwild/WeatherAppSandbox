function formatDate(date) {
  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  let currentDay = days[date.getDay()];
  let currentMonth = months[date.getMonth()];
  let currentDate = date.getDate();
  let hours = now.getHours();
  let minutes = now.getMinutes();

  return `${currentDay}, ${currentMonth} ${currentDate} <br/> ${hours}:${minutes}`;
}

let now = new Date();
let todayDate = document.querySelector("#todayDate");
todayDate.innerHTML = formatDate(now);

function tempC() {
  event.preventDefault();
  let h4 = document.querySelector("h4");
  h4.innerHTML = "-3";
}
let tempCLink = document.querySelector("link");
tempCLink.addEventListener("click", tempC);

function tempF() {
  event.preventDefault();
  let h4 = document.querySelector("h4");
  h4.innerHTML = "27";
}
let tempFLink = document.querySelector("link");
tempFLink.addEventListener("click", tempF);

function showTemp(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
}

function submitCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");
  let city = document.querySelector("h5");
  if (searchInput.value) {
    city.innerHTML = `${searchInput.value}`;
    searchCity(searchInput.value);
  } else {
    alert("Please type a city");
  }
}
function searchCity(city) {
  let apiKey = "41398c377c1e7843b58672992d67d0cf";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(`${apiUrl}`).then(showTemp);
}
let form = document.querySelector("#search-city");
form.addEventListener("submit", submitCity);
