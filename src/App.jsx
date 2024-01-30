import { Search } from './components/Search'
import { TimeAndLocation } from './components/TimeAndLocation'
import { CurrentWeather } from './components/CurrentWeather'
import { useState } from 'react'
import { Forecast } from './components/Forecast'
import { dataWeather } from './services/weatherApi'

function App () {
  const [weather, setWeather] = useState()
  const [forecast, setForecast] = useState()

  const WEATHER_ENDPPOINT = 'https://api.openweathermap.org/data/2.5/weather'
  const FORECAST_ENDPOINT = 'https://api.openweathermap.org/data/2.5/forecast'

  const fetchDataAndSetState = (lat, lon, setData, endpoint) => {
    dataWeather(lat, lon, endpoint)
      .then(data => setData(data))
  }

  const handleClickLocation = (locationData) => {
    const { lat, lon } = locationData

    fetchDataAndSetState(lat, lon, setWeather, WEATHER_ENDPPOINT)
    fetchDataAndSetState(lat, lon, setForecast, FORECAST_ENDPOINT)
  }

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(' ')

    fetchDataAndSetState(lat, lon, setWeather, WEATHER_ENDPPOINT)
    fetchDataAndSetState(lat, lon, setForecast, FORECAST_ENDPOINT)
  }

  return (
    <div className='min-h-screen w-auto pt-8  h-screen bg-gradient-to-tl from-gray-900 from-5% to-sky-800 to-95%'>
      <header>
        <Search
          onSearchChange={handleOnSearchChange}
          onLocation={handleClickLocation}/>
      </header>

      {weather && (

      <section className='  w-full max-w-7xl grid grid-col-10 auto-rows-[20rem] gap-4 mx-auto p-20'>

        <TimeAndLocation dataWeather={weather} />
        <CurrentWeather dataWeather={weather}/>
        <Forecast dataForecast={forecast}/>

      </section>
      )}

      {/* <main className='container mx-auto w-11/12  py-2 border-2 rounded-md '>
      <Header onSearchChange={handleOnSearchChange} onLocation={handleClickLocation}/>
      {weather && (
        <div>

          <TimeAndLocation dataWeather={weather}/>
          <CurrentWeather dataWeather={weather}/>
          <Forecast dataForecast={forecast}/>
        </div>
      )}
      </main> */}
    </div>

  )
}

export default App
