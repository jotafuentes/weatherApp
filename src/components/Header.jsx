import githubLogo from '../assets/github.svg'

export function Header () {
  return (
        <header>
            <div className='flex justify-between px-2'>
            <span className='flex flex-grow basis-0 text-3xl font-extrabold  bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500'>The Weather App</span>

            <a
            href="https://github.com/jotafuentes/weatherApp"
            className='flex flex-grow justify-end '
            >
            <img src={githubLogo} alt="gitHub repository link" />
            </a>
            </div>
            <form className='flex justify-center items-center gap-2 mt-4'>
              <input type="text" placeholder='search city' className='p-1 px-2 rounded-xl w-2/6'/>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-white cursor-pointer transition-all ease-in hover:scale-125">
  <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white cursor-pointer transition-all ease-in hover:scale-125">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
</svg>

            </form>

        </header>
  )
}
