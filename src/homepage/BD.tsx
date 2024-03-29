import React from 'react'

// Car component
const Car = ({
  imageUrl,
  alt,
  title,
  location,
  price,
}: {
  imageUrl: string
  alt: string
  title: string
  location: string
  price: number
}) => {
  return (
    <div className="bg-white shadow-md rounded-md p-6">
      <img
        src={imageUrl}
        alt={alt}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-2">{location}</p>
      <p className="text-gray-800 mb-4">{price}</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
        Book Now
      </button>
    </div>
  )
}

// Main component
const BD = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 mt-20 mb-20">
      <Car
        imageUrl="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-S-Desktop-LHD-6.22.jpg"
        alt="Car 1"
        title="Tesla Model 3"
        location="Vancouver, BC"
        price="45.99 $"
      />
      <Car
        imageUrl="https://cdn.motor1.com/images/mgl/9xkvm/s1/mclaren-p1-5th-anniversary.webp"
        alt="Car 2"
        title="McLaren P1"
        location="North Vancouver"
        price="70.22 $"
      />
      <Car
        imageUrl="https://www.topgear.com/sites/default/files/2023/07/1%20Mercedes-AMG%20A45.jpeg"
        alt="Car 3"
        title="Mercedes-Benz AMG A45"
        location="Burnaby"
        price="34.95 $"
      />
    </div>
  )
}

export default BD
