import { AsyncPaginate } from 'react-select-async-paginate'
import githubLogo from '../assets/github.svg'
import { fetchCities } from '../services/geoDBCities'

export function Search ({ onSearchChange }) {
  const handleOnChange = (searchData) => {
    onSearchChange(searchData.value)
  }

  const handleClick = () => {
    navigator.geolocation.getCurrentPosition((locationData) => {
      const geoLat = locationData.coords.latitude
      const geoLon = locationData.coords.longitude

      // Llamar a onLocation con las coordenadas obtenidas
      onSearchChange({ lat: geoLat, lon: geoLon })

      console.log('geoLon:', geoLon)
    })
  }

  return (
    <div>
      <div className="  flex justify-between px-8">
        <span className="flex flex-grow basis-0 text-3xl  font-sans font-extrabold  bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
          The Weather App
        </span>

        <a
          href="https://github.com/jotafuentes/weatherApp"
          className="flex flex-grow justify-end "
          target="_blank" rel="noreferrer"
        >
          <img src={githubLogo} alt="gitHub repository link" />
        </a>
      </div>
      <div className="flex justify-center items-center gap-2 mt-4">
        <AsyncPaginate
          onChange={handleOnChange}
          className="p-1 px-2 rounded-xl w-2/5"
          placeholder="Search for city"
          debounceTimeout={600}
          loadOptions={fetchCities}
        />
        <svg
          id='geoLocation'
          onClick={handleClick}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-white cursor-pointer transition-all ease-in hover:scale-125"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
          />
        </svg>
      </div>
    </div>
  )
}
