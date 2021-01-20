import React from 'react'
import future from '../images/future.webp'

const Future = () => {
  return (
    <>
      <section className="px-5 pb-10 grid grid-cols-1 gap-5 lg:grid-cols-2 xl:px-40">
        <div>
          <img src={future} alt="" />
        </div>

        <div>
          <h4 className="font-bold mb-2 text-2xl">#FutureIsAnAttitude</h4>
          <p className="mb-5">
            Seeing the world with different eyes is what drives us. And so we
            dedicate every waking moment to shaping the future. Each day, we
            bring the world another little step forward – with our ideas, our
            passion, and our visions for the future of mobility.
          </p>
          <button className="bg-black py-2 px-4 text-white transition-colors hover:opacity-70 hover:text-white">
            Read More
          </button>
        </div>
      </section>
    </>
  )
}

export default Future
