import { Link } from "react-router-dom"

export default function Video() {
  return (
    <div className="vidtext">
      <video autoPlay loop muted playsInline>
        <source
          src="https://github.com/IbkEhinmowo/RentFaster/raw/main/src/assets/special.mp4"
          type="video/mp4"
        />
      </video>
      <div id="playbutton">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          Find the perfect car for your next adventure
        </h1>

        <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div>
            <label
              htmlFor="location"
              className="block text-gray-700 font-bold mb-2"
            >
              Location:
            </label>
            <input
              type="text"
              id="location"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="dates"
              className="block text-gray-700 font-bold mb-2"
            >
              Dates:
            </label>
            <input
              type="text"
              id="dates"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="vehicle-type"
              className="block text-gray-700 font-bold mb-2"
            >
              Vehicle Type:
            </label>
            <input
              type="text"
              id="vehicle-type"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex items-end">
            <div className="flex items-center">
              <input type="checkbox" id="driver" className="mr-2" />
              <label htmlFor="driver" className="text-gray-700">
                I need a driver
              </label>
            </div>
            <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 ml-auto ml-2">
              <Link to="/search">Search</Link>
              
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
