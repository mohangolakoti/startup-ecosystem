import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="flex flex-col justify-center items-center h-[100vh]  leading-10 bg-gradient-to-r from-blue-600 to-gray-800 p-4 sm:p-6">
        <h1 className="md:text-5xl text-3xl text-white font-bold sm:font-extrabold text-center">
          Empowering New <span className="text-[#ff5100]">Entrepreneurs</span> to
          Succeed
        </h1>
        <p className="md:text-2xl text-xl text-white font-normal sm:font-medium text-center mt-5">
          Connect with mentors, find resources, and meet potential investors to
          kickstart your entrepreneurial journey.
        </p>
        <div className="mt-5">
        <Link to="/signup" className="bg-[#ff5100] text-white px-5 py-2 border border-[#ff5100] rounded-lg mx-2">
          Join Now
        </Link>
        <Link to="/signup" className="bg-transparent text-white border px-4 py-2 rounded-lg mx-2 hover:bg-blue-400 hover:border-blue-400">
          Learn More
        </Link>
        </div>
      </section>
  )
}

export default Hero