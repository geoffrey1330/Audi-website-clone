import React from 'react'
import { FaSearch, FaGlobe } from 'react-icons/fa'

const Header = () => {
  return (
    <>
      <header className="fixed w-full flex items-center justify-between py-4 px-5 bg-white z-20 lg:px-40">
        <nav>
          <ul className="flex">
            <li className="mr-5">
              <button>Experience Audi</button>
            </li>
            <li className="mr-5">
              <button>Company</button>
            </li>
            <li className="mr-5">
              <button>Careers</button>
            </li>
          </ul>
        </nav>

        <nav>
          <ul className="flex">
            <li className="mr-5">
              <FaSearch />
            </li>
            <li className="mr-5">
              <FaGlobe />
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header
