const API_KEY = "79e6fe3dbebdf4dc428f44c6566dfdbe";

export const fetchWeather = async (city) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    const data = await response.json();

    return {
      temperature: data.main?.temp,
      condition: data.weather?.[0]?.main,
      humidity: data.main?.humidity,
    };
  } catch (error) {
    console.error("Weather Error:", error);

    return {
      temperature: "N/A",
      condition: "Unknown",
      humidity: "N/A",
    };
  }
};