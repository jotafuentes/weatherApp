/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import { Chart } from 'chart.js/auto'

export function Forecast ({ dataForecast, dataWeather }) {
  const [sample, setSample] = useState(15)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSample(10)
      } if (window.innerWidth < 640) {
        setSample(7)
      } else {
        setSample(15)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const labels = dataForecast?.list.slice(0, sample).map((item, idx) => {
    return [formatDateTime(item.dt)]
  })

  const dataMax = dataForecast?.list.slice(0, sample).map((item, idx) => {
    return Math.round(item.main.temp_max)
  })

  return (
    <>
        <div className='sm:hidden md:block min-h-[20rem]  relative rounded-xl backdrop-blur-xl border border-black/10 shadow-inner shadow-white/10  col-span-10  bg-gradient-to-b from-indigo-950 from-50% to-blue-800 to-100% '>
          <div className='flex justify-center items-center h-full '>

            <Line

                data={{
                  labels,
                  datasets: [
                    {
                      label: 'Temperature ºC',
                      data: dataMax,
                      fill: true,
                      borderColor: 'red',
                      tension: 0.1,
                      pointStyle: 'circle',
                      pointRadius: 5,
                      pointHoverRadius: 10,
                      pointBackgroundColor: 'red'
                    }

                  ]

                }}

            />
          </div>
        </div>
        <div className='md:hidden min-h-[10rem] overflow-scroll  flex items-center relative rounded-xl backdrop-blur-xl border border-black/10 shadow-inner shadow-white/10  col-span-10  bg-gradient-to-b from-indigo-950 from-50% to-blue-800 to-100% '>
        {dataForecast.list.slice(0, 15).map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center md:gap-3 p-4 text-white"
          >
            <h2 className=" text-xl">{reduceFormatDateTime(item.dt)}</h2>
            <img
              className="h-12 w-12"
              src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              alt="icon-weather"
            />
            <span className="text-xl">{Math.round(item.main.temp)}º</span>
          </div>
        ))}

        </div>

    </>
  )
}

const formatDateTime = (timestamp) => {
  const date = new Date(timestamp * 1000)
  const options = { weekday: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' }
  const formattedDateTime = new Intl.DateTimeFormat('es-ES', options).format(date)
  return formattedDateTime
}

const reduceFormatDateTime = (timestamp) => {
  const date = new Date(timestamp * 1000)
  const options = { hour: 'numeric', minute: 'numeric' }
  const formattedDateTime = new Intl.DateTimeFormat('es-ES', options).format(date)
  return formattedDateTime
}
