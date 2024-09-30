function dataWeather (lat, lon, endpoint, onSearchChange) {
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY

  return fetch(
    `${endpoint}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  )
    .then((response) => {
      if (!response.ok) throw new Error('bad response')
      return response
    })
    .then((response) => response.json())
}

const WEATHER_ENDPPOINT = 'https://api.openweathermap.org/data/2.5/weather'
const FORECAST_ENDPOINT = 'https://api.openweathermap.org/data/2.5/forecast'

export function fetchWeather (lat, lon) {
  return dataWeather(lat, lon, WEATHER_ENDPPOINT)
}

export function fetchForecast (lat, lon) {
  return dataWeather(lat, lon, FORECAST_ENDPOINT)
}
