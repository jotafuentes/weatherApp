/* eslint-disable react/prop-types */

export function TimeAndLocation ({ dataWeather }) {
  const timestamp = dataWeather.dt
  const fechaHora = new Date(timestamp * 1000).toLocaleString('en-US', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric', hour12: false })

  return (
        <div className=" flex flex-col justify-evenly items-center relative rounded-xl backdrop-blur-xl border border-black/10 shadow-inner shadow-white/10 sm:col-span-3 col-span-10 bg-gradient-to-b from-indigo-950 from-50% to-blue-800 to-100% ">

        <div className=" text-center my-3 text-white font-extralight">
            {fechaHora}
        </div>

        <h1 className="text-white text-3xl font-medium flex justify-center align-middle my-6">
            {`${dataWeather.name}, ${dataWeather.sys.country} `}
        </h1>
        <span className="text-5xl text-white">{Math.round(dataWeather.main.temp)}ºC</span>
        <img src={`https://openweathermap.org/img/wn/${dataWeather.weather[0].icon}@2x.png`} alt="weather icon" />
        <p className="text-center text-white text-2xl">{dataWeather.weather[0].description}</p>
        </div>
  )
}
