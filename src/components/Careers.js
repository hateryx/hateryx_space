import React from "react";
import { CheckSVG } from "../assets/icons";
import constCareersBody from "./constants/constCareersBody.js";
import constCareersEdu from "./constants/constCareersEdu.js";

const Careers = () => {
  return (
    <div className="flex items-center justify-center py-16">
      <section className="min-h-screen pt-5">
        <div className="relative pb-5 mx-auto ml-4 xl:ml-31">
          <div className="absolute inset-0">
            <div className="container grid md:grid-cols-3 gap-8 items-center h-full">
              <div className="md:col-start-2 h-full pt-16 ml-2">
                <div className="w-0.5 bg-blue-900 h-full"></div>
              </div>
            </div>
          </div>
          <div className="container grid md:grid-cols-3 gap-8 items-center mb-4 ">
            <div className="md:col-start-2 md:col-span-2">
              <div className="bg-blue-900 inline-block px-6 text-xl xl:text-2xl">
                <p className="text-yellow-400 font-medium text-center py-5">
                  Careers
                </p>
              </div>
            </div>
          </div>
          {constCareersBody.map(
            ({ position, company, location, period, description }, index) => (
              <div
                key={index}
                className="container grid md:grid-cols-3 gap-4 md:gap-8 mb-16 mt-10"
              >
                <div className="text-sm lg:text-base pl-12 md:pl-0 md:text-right md:leading-loose uppercase text-gray-500">
                  {period}
                </div>
                <div className="pl-12 md:col-span-2 relative">
                  <div className="rounded-full bg-white border-2 border-gray-300 w-5 h-5 absolute mt-1.5 -ml-12"></div>
                  <h3 className="font-medium text-blue-900 text-xl xl:text-3xl">
                    {position}
                  </h3>
                  <p className="text-lg lg:text-xl font-semibold text-gray-700">
                    {company}
                  </p>
                  <p className="text-base text-gray-500">{location}</p>
                  <p className="mt-6 text-gray-800 text-lg lg:text-2xl font-light mr-4 md:mr-20 xl:mr-48">
                    {description}
                  </p>
                </div>
              </div>
            )
          )}
          <div className="container grid md:grid-cols-3 gap-8 items-center mb-4">
            <div className="md:col-start-2 md:col-span-2">
              <div className="h-16"></div>
            </div>
          </div>
          <div className="container grid md:grid-cols-3 gap-8 items-center mb-4">
            <div className="md:col-start-2 md:col-span-2">
              <div className="bg-blue-900 inline-block px-6 text-xl xl:text-2xl">
                <p className="text-yellow-400 font-medium text-center py-3 sm:py-5 md:py-4">
                  Milestones
                </p>
              </div>
            </div>
          </div>

          {constCareersEdu.map(
            (
              {
                course,
                school,
                period,
                description,
                type,
                links,
                cs50x,
                cs50p,
              },
              index
            ) => (
              <div
                key={index}
                className="container grid md:grid-cols-3 gap-4 md:gap-8 mb-16 mt-10"
              >
                <div className="text-sm lg:text-base pl-12 md:pl-0 md:text-right md:leading-loose uppercase text-gray-500">
                  {period}
                </div>
                <div className="pl-12 md:col-span-2 relative">
                  <div className="rounded-full bg-white border-2 border-gray-300 w-5 h-5 absolute mt-1.5 -ml-12"></div>
                  <h3 className="font-medium text-xl xl:text-2xl">{course}</h3>
                  <p className="text-base xl:text-xl font-semibold text-yellow-600">
                    {school}
                  </p>
                  <div className="text-sm lg:text-base text-gray-500 py-1 lg:py-3 flex">
                    {links ? (
                      <a className="flex text-green-700" href={links}>
                        {type} <CheckSVG />
                      </a>
                    ) : (
                      type
                    )}{" "}
                    {cs50x ? (
                      <div className="px-2 mx-2 border rounded-full bg-green-700">
                        <a
                          className="flex font-semibold text-white"
                          href={cs50x}
                        >
                          C50X
                        </a>
                      </div>
                    ) : null}
                    {cs50p ? (
                      <div className="px-2 border rounded-full bg-green-700">
                        <a
                          className="flex font-semibold text-white"
                          href={cs50p}
                        >
                          C50P
                        </a>
                      </div>
                    ) : null}
                  </div>

                  {description.map((item, index) => {
                    return (
                      <p
                        key={index}
                        className="mt-6 text-gray-800 text-base lg:text-xl font-light mr-4 md:mr-20 xl:mr-48"
                      >
                        {item}
                      </p>
                    );
                  })}
                </div>
              </div>
            )
          )}
          <div className="container grid md:grid-cols-3 gap-8 items-center mb-4">
            <div className="md:col-start-2 md:col-span-2">
              <div className="h-32"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
