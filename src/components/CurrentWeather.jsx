export function CurrentWeather () {
  return (
        <div className="flex flex-col items-center text-white">
            <p>Clear or Cloudy</p>
            <div className="w-2/3 my-3 flex justify-between items-center">
                <img src="#" className=""/>
                <span className="text-2xl ">19ºC</span>
                <div className="flex flex-col ">
                    <div>
                    <span className="icon-[solar--temperature-linear]"></span>
                        sensación
                    </div>
                    <div>
                    <span className="icon-[solar--waterdrops-linear]"></span>
                        humedad</div>
                    <div>
                    <span className="icon-[solar--wind-linear]"></span>
                        viento</div>
                </div>
            </div>
        </div>

  )
}
