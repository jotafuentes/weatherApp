export const GEOCITIES_ENDPOINT = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=50000'

const GEO_API_KEY = import.meta.env.VITE_GEO_API_KEY
export const geoCitiesOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': GEO_API_KEY,
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'

  }
}
fetch(GEOCITIES_ENDPOINT, geoCitiesOptions)
  .then(response => response.json())

  .catch(err => console.log(err))
