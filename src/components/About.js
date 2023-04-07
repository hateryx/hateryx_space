import React from "react";
import hero from "../assets/images/hero.svg";

const About = () => {
  return (
    <div id="about" className="relative bg-white z-9">
      <section className="flex flex-col items-center justify-center min-h-screen py-16">
        <div className="container grid md:grid-cols-3 gap-8 items-center">
          <div className="px-6 md:px-0 mx-auto xl:ml-40">
            <img className="rounded-full" src={hero}></img>
          </div>
          <div className="md:col-span-2 px-3 text-lg sm:text-lg md:text-xl xl:text-2xl mx-auto md:mr-20 xl:mr-42">
            <div className="bg-blue-900 inline-block px-5">
              <p className=" text-yellow-400 font-medium text-center py-3 sm:py-5 md:py-4">
                About Me
              </p>
            </div>
            <p className="font-thin py-5 leading-loose">
              Hi, I'm an Audit Data Analytics Lead/ Senior IT Auditor and Full
              Stack Developer enthusiast. Since last year, I've been developing
              applications that could enable businesses to leverage technology.
              As to date, I've developed skill set in a range of technologies,
              including the <strong>MERN</strong> stack,{" "}
              <strong>Tailwind CSS</strong> and <strong>Python</strong>{" "}
              libraries.{" "}
            </p>
            <p className="font-thin py-5 leading-loose">
              I started my career as a Certified Public Accountant (CPA) in the
              Philippines, and since then, I've accumulated my business and IT
              acumen, collaboration skills in a large business as internal
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
