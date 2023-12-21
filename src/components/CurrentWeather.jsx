export function CurrentWeather () {
  return (
        <>

        <p className="text-center text-white">Clear or Cloudy</p>
        <div className="flex justify-around items-center px-2">
        <span className="icon-[solar--cloud-rain-bold-duotone] text-6xl text-white"></span>
            <span className="text-5xl text-white">14ºC</span>
            <div className="flex flex-col gap-1 font-light">
                <div className="flex items-center gap-1 text-white">
                <span className="icon-[solar--temperature-linear]"></span>
                    Real feel: 12ºC
                </div>
                <div className="flex items-center gap-1 text-white">
                <span className="icon-[solar--waterdrops-linear]"></span>
                    Humidity: 78%
                </div>
                <div className="flex items-center gap-1 text-white">
                <span className="icon-[solar--wind-linear]"></span>
                    Wind: 25 km/h
                </div>
            </div>
        </div>
        {/* amanecer / atardecer / high temp / lowe temp  */}
        <div className="flex justify-evenly  text-white my-4">
            <div className="flex items-center font-light">
                <span className="icon-[solar--sunrise-linear]"></span>
                Rise: 06:00
            </div>
            <div className="flex items-center font-light">
                <span className="icon-[solar--sunset-linear]"></span>
                Set: 19:00
            </div>
            <div className="flex items-center font-light">
                <span className="icon-[solar--arrow-up-linear]"></span>
                High: 18ºC
            </div>
            <div className="flex items-center font-light">
                <span className="icon-[solar--arrow-down-linear]"></span>
                Low: 8ºC
            </div>
        </div>
        </>

  )
}
