import React, { useState } from 'react'
import data from '../data/grid1'

const LookingBack = () => {
  // eslint-disable-next-line
  const [cards, setCards] = useState(data)

  return (
    <>
      <section className="grid grid-cols-1 gap-10 px-5 py-20 sm:grid-cols-2 sm:gap-1 xl:px-40">
        {cards.map((card) => {
          const { id, image, title, desc } = card

          return (
            <div key={id}>
              <img src={image} alt={title} />
              <div className="px-4 pb-5">
                <h3 className="font-bold text-xl my-2">{title}</h3>
                <p>{desc}</p>
              </div>
            </div>
          )
        })}
      </section>
    </>
  )
}

export default LookingBack
