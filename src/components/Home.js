import React from 'react'
import homeImg from '../images/home_of_football_1.webp'

const Home = () => {
  return (
    <>
      <section className="home">
        <div className="overlay py-10 px-5 lg:grid lg:grid-cols-2 lg:items-center lg:gap-5 lg:text-white lg:px-40">
          <div>
            <img src={homeImg} alt="" />
          </div>

          <div>
            <h6 className="pt-2">Home of Football</h6>
            <h4 className="text-xl font-bold lg:text-2xl">Home of Football</h4>
            <p className="mb-3">
              Audi and football: an electrifying partnership. How Audi provides
              fresh impetus and open up new horizons as a close partner and
              sponsor of regional, national and international sport for decades.
            </p>
            <button className="bg-black px-4 py-2 text-white border transition-colors hover:bg-white hover:text-black lg:bg-white lg:text-black lg:hover:bg-black lg:hover:text-white">
              Read More
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
