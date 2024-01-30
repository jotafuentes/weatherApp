/* eslint-disable react/prop-types */

export function CurrentWeather ({ dataWeather }) {
  const timestampRise = dataWeather.sys.sunrise
  const timestampSet = dataWeather.sys.sunset
  const timeOptions = { hour: 'numeric', minute: 'numeric' }
  const timeRise = new Date(timestampRise * 1000).toLocaleString('es-ES', timeOptions)
  const timeSet = new Date(timestampSet * 1000).toLocaleString('es-ES', timeOptions)

  return (
        <div className='relative rounded-xl backdrop-blur-xl border border-black/10 shadow-inner shadow-white/10 col-span-7'>

        <p className="text-center text-white text-2xl">{dataWeather.weather[0].description}</p>
        <div className="flex justify-around items-center px-2">
        {/* }<span className="icon-[solar--cloud-rain-bold-duotone] text-6xl text-white"></span> */}
        <img src={`https://openweathermap.org/img/wn/${dataWeather.weather[0].icon}@2x.png`} alt="weather icon" />
            <span className="text-5xl text-white">{Math.round(dataWeather.main.temp)}ºC</span>
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
        </div>

        <div className="flex justify-evenly  text-white my-4">
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
        </div>
        </div>

  )
}
