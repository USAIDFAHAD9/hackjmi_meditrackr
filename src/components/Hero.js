import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Track Your Medical
            <br class="hidden lg:inline-block" />
            Reports with Ease
          </h1>
          <p class="mb-8 leading-relaxed">
            "Streamline your healthcare journey with Track Your Medical Reports
            with Ease. Our intuitive platform simplifies record-keeping,
            enabling effortless organization and access to your medical reports.
            Take control of your health effortlessly, empowering yourself with
            the tools to manage your medical history efficiently and communicate
            effectively with healthcare professionals."
          </p>
          <div class="flex justify-center">
            {/* <button class="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
              Button
            </button>
            <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Button
            </button> */}
          </div>
          <div>
            <Link
              to="/map"
              className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"
            >
              Locate nearest pathology lab
            </Link>
          </div>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            class="object-cover object-center rounded"
            alt="hero"
            src="https://dummyimage.com/720x600"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
