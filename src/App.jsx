import { Header } from './components/Header'
import { TimeAndLocation } from './components/TimeAndLocation'
import { CurrentWeather } from './components/CurrentWeather'
function App () {
  return (
    <div className='w-auto pt-8  h-screen bg-gradient-to-r from-blue-950 to-blue-700'>
      <main className='container mx-auto w-11/12  py-2 border-2 rounded-md '>
      <Header/>
      <TimeAndLocation />
      <CurrentWeather/>
      </main>
    </div>

  )
}

export default App
