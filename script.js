async function weatherApp() {

  const WeatherInfo = document.getElementById("WeatherInfo");
  const WeatherText = document.getElementById("WeatherText");
  const ThisTemperature = document.getElementById("ThisTemperature");
  const ThisHumidity = document.getElementById("ThisHumidity");
  const ThisWindSpeed = document.getElementById("ThisWindSpeed");
  const THisPressuer = document.getElementById("THisPressuer");
  const CityInput = document.getElementById("CityInput").value.trim();

  if (CityInput === "") {
    alert("Please enter a city name");
    return;
  }

  const apiKey = "40716a6f11fb73481e0f4b82aba1209f";
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${CityInput}&units=metric&appid=${apiKey}`
    );

    if (!response.ok) {
      throw new Error("City not found or network error");
    }

    const data = await response.json();
    WeatherText.innerHTML = `Weather in ${CityInput}: ${data.weather[0].main}`;
    ThisTemperature.innerHTML = `${data.main.temp}°C`;
    ThisHumidity.innerHTML = `${data.main.humidity}%`;
    ThisWindSpeed.innerHTML = `${data.wind.speed} m/s`;
    THisPressuer.innerHTML = `${data.main.pressure} hPa`;

    console.log(data);
  } catch (error) {
    WeatherText.innerHTML = "Error fetching weather data.";
    console.log("There was a problem with the fetch operation:", error);
  }
}
