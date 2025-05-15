// This is a simple weather app using OpenWeatherMap API
async function weatherApp() {
  const CityInput = document.getElementById("CityInput").value;
  const WeatherInfo = document.getElementById("WeatherInfo");
  const WeatherText = document.getElementById("WeatherText");

  const apiKey = "40716a6f11fb73481e0f4b82aba1209f";
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${CityInput}&units=metric&appid=${apiKey}`
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    WeatherText.innerHTML = `Weather in ${data.weather[0].main}:`;
    console.log(data);
    console.log(data.weather[0].main);
  } catch (error) {
    console.log("There was a problem with the fetch operation:", error);
  }
}
