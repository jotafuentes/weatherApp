export function Forecast ({ dataForecast }) {
  if (!dataForecast) {
    return <div>No Hay datos de forecast</div>
  }
  return (
        <div className="relative rounded-xl backdrop-blur-xl border border-black/10 shadow-inner shadow-white/10 col-span-10">

        <div className="flex justify-between items-center">

            {dataForecast.list.slice(0, 7).map((item, idx) => (

              <div key={idx} className="flex flex-col gap-2 ">
                <h3 className="text-white">{formatDateTime(item.dt)}</h3>
                <img className="h-12 w-12" src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt="icon-weather" />
                <span className="text-white">{Math.round(item.main.temp)} ºC</span>
              </div>
            )
            )}
        </div>
        </div>
  )
}

const formatDateTime = (timestamp) => {
  const date = new Date(timestamp * 1000)
  const options = { weekday: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' }
  const formattedDateTime = new Intl.DateTimeFormat('es-ES', options).format(date)
  return formattedDateTime
}
