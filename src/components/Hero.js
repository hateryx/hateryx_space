import React from "react";
import hero from "../assets/images/hero-2.svg";

const Hero = () => {
  return (
    <div className="relative z-9">
      <section className=" py-14 bg-hero-image bg-no-repeat bg-contain sm:bg-contain md:bg-cover bg-center min-h-screen">
        <div className="container mx-auto px-4 py-4">
          <div className="space-y-3 mb-6">
            <h1 className="tracking-widest font-semibold pl-4 bg-gradient-to-r from-cyan-300 to-blue-900 bg-clip-text text-transparent text-4xl md:text-6xl">
              Hello there!
            </h1>
            <h1 className="tracking-tight font-medium pl-4 text-blue-800 text-2xl md:text-4xl pt-1">
              My name is{" "}
              <span className="text-cyan-600 tracking-tighter">
                Richmond Damag
              </span>
            </h1>

            <p className="font-light mb-8 text-left tracking-wide pl-4 pt-3 text-xl md:text-2xl lg:text-3xl">
              I'm a{" "}
              <strong className="text-blue-900">
                Full Stack Web Developer
              </strong>
              , <strong className="text-blue-800">Data Analyst</strong> and{" "}
              <strong className="text-blue-700">IT Auditor</strong>
            </p>
          </div>
          <img src={hero} alt="hero" className="w-full mx-auto max-w-sm"></img>
          <div className="text-center">
            <a
              href="#project"
              className="text-blue-900 bg-yellow-300 text-lg font semi-bold tracking-wider px-6 py-4 rounded-lg hover:bg-blue-200"
            >
              See my works
            </a>
          </div>
        </div>
      </section>
      <div className="grid place-items-end pb-6">
        <div className="xl:w-2/5 md:w-full bg-blue-900 h-5 transform origin-bottom-right skew-x-12 rounded-tr"></div>
        <div className="xl:w-2/5 md:w-full bg-yellow-400 h-2"></div>
        <div className="xl:w-2/5 md:w-full bg-blue-900 h-2"></div>
      </div>
    </div>
  );
};

export default Hero;
