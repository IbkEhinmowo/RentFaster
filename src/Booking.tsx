import React from 'react'
import {useLocation} from 'react-router-dom'

export default function Booking () {
    const location = useLocation()
    const car = location.state.car
  return (
    <>
      <div
        className="flex bg-white rounded-lg shadow-md w-3/4 mx-auto mt-4 "
        id="listing"
      >
        <img
          src={car.imageUrl}
          className="w-50 h-40 object-cover rounded-l-lg id"
          id="carimage"
        />
        <div className="flex flex-col justify-around  p-4 top-4">
          <h2 className="text-xl font-bold mb-2">{car.title}</h2>
          <p className="text-gray-600 mb-2">Location: {car.location}</p>
          <p className="text-gray-800 font-semibold">
            Price: {`$${car.price}`}
          </p>
          <p>Year: {car.year}</p>
          <p>Seat Count: {car.seatCount}</p>
          <p>Vehicle Type: {car.vehicleType}</p>
        </div>
      </div>

      <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center ">
        <div className="container max-w-screen-lg mx-auto ">
          <div>
            <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                <div className="text-black-600">
                  <p className="font-medium text-lg">Personal Details</p>
                  <p>Please fill out all the fields.</p>
                </div>

                <div className="lg:col-span-2">
                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                    {/* Existing code */}
                    <div className="md:col-span-5">
                      <label htmlFor="full_name">Full Name</label>
                      <input
                        type="text"
                        name="full_name"
                        id="full_name"
                        className="h-10 border mt-1 rounded px-4 w-full bg-black-50"
                      
                      />
                    </div>
                    <div className="md:col-span-5">
                      <label htmlFor="mail">Mail</label>
                      <input
                        type="text"
                        name="mail"
                        id="mail"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      
                        placeholder="mail@domain.com"
                      />
                    </div>

                    <div className="md:col-span-5">
                      <label htmlFor="phone">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    
                        placeholder="123-456-7890"
                      />
                    </div>

                    <div className="md:col-span-5">
                      <label htmlFor="drivers_license">
                        Upload Driver's License
                      </label>
                      <input
                        type="file"
                        name="drivers_license"
                        id="drivers_license"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      />
                    </div>
                    <div className="md:col-span-5">
                      <label htmlFor="pickup_date">Pickup Date</label>
                      <input
                        type="date"
                        name="pickup_date"
                        id="pickup_date"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      />
                    </div>

                    <div className="md:col-span-5">
                      <label htmlFor="dropoff_date">Drop Off Date</label>
                      <input
                        type="date"
                        name="dropoff_date"
                        id="dropoff_date"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      />
                    </div>

                    {/* Existing code */}
                    <div className="md:col-span-5">
                      <label htmlFor="credit_card">Credit Card Number</label>
                      <input
                        type="text"
                        name="credit_card"
                        id="credit_card"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        
                        placeholder="1234 5678 9012 3456"
                      />
                    </div>

                    {/* New code */}
                    <div className="md:col-span-2">
                      <label htmlFor="expiration_date">Expiration Date</label>
                      <input
                        type="text"
                        name="expiration_date"
                        id="expiration_date"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        
                        placeholder="MM/YY"
                      />
                    </div>

                    <div className="md:col-span-1">
                      <label htmlFor="cvv">CVV</label>
                      <input
                        type="text"
                        name="cvv"
                        id="cvv"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        
                        placeholder="123"
                      />
                    </div>

                    <div className="md:col-span-5">
                      <div className="inline-flex items-center">
                        <input
                          type="checkbox"
                          name="save_payment"
                          id="save_payment"
                          className="form-checkbox"
                        />
                        <label htmlFor="save_payment" className="ml-2">
                          Save payment for future
                        </label>
                      </div>
                    </div>
                    {/* Continue with existing code */}

                    <div className="md:col-span-5">
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                     
                        placeholder="email@domain.com"
                      />
                    </div>

                    <div className="md:col-span-3">
                      <label htmlFor="address">Address / Street</label>
                      <input
                        type="text"
                        name="address"
                        id="address"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                       
                        placeholder=""
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="city">City</label>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        
                        placeholder=""
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="country">Country / region</label>
                      <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                        <input
                          name="country"
                          id="country"
                          placeholder="Country"
                          className="px-4 appearance-none outline-none text-black-800 w-full bg-transparent"
                         
                        />
                        <button
                          tabIndex={-1}
                          className="cursor-pointer outline-none focus:outline-none transition-all text-black-300 hover:text-red-600"
                        >
                          <svg
                            className="w-4 h-4 mx-2 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                          </svg>
                        </button>
                        <button
                          tabIndex={-1}
                          className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600"
                        >
                          <svg
                            className="w-4 h-4 mx-2 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="18 15 12 9 6 15"></polyline>
                          </svg>
                        </button>
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="state">State / province</label>
                      <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                        <input
                          name="state"
                          id="state"
                          placeholder="State"
                          className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                         
                        />
                        <button
                          tabIndex={-1}
                          className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600"
                        >
                          <svg
                            className="w-4 h-4 mx-2 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                          </svg>
                        </button>
                        <button
                          tabIndex={-1}
                          className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600"
                        >
                          <svg
                            className="w-4 h-4 mx-2 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="18 15 12 9 6 15"></polyline>
                          </svg>
                        </button>
                      </div>
                    </div>

                    <div className="md:col-span-1">
                      <label htmlFor="zipcode">Zipcode</label>
                      <input
                        type="text"
                        name="zipcode"
                        id="zipcode"
                        className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder=""
                        
                      />
                    </div>

                    <div className="md:col-span-5">
                      <div className="inline-flex items-center">
                        <input
                          type="checkbox"
                          name="billing_same"
                          id="billing_same"
                          className="form-checkbox"
                        />
                        <label htmlFor="billing_same" className="ml-2">
                          My billing address is different than above.
                        </label>
                      </div>
                    </div>

                    <div className="md:col-span-5 text-right">
                      <div className="inline-flex items-end">
                        <a href="./"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >
                          Submit
                        </button> </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <a
            href="https://www.buymeacoffee.com/dgauderman"
            target="_blank"
            className="md:absolute bottom-0 right-0 p-4 float-right"
          >
            <img
              src="https://www.buymeacoffee.com/assets/img/guidelines/logo-mark-3.svg"
              alt="Buy Me A Coffee"
              className="transition-all rounded-full w-14 -rotate-45 hover:shadow-sm shadow-lg ring hover:ring-4 ring-white"
            />
          </a>
        </div>
      </div>
    </>
  )
}
