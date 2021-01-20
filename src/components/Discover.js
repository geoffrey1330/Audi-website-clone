import React, { useState } from 'react'
import data from '../data/discover'

const Discover = () => {
  // eslint-disable-next-line
  const [cards, setCards] = useState(data)

  return (
    <>
      <h2 className="font-bold text-4xl text-center mb-3 pt-10 lg:text-6xl">
        Discover the world of Audi
      </h2>
      <section className="discover grid grid-cols-1 gap-2 px-5 pb-10 sm:grid-cols-2 lg:px-40">
        {cards.map((card) => {
          const { id, image, title } = card

          return (
            <div key={id} className="relative">
              <img src={image} alt={title} />
              <h4 className="absolute z-10 font-bold text-white text-2xl">
                {title}
              </h4>
            </div>
          )
        })}
      </section>
    </>
  )
}

export default Discover
