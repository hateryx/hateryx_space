import React from "react";
import hero from "../assets/images/hero.svg";

const About = () => {
  return (
    <div id="about" className="relative bg-white z-9">
      <section className="flex flex-col items-center justify-center min-h-screen py-16 mx-2">
        <div className="container grid md:grid-cols-3 gap-8 items-center">
          <div className="px-6 md:px-0 mx-auto xl:ml-50">
            <img className="rounded-full w-full" src={hero}></img>
          </div>
          <div className="md:col-span-2 px-3 text-lg sm:text-lg md:text-xl xl:text-2xl mx-auto md:mr-20 xl:mr-42">
            <div className="bg-blue-900 inline-block px-5">
              <p className=" text-yellow-400 font-medium text-center py-3 sm:py-5 md:py-4">
                About Me
              </p>
            </div>
            <p className="font-light py-5 leading-loose text-black-800">
              Hi, I'm a Data and Business Intelligence Analyst and Full Stack Web Developer enthusiast. As a web developer,
              I've built skillsets on using <strong>React JS</strong> and <strong>Tailwind CSS</strong> for the front-end. 
              I'm passionate about <strong>data visualization</strong> using Power BI.
            </p>
            <p className="font-light py-5 leading-loose text-gray-800">
              I started my career as a Certified Public Accountant (CPA) in the
              Philippines and have been engaging with data and business intelligence analytics for internal auditing for 8 years.
              I've accumulated my business and IT acumen, cybersecurity, collaboration skills in a large business as internal
              auditor. I'm a lifelong learner, self-starter, advocates the power
              of teamwork and a little bit of a geek now and then.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
