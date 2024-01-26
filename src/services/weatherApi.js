export function dataWeather (lat, lon, endpoint) {
  const API_KEY = import.meta.env.VITE_API_KEY

  return fetch(`${endpoint}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    .then(response => response.json())
}
