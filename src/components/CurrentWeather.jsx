/* eslint-disable react/prop-types */

export function CurrentWeather ({ dataWeather, dataForecast }) {
  const timestampRise = dataWeather.sys.sunrise
  const timestampSet = dataWeather.sys.sunset
  const timeOptions = { hour: 'numeric', minute: 'numeric' }
  const timeRise = new Date(timestampRise * 1000).toLocaleString(
    'es-ES',
    timeOptions
  )
  const timeSet = new Date(timestampSet * 1000).toLocaleString(
    'es-ES',
    timeOptions
  )

  if (!dataForecast) {
    return <div>No Hay datos de forecast</div>
  }

  return (
    <div className="flex flex-col items-center relative rounded-xl backdrop-blur-xl border border-black/10 shadow-inner shadow-white/10 sm:col-span-7 col-span-10 bg-gradient-to-b from-indigo-950 from-50% to-blue-800 to-100% ">
      <div className="flex md:flex-row sm:flex-col md:justify-evenly sm:justify-center sm:items-center sm:pt-4">
        <section className="flex justify-around items-center px-2">

          <div className="flex flex-col gap-1 font-light">
            <div className="flex items-center gap-1 text-white">
              <span className="icon-[solar--temperature-linear]"></span>
              {`Real feel: ${Math.round(dataWeather.main.feels_like)} ºC`}
            </div>
            <div className="flex items-center gap-1 text-white">
              <span className="icon-[solar--waterdrops-linear]"></span>
              {`Humidity: ${dataWeather.main.humidity}%`}
            </div>
            <div className="flex items-center gap-1 text-white">
              <span className="icon-[solar--wind-linear]"></span>
              {`Wind: ${dataWeather.wind.speed} km/h`}
            </div>
          </div>
        </section>
        <section className="flex flex-col text-white my-4">
          <div className="flex items-center font-light">
            <span className="icon-[solar--sunrise-linear]"></span>
            Rise: {timeRise}
          </div>
          <div className="flex items-center font-light">
            <span className="icon-[solar--sunset-linear]"></span>
            Set: {timeSet}
          </div>
          <div className="flex items-center font-light">
            <span className="icon-[solar--arrow-up-linear]"></span>
            High: {Math.round(dataWeather.main.temp_max)}ºC
          </div>
          <div className="flex items-center font-light">
            <span className="icon-[solar--arrow-down-linear]"></span>
            Low: {Math.round(dataWeather.main.temp_min)}ºC
          </div>
        </section>
      </div>

      <section className="flex flex-col sm:flex-row justify-center gap-12 m-12 md:m-8 text-white">
        {dataForecast.list.slice(0, 3).map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center md:gap-2 p-2 px-6 bg-indigo-950 border border-indigo-100 shadow-lg rounded-lg"
          >
            <h2 className=" text-xl">{formatDateTime(item.dt)}</h2>
            <img
              className="h-12 w-12"
              src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              alt="icon-weather"
            />
            <span className="text-lg">{Math.round(item.main.temp)}º</span>
          </div>
        ))}
      </section>
    </div>
  )
}

const formatDateTime = (timestamp) => {
  const date = new Date(timestamp * 1000)
  const options = {

    hour: 'numeric',
    minute: 'numeric'
  }
  const formattedDateTime = new Intl.DateTimeFormat('es-ES', options).format(
    date
  )
  return formattedDateTime
}
