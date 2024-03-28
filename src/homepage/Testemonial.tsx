import React from 'react'

// Section component
const Section = ({title, description}) => {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">{title}</h2>
      <p className="text-gray-600 mb-6">{description}</p>
      <a
        href="#"
        className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600"
      >
        Learn More
      </a>
    </section>
  )
}

// GridItem component
const GridItem = ({imageUrl, alt, title, description}) => {
  return (
    <div className="text-center">
      <img
        src={imageUrl}
        alt={alt}
        className="w-48 h-48 object-cover rounded-full mx-auto mb-4"
      />
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a href="#" className="text-blue-500 hover:text-blue-600">
        Learn More
      </a>
    </div>
  )
}

// Review component
const Review = ({text, rating}) => {
  return (
    <div className="bg-gray-100 p-6 rounded-md text-center">
      <p className="text-gray-800 mb-2">"{text}"</p>
      <div className="text-yellow-400 mb-2">★★★★★</div>
    </div>
  )
}

// Main component
const Testemonial = () => {
  return (
    <div>
      <Section
        title="Hire a Driver"
        description="Experience the convenience of hiring a driver for your trip."
      />
      <Section
        title="Benefits of Using Rentfaster"
        description="Discover the advantages of using Rentfaster for your car rental needs."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <GridItem
          imageUrl="https://cdn.discordapp.com/attachments/1076030668234051625/1223012231550210088/https___turo.com_ca_en_I_want_to_make_an_image_for_car_renter.png?ex=66184de6&is=6605d8e6&hm=6f4b6c0430f615213348f588ca371218a37ffe8e596a740e65adc75823e9ebe1&0"
          alt="For Renters"
          title="For Renters"
          description="Find and book the perfect car for your trip."
        />
        <GridItem
          imageUrl="https://cdn.discordapp.com/attachments/1076030668234051625/1223013246043160596/host.png?ex=66184ed8&is=6605d9d8&hm=6449133a60fad376ff39fb3a9051518182949878c7f5e9b5627e95975629db4d&"
          alt="For Hosts"
          title="For Hosts"
          description="Earn money by renting out your car to others."
        />
        <GridItem
          imageUrl="https://cdn.discordapp.com/attachments/1076030668234051625/1223013245372207185/driver.png?ex=66184ed8&is=6605d9d8&hm=0bb88a2d4c3f9f55969a8313190425abbb303a366ec7cac6b2fc8b7f845d4104&"
          alt="For Drivers"
          title="For Drivers"
          description="Get hired as a driver and earn money."
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Review
          text="Best Company Ever Very Much WoW Best Pricing"
          rating="★★★★★"
        />
        <Review
          text="Renting a Car From Rentfaster is easier than explaining my grandma."
          rating="★★★★★"
        />
        <Review
          text="My Car Went from Couch Potato to Cash Cow Thanks, Rentfaster <3"
          rating="★★★★★"
        />
      </div>
    </div>
  )
}

export default Testemonial
