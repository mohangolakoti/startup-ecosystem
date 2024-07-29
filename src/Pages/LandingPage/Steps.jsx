import React from "react";
import { resource1 } from "./images";
import Lottie from "lottie-react";
import { steps } from "../../constants";

const Steps = () => {
  return (
    <section className="flex flex-col md:flex-row h-full w-full">
      <div className="md:w-1/2 flex justify-center items-center h-full">
        <Lottie animationData={resource1}></Lottie>
      </div>
      <div className="flex flex-col md:w-1/2 md:px-10 px-5">
        <h2 className="text-3xl font-[900] text-center py-5 md:p-0">How It Works</h2>
        <div className="lg:px-10 px-5 lg:py-5 md:py-2">
        {steps.map((step) => (
          <div className="lg:py-5 md:py-2 py-5">
            <h3 className="text-2xl font-bold">{step.step}</h3>
            <p className="text-lg lg:py-2">{step.info}</p>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Steps;
