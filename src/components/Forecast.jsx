/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import { Chart } from 'chart.js/auto'

export function Forecast ({ dataForecast }) {
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
  const dataMin = dataForecast?.list.slice(0, sample).map((item, idx) => {
    return Math.round(item.main.temp_min)
  })

  return (
        <div className='min-h-[20rem]  relative rounded-xl backdrop-blur-xl border border-black/10 shadow-inner shadow-white/10  col-span-10  bg-gradient-to-b from-indigo-950 from-50% to-blue-800 to-100% '>
          <div className='flex justify-center items-center h-full '>

            <Line

                data={{
                  labels,
                  datasets: [
                    {
                      label: 'Max Temperature ºC',
                      data: dataMax,
                      fill: true,
                      borderColor: 'red',
                      tension: 0.1,
                      pointStyle: 'circle',
                      pointRadius: 5,
                      pointHoverRadius: 10,
                      pointBackgroundColor: 'red'
                    },
                    {
                      label: 'Min Temperature ºC',
                      data: dataMin,
                      fill: true,
                      borderColor: 'blue',
                      tension: 0.1,
                      pointStyle: 'circle',
                      pointRadius: 5,
                      pointHoverRadius: 10,
                      pointBackgroundColor: 'blue'
                    }
                  ]

                }}

            />
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
