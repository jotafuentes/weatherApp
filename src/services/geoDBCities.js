export const GEOCITIES_ENDPOINT =
  'https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=50000&limit=5'

const GEO_API_KEY = import.meta.env.VITE_GEO_API_KEY
export const geoCitiesOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': GEO_API_KEY,
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
  }
}

export const fetchCities = (inputValue) => {
  return fetch(
    `${GEOCITIES_ENDPOINT}&namePrefix=${inputValue}`,
    geoCitiesOptions
  )
    .then((response) => response.json())
    .then((response) => {
      return {
        options: response.data.map((city) => {
          return {
            value: { lat: city.latitude, long: city.longitude },
            label: `${city.name}, ${city.countryCode}`
          }
        })
      }
    })
    .catch((error) => {
      return { options: [] }
    })
}
