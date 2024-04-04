import  {useState} from 'react'
import {useNavigate} from 'react-router-dom'

interface Car {
  price: number
  year: number | null
  vehicleType: string
  location: string
  imageUrl: string
  title: string
  seatCount: number
  driverAvailability: boolean
}

// Define the type for the component props
interface SearchProps {
  carData: Car[]
}
// Main component
export default function Search({carData}: SearchProps) {
  const [sortedData, setSortedData] = useState<Car[]>(carData)
  const [searchInput, setSearchInput] = useState('')
  const navigate = useNavigate()

  const sortByPriceHighToLow = () => {
    const sorted = [...carData].sort((a, b) => b.price - a.price)
    setSortedData(sorted)
  }

  const sortByPriceLowToHigh = () => {
    const sorted = [...carData].sort((a, b) => a.price - b.price)
    setSortedData(sorted)
  }

  const sortByYear = () => {
    const sorted = [...carData].sort((a, b) => (b.year || 0) - (a.year || 0))
    setSortedData(sorted)
  }

  const sortByVehicleType = () => {
    const sorted = [...carData].sort((a, b) =>
      a.vehicleType.localeCompare(b.vehicleType),
    )
    setSortedData(sorted)
  }

  const handleSearch = () => {
    const navigate = useNavigate()
    const filteredData = carData.filter(
      (car) => car.location.toLowerCase() === searchInput.toLowerCase(),
    )

    setSortedData(filteredData)
  }

  return (
    <div className="outersearch">
      
      <div
        className="grid grid-cols-1 md:grid-cols-1 gap-8 mb-10 mt-20 mb-200 "
        id="search"
      >
        <div className="filters">
          <button
            onClick={sortByPriceHighToLow}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 max-w-1/4"
          >
            Sort by Price (High to Low)
          </button>
          <button
            onClick={sortByPriceLowToHigh}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 max-w-1/4"
          >
            Sort by Price (Low to High)
          </button>
          <button
            onClick={sortByYear}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 max-w-1/4"
          >
            Sort by Year
          </button>
          <button
            onClick={sortByVehicleType}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 max-w-1/4"
          >
            Sort by Vehicle Type
          </button>
        </div>
        <div className="flex items-center">
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search by location"
            className="px-4 py-2 border border-gray-300 rounded-md mr-2 focus:outline-none"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Search
          </button>
        </div>
        {sortedData.map((car, index) => (
          <div
            key={index}
            className="flex bg-white rounded-lg shadow-md"
            id="listing"
          >
            <img
              src={car.imageUrl}
              alt={`Car ${index + 1}`}
              className="w-50 h-40 object-cover rounded-l-lg id"
              id="carimage"
            />
            <div className="flex flex-col justify-around  p-4 top-4">
              <h2 className="text-xl font-bold mb-2">Title: {car.title}</h2>
              <p className="text-gray-600 mb-2">Location: {car.location}</p>
              <p className="text-gray-800 font-semibold">
                Price: {`$${car.price}`}
              </p>
              <p>Year: {car.year}</p>
              <p>Seat Count: {car.seatCount}</p>
              <p>Driver Available: {car.driverAvailability}</p>
              <p>Vehicle Type: {car.vehicleType}</p>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 max-w-1/4"
                onClick={() => {
                  console.log(car)
                  navigate('/Cardetail', {state: {car}})
                }}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
