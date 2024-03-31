import { Link } from "react-router-dom"
function Taskbar() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <a href="#" className="text-2xl font-bold text-gray-800">
          Rentfaster
        </a>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Home
              </a>
            </li>
            <li>
              <Link to="/search">
                Search
              </Link>   
         
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Become Host
              </a>
            </li>
          </ul>
        </nav>
        <div className="buttons">
          <button className="text-gray-600 hover:text-gray-800">
            Login In
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  )
}

export default Taskbar
