export const GEOCITIES_ENDPOINT = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=50000'

export const geoCitiesOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'c078f4698cmsh9c3b14b67c13422p142135jsnff08143db1b1',
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'

  }
}
fetch(GEOCITIES_ENDPOINT, geoCitiesOptions)
  .then(response => response.json())

  .catch(err => console.log(err))
