import Taskbar from './homepage/Taskbar'
import {Home} from './homepage/Home'
import Search from './Search/Search'
import { useState } from 'react'
import {HashRouter as Router, Routes, Route} from 'react-router-dom'
//  //
const carData = [
  {
    imageUrl:
      'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-S-Desktop-LHD-6.22.jpg',
    alt: 'Car 1',
    title: 'Tesla Model 3',
    location: 'Vancouver, BC',
    price: 45.99,
    year: 2023,
    seatCount: 5,
    driverAvailability: true,
    vehicleType: 'Electric',
  },
  {
    imageUrl:
      'https://cdn.motor1.com/images/mgl/9xkvm/s1/mclaren-p1-5th-anniversary.webp',
    alt: 'Car 2',
    title: 'McLaren P1',
    location: 'North Vancouver',
    price: 70.22,
    year: 2022,
    seatCount: 2,
    driverAvailability: false,
    vehicleType: 'Electric',
  },
  {
    imageUrl:
      'https://www.topgear.com/sites/default/files/2023/07/1%20Mercedes-AMG%20A45.jpeg',
    alt: 'Car 3',
    title: 'Mercedes-Benz AMG A45',
    location: 'Burnaby',
    price: 34.95,
    year: 2020,
    seatCount: 5,
    driverAvailability: true,
    vehicleType: 'Diesel',
  },
  {
    imageUrl: 'https://placeholder.com/300x200', // Placeholder image
    alt: 'Car 4',
    title: 'Ford Mustang GT',
    location: 'Richmond',
    price: 40.5,
    year: 2016, // Year is not specified
    seatCount: 4, // Assuming 4 seats for a standard Ford Mustang GT
    driverAvailability: true,
    vehicleType: 'Diesel',
  },
  {
    imageUrl: 'https://placeholder.com/300x200', // Placeholder image
    alt: 'Car 5',
    title: 'Toyota Camry',
    location: 'Surrey',
    price: 28.0,
    year: 2018, // Year is not specified
    seatCount: 5, // Assuming 5 seats for a standard Toyota Camry
    driverAvailability: true,
    vehicleType: 'Electric',
  },
  {
    imageUrl: 'https://placeholder.com/300x200', // Placeholder image
    alt: 'Car 6',
    title: 'Honda Civic',
    location: 'New Westminster',
    price: 25.75,
    year: 2017, // Year is not specified
    seatCount: 5, // Assuming 5 seats for a standard Honda Civic
    driverAvailability: true,
    vehicleType: 'Diesel',
  },
  {
    imageUrl: 'https://placeholder.com/300x200', // Placeholder image
    alt: 'Car 7',
    title: 'Audi A6',
    location: 'Langley',
    price: 55.3,
    year: null, // Year is not specified
    seatCount: 5, // Assuming 5 seats for a standard Audi A6
    driverAvailability: true,
    vehicleType: 'Electric',
  },
  {
    imageUrl: 'https://placeholder.com/300x200', // Placeholder image
    alt: 'Car 8',
    title: 'BMW 3 Series',
    location: 'Coquitlam',
    price: 48.1,
    year: 2021, // Year is not specified
    seatCount: 5, // Assuming 5 seats for a standard BMW 3 Series
    driverAvailability: false,
    vehicleType: 'Diesel',
  },
  {
    imageUrl: 'https://placeholder.com/300x200', // Placeholder image
    alt: 'Car 9',
    title: 'Jeep Wrangler',
    location: 'Delta',
    price: 38.9,
    year: 2019, // Year is not specified
    seatCount: 4, // Assuming 4 seats for a standard Jeep Wrangler
    driverAvailability: true,
    vehicleType: 'Electric',
  },
  {
    imageUrl: 'https://placeholder.com/300x200', // Placeholder image
    alt: 'Car 10',
    title: 'Porsche 911',
    location: 'West Vancouver',
    price: 120.0,
    year: 2018, // Year is not specified
    seatCount: 2, // Assuming 2 seats for a standard Porsche 911
    driverAvailability: true,
    vehicleType: 'Diesel',
  },
]


export function App() {
  return (
    <div className="font-medium">
      <Router>
        <Taskbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search carData={carData} />} />
        </Routes>
      </Router>
    </div>
  )
}
