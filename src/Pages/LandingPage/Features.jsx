import React from 'react'
import Lottie from "lottie-react";
import { features } from "../../constants/index";

const Features = () => {
  return (
    <section id="features" className="flex flex-col py-16 md:px-10 px-5 w-full">
    <h2 className="text-center w-full font-[900] text-4xl">Features</h2>
      <div className="lg:p-10">
          {features.map((feature)=>
          <div className="flex md:flex-row flex-col md:even:flex-row-reverse lg:px-24 py-10 md:py-5">
            <div className="md:w-1/2 flex justify-center">
            <Lottie animationData={feature.img} className="w-[290px] md:w-[430px]" ></Lottie></div>
            <div className="md:w-1/2 flex flex-col justify-center">
            <h3 className='font-bold text-2xl text-center'>{feature.label}</h3>
            <p className='text-lg p-3 text-center flex-wrap'>{feature.text}</p>
            </div>
          </div>
        )}
        </div>
    </section>
  )
}

export default Features