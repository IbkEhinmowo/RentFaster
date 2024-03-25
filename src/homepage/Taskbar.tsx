import Headroom from 'react-headroom'
import {useState, useEffect} from 'react'

export default function Taskbar() {
  const [state, setState] = useState(false)
  const [shouldRenderCounter, setShouldRenderCounter] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShouldRenderCounter(true)
    }, 4000)

    return () => clearTimeout(timeout)
  }, [])

  const handleSidebar = () => {
    setState(!state) // Toggle the state by negating its current value
  }
  const headroomStyle = {}
  return (
    <div className="taskbar">
      {shouldRenderCounter && (
        <Headroom style={headroomStyle} disableInlineStyles={true}>
          <div className="navig">
            <nav className="nav">
              <h1>
                <a href="./">RentFaster®</a>
              </h1>
              <ul>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#new">Ride</a>
                </li>
                <li>
                  <a href="#thinking">Drive</a>
                </li>
                <li>
                  <a href="#careers">Host</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
              <div>
                <button>Sign in </button>
                <span> </span>
                <button>Sign up </button>
              </div>
            </nav>
          </div>
        </Headroom>
      )}
    </div>
  )
}
