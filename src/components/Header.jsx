import githubLogo from '../assets/github.svg'
const now = new Date()

export function Header () {
  return (
        <header>
            <div>
            <span>The Weather App</span>
            {`${now.getHours()}:${now.getMinutes()}`}
            <a href="">
            <img src="" alt="" />
            </a>

            </div>
        </header>
  )
}
