import Taskbar from './homepage/Taskbar'
import {Home} from './homepage/Home'
import Search from './Search'
import { useState } from 'react'
import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import CarDetail from './Cardetail'
import Booking from './Booking'
import Renters from './Renters'
//  //
export function App() {
  const [carData, setCarData] = useState([
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
    imageUrl:
      'https://fordauthority.com/wp-content/uploads/2017/11/2018-Ford-Mustang-GT-in-Magnetic.jpg', // Placeholder image
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
    imageUrl:
      'https://toyotacanada.scene7.com/is/image/toyotacanada/2025_Toyota%20Camry?ts=1704989350901&dpr=off', // Placeholder image
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
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/2017_Honda_Civic_SR_VTEC_1.0_Front.jpg/560px-2017_Honda_Civic_SR_VTEC_1.0_Front.jpg', // Placeholder image
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
    imageUrl:
      'https://cdn.motor1.com/images/mgl/lXM9O/s1/2020-audi-a6-allroad-quattro.webp', // Placeholder image
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
    imageUrl:
      'https://www.topgear.com/sites/default/files/2022/09/1-BMW-3-Series.jpg', // Placeholder image
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
    imageUrl:
      'https://media.ed.edmunds-media.com/jeep/wrangler/2024/oem/2024_jeep_wrangler_convertible-suv_rubicon-392_fq_oem_1_1600.jpg', // Placeholder image
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
    imageUrl:
      'https://i.gaw.to/vehicles/photos/40/25/402523-2021-porsche-911.jpg?1024x640', // Placeholder image
    alt: 'Car 10',
    title: 'Porsche 911',
    location: 'West Vancouver',
    price: 120.0,
    year: 2018, // Year is not specified
    seatCount: 2, // Assuming 2 seats for a standard Porsche 911
    driverAvailability: true,
    vehicleType: 'Diesel',
  },
    // Add more initial car data as needed
  ]);




  const addCarData = (newCar: CarData) => {
    setCarData([...carData, newCar])
  }
  
interface CarData {
  imageUrl: string
  alt: string
  title: string
  location: string
  price: number
  year: number | null
  seatCount: number
  driverAvailability: boolean
  vehicleType: string
}

// const carData: CarData[] = [
//   {
//     imageUrl:
//       'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-S-Desktop-LHD-6.22.jpg',
//     alt: 'Car 1',
//     title: 'Tesla Model 3',
//     location: 'Vancouver, BC',
//     price: 45.99,
//     year: 2023,
//     seatCount: 5,
//     driverAvailability: true,
//     vehicleType: 'Electric',
//   },
//   {
//     imageUrl:
//       'https://cdn.motor1.com/images/mgl/9xkvm/s1/mclaren-p1-5th-anniversary.webp',
//     alt: 'Car 2',
//     title: 'McLaren P1',
//     location: 'North Vancouver',
//     price: 70.22,
//     year: 2022,
//     seatCount: 2,
//     driverAvailability: false,
//     vehicleType: 'Electric',
//   },
//   {
//     imageUrl:
//       'https://www.topgear.com/sites/default/files/2023/07/1%20Mercedes-AMG%20A45.jpeg',
//     alt: 'Car 3',
//     title: 'Mercedes-Benz AMG A45',
//     location: 'Burnaby',
//     price: 34.95,
//     year: 2020,
//     seatCount: 5,
//     driverAvailability: true,
//     vehicleType: 'Diesel',
//   },
//   {
//     imageUrl:
//       'https://fordauthority.com/wp-content/uploads/2017/11/2018-Ford-Mustang-GT-in-Magnetic.jpg', // Placeholder image
//     alt: 'Car 4',
//     title: 'Ford Mustang GT',
//     location: 'Richmond',
//     price: 40.5,
//     year: 2016, // Year is not specified
//     seatCount: 4, // Assuming 4 seats for a standard Ford Mustang GT
//     driverAvailability: true,
//     vehicleType: 'Diesel',
//   },
//   {
//     imageUrl:
//       'https://toyotacanada.scene7.com/is/image/toyotacanada/2025_Toyota%20Camry?ts=1704989350901&dpr=off', // Placeholder image
//     alt: 'Car 5',
//     title: 'Toyota Camry',
//     location: 'Surrey',
//     price: 28.0,
//     year: 2018, // Year is not specified
//     seatCount: 5, // Assuming 5 seats for a standard Toyota Camry
//     driverAvailability: true,
//     vehicleType: 'Electric',
//   },
//   {
//     imageUrl:
//       'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/2017_Honda_Civic_SR_VTEC_1.0_Front.jpg/560px-2017_Honda_Civic_SR_VTEC_1.0_Front.jpg', // Placeholder image
//     alt: 'Car 6',
//     title: 'Honda Civic',
//     location: 'New Westminster',
//     price: 25.75,
//     year: 2017, // Year is not specified
//     seatCount: 5, // Assuming 5 seats for a standard Honda Civic
//     driverAvailability: true,
//     vehicleType: 'Diesel',
//   },
//   {
//     imageUrl:
//       'https://cdn.motor1.com/images/mgl/lXM9O/s1/2020-audi-a6-allroad-quattro.webp', // Placeholder image
//     alt: 'Car 7',
//     title: 'Audi A6',
//     location: 'Langley',
//     price: 55.3,
//     year: null, // Year is not specified
//     seatCount: 5, // Assuming 5 seats for a standard Audi A6
//     driverAvailability: true,
//     vehicleType: 'Electric',
//   },
//   {
//     imageUrl:
//       'https://www.topgear.com/sites/default/files/2022/09/1-BMW-3-Series.jpg', // Placeholder image
//     alt: 'Car 8',
//     title: 'BMW 3 Series',
//     location: 'Coquitlam',
//     price: 48.1,
//     year: 2021, // Year is not specified
//     seatCount: 5, // Assuming 5 seats for a standard BMW 3 Series
//     driverAvailability: false,
//     vehicleType: 'Diesel',
//   },
//   {
//     imageUrl:
//       'https://media.ed.edmunds-media.com/jeep/wrangler/2024/oem/2024_jeep_wrangler_convertible-suv_rubicon-392_fq_oem_1_1600.jpg', // Placeholder image
//     alt: 'Car 9',
//     title: 'Jeep Wrangler',
//     location: 'Delta',
//     price: 38.9,
//     year: 2019, // Year is not specified
//     seatCount: 4, // Assuming 4 seats for a standard Jeep Wrangler
//     driverAvailability: true,
//     vehicleType: 'Electric',
//   },
//   {
//     imageUrl:
//       'https://i.gaw.to/vehicles/photos/40/25/402523-2021-porsche-911.jpg?1024x640', // Placeholder image
//     alt: 'Car 10',
//     title: 'Porsche 911',
//     location: 'West Vancouver',
//     price: 120.0,
//     year: 2018, // Year is not specified
//     seatCount: 2, // Assuming 2 seats for a standard Porsche 911
//     driverAvailability: true,
//     vehicleType: 'Diesel',
//   },
// ]


  return (
    <div className="font-medium">
      <Router>
        <Taskbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search carData={carData} />} />
          <Route path="/Cardetail" element={<CarDetail />} />
          <Route path="/Booking" element={<Booking />} />
          <Route
            path="/Renters"
            element={<Renters addCarData={addCarData} />}
          />
        </Routes>
      </Router>
    </div>
  )
}
