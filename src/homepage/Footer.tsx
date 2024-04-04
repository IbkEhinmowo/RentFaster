import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>438 Terminal Ave, Vancouver, BC</p>
            <p>V6A 0C1, Canada</p>
            <p>Phone: 123-456-7890</p>
            <p>Email: info@rentfaster.com</p>
          </div>
          <div>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-white hover:text-gray-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-400">
                  Search
                </a>
              </li>
              <li>
                <Link to="/Renters" className="text-white hover:text-gray-400">
                  Become Host
                </Link>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-400">
                  Sign In
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-400">
                  Sign Up
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
