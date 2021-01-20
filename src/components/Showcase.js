import React from 'react'

const Showcase = () => {
  return (
    <>
      <section className="showcase">
        <div className="overlay flex flex-col items-center justify-center text-center text-white lg:px-72">
          <h1 className="font-bold text-4xl mb-4 lg:text-6xl">
            ASI certified aluminum: Audi leads the way
          </h1>
          <p className="text-lg mb-5 lg:text-xl">
            AUDI AG is the first car manufacturer to be awarded the Chain of
            Custody certificate of the Aluminium Stewardship Initiative (ASI) –
            a milestone for the company.
          </p>
          <button className="bg-white py-2 px-4 text-black transition-colors hover:bg-black hover:text-white">
            Read More
          </button>
        </div>
      </section>
    </>
  )
}

export default Showcase
