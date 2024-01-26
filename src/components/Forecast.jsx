export function Forecast ({ dataForecast }) {
  if (!dataForecast) {
    return <div>No Hay datos de forecast</div>
  }
  return (
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
  )
}

const formatDateTime = (timestamp) => {
  const date = new Date(timestamp * 1000)
  const options = { weekday: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' }
  const formattedDateTime = new Intl.DateTimeFormat('es-ES', options).format(date)
  return formattedDateTime
}
