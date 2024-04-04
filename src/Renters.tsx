import React, { useState } from 'react'

interface Car {
  imageUrl: string;
  alt: string;
  title: string;
  location: string;
  price: number;
  year: number;
  seatCount: number;
  driverAvailability: boolean;
  vehicleType: string;
}

interface RentersProps {
  addCarData: (car: Car) => void;
}

function Renters({ addCarData }: RentersProps) {
  const [newCar, setNewCar] = useState<Car>({
    imageUrl: '',
    alt: '',
    title: '',
    location: '',
    price: 0,
    year: 0,
    seatCount: 0,
    driverAvailability: false,
    vehicleType: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setNewCar({ ...newCar, [name]: value })
  }

  // rest of your code
  const handleAddCar = () => {
    // You can add validation logic here if needed
    addCarData(newCar)
    setNewCar({
      imageUrl: '',
      alt: '',
      title: '',
      location: '',
      price: 0,
      year: 0,
      seatCount: 0,
      driverAvailability: false,
      vehicleType: '',
    })
  }

  return (
    <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center ">
      
      <form className="container max-w-screen-lg mx-auto bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
        <h1 className="font-medium text-lg font-black">
          List Your Car for Rental
        </h1>
        <label className="md:col-span-5">
          Image URL:
          <input
            type="text"
            name="imageUrl"
            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            value={newCar.imageUrl}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Alt Text:
          <input
            type="text"
            name="alt"
            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            value={newCar.alt}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Title:
          <input
            type="text"
            name="title"
            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            value={newCar.title}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Location:
          <input
            type="text"
            name="location"
            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            value={newCar.location}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Price:
          <input
            type="number"
            name="price"
            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            value={newCar.price}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Year:
          <input
            type="number"
            name="year"
            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            value={newCar.year}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Seat Count:
          <input
            type="number"
            name="seatCount"
            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            value={newCar.seatCount}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Driver Availability:
          <input
            type="checkbox"
            name="driverAvailability"
            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            checked={newCar.driverAvailability}
            onChange={(e) =>
              setNewCar({...newCar, driverAvailability: e.target.checked})
            }
          />
        </label>
        <br />
        <label>
          Vehicle Type:
          <input
            type="text"
            name="vehicleType"
            value={newCar.vehicleType}
            onChange={handleChange}
            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
          />
        </label>
        <br />
        <button
          type="button"
          onClick={handleAddCar}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        >
          Add Car
        </button>
      </form>
    </div>
  )
}

export default Renters
