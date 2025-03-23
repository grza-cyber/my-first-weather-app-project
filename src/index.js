function displayTemperature(response) {
    let temperatureElement = document.querySelector("#temperatures");
    let currentTemperature = Math.round(response.data.temperature.current);
    temperatureElement.innerHTML = currentTemperature;
    let cityHeader = document.querySelector("h1");
    cityHeader.innerHTML = response.data.city;
  }

  function displayCity(event) {
    event.preventDefault();
    let searchInputElement = document.querySelector("#searchingCity");
    let city = searchInputElement.value;

    console.log(city);

    let apiKey = "4a76f73ec0tb4cf9o9b3b1c325220356";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(displayTemperature);
  }

  let formElement = document.querySelector("#searchCity");
  formElement.addEventListener("submit", displayCity);