import { Header } from './components/Header'

function App () {
  return (
    <div className='w-full flex justify-center items-center  h-screen bg-gradient-to-r from-cyan-400 to-green-400'>
      <main className='container mx-auto w-11/12 h-4/5 py-2 border-2 rounded-md bg-cyan-400/20'>
      <Header/>
      </main>
    </div>

  )
}

export default App
