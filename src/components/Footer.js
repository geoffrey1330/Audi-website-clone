import React, { useState } from 'react'
import data from '../data/footer'
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
} from 'react-icons/fa'

const Footer = () => {
  // eslint-disable-next-line
  const [footerLinks, setFooterLinks] = useState(data)

  return (
    <>
      <nav>
        <ul className="flex items-center justify-center pb-10">
          <li className="mx-4 text-3xl">
            <FaFacebook />
          </li>
          <li className="mx-4 text-3xl">
            <FaTwitter />
          </li>
          <li className="mx-4 text-3xl">
            <FaInstagram />
          </li>
          <li className="mx-4 text-3xl">
            <FaYoutube />
          </li>
          <li className="mx-4 text-3xl">
            <FaLinkedin />
          </li>
        </ul>
      </nav>

      <footer className="px-5 py-10 border-t md:flex justify-between lg:px-40">
        {footerLinks.map((footerLink) => {
          const { id, title, links } = footerLink

          return (
            <div key={id}>
              <h4 className="font-bold text-xl text-gray-500 tracking-wider">
                {title}
              </h4>
              <ul className="mb-4">
                {links.map((link) => {
                  return (
                    <li
                      key={link}
                      className="text-gray-400 my-3 cursor-pointer hover:text-gray-600"
                    >
                      {link}
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </footer>
    </>
  )
}

export default Footer
