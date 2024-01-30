/* eslint-disable react/prop-types */

export function TimeAndLocation ({ dataWeather }) {
  const timestamp = dataWeather.dt
  const fechaHora = new Date(timestamp * 1000).toLocaleString('en-US', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric', hour12: false })

  return (
        <div className="relative rounded-xl backdrop-blur-xl border border-black/10 shadow-inner shadow-white/10 col-span-3 ">

        <div className="flex justify-center my-3 text-white font-extralight">
            {fechaHora}

        </div>

        <h1 className="text-white text-3xl font-medium flex justify-center my-6">
            {`${dataWeather.name}, ${dataWeather.sys.country} `}
        </h1>
        </div>
  )
}
