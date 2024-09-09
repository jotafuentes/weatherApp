import { Search } from './components/Search'
import { TimeAndLocation } from './components/TimeAndLocation'
import { CurrentWeather } from './components/CurrentWeather'
import { useState } from 'react'
import { Forecast } from './components/Forecast'
import { fetchWeather, fetchForecast } from './services/weatherApi'

function App () {
  const [weather, setWeather] = useState()
  const [forecast, setForecast] = useState()

  const fetchDataAndSetStateWithCoords = (lat, lon) => {
    fetchWeather(lat, lon).then(setWeather)
    fetchForecast(lat, lon).then(setForecast)
  }

  // NOTE: merge functions
  const handleOnSearchChange = (searchData) => {
    const { lat, long } = searchData
    fetchDataAndSetStateWithCoords(lat, long)
  }

  return (
    <div className="min-h-screen  w-auto pt-8  bg-[#000532]">
      <header className="mx-auto">
        <Search onSearchChange={handleOnSearchChange} />
      </header>

      {weather && (
        <section className="max-w-7xl  grid grid-cols-10 md:auto-rows-[24rem] gap-4 mx-auto p-20 ">
          <TimeAndLocation dataWeather={weather} />
          <CurrentWeather dataWeather={weather} dataForecast={forecast} />
          <Forecast dataForecast={forecast} />
        </section>
      )}
    </div>
  )
}

export default App
