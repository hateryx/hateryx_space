import React from "react";

const Careers = () => {
  const contents = [
    {
      position: "Audit Data Analytics Lead",
      company: "BDO Unibank",
      location: "Philippines",
      period: "December 2022 - Current",
      description:
        "Using principles of data analytics, I work to develop automated processes for extracting datasets from system applications using SQL. I then transform this data using R Studio and Jupyter (Anaconda) and analyze it to identify anomalies and exceptions for endorsement to auditors for further continuous auditing and investigation.",
    },
    {
      position: "Section Head - IT Audit",
      company: "BDO Unibank",
      location: "Philippines",
      period: "March 2022 - November 2022",
      description:
        "As the senior IT auditor, I lead audits of IT applications to provide assurance on their compliance with the bank's standards for the System Development Life Cycle (SDLC), IT security (including application security controls and remediation of vulnerability assessment findings), as well as relevant IT regulations for banks such as IT risk management, IT governance, and business continuity standards. I document audit issues in a report for release to senior management and the board audit committee.",
    },
    {
      position:
        "Section Head - Head Office, MSME, Branch and Information Systems",
      company: "BDO Unibank",
      location: "Philippines",
      period: "January 2020 - March 2022",
      description:
        "Supervised a team of up to six audit officers, supervising the delivery of audit engagements for branch banking and lending offices, as well as business units with data-driven processes such as Credit, Market and Liquidity Risk Management, Corporate Planning, Credit Collections, and Compliance (AML) among others. In my role, I also audit information system-related processes such as IT governance, business continuity, and data privacy processes",
    },
  ];

  const education = [
    {
      course: "Computer Science with Python Programming",
      school: "Harvard X",
      type: "Professional Certificate",
      period: "January to March 2023",
      description: [
        "Achieved a broad and strong understanding of computer science and programming, including how to think algorithmically and solve problems efficiently. I have grasped concepts related to abstraction, algorithms, data structures, encapsulation, resource management, security, software engineering, and web development. For example, I built a full-stack finance app using HTML with Jinja syntax, making use of API, Flask, and SQL.",
        "By understanding C as a language used to build and abstract memory and hardware manipulation for Python, I obtained foundational programming concepts in Python especially on the use of classes, objects, methods and properties, utilizing of third-party libraries (i.e. Beautiful Soup, Report Lab, SQLAlchemy, Pandas), and among others.",
      ],
    },
    {
      course: "Google Data Analytics",
      school: "Grow with Google on Coursera",
      type: "Professional Certificate",
      period: "December 2022",
      description: [
        "Gained immense understanding of exploring, extracting, cleaning, transforming, analyzing, and sharing data through the art of visualization and providing data-driven recommendations. I have also acquired strong fundamentals in data structures and proficiency in using SQL, R programming languages, and Jupyter notebook for data analysis processes.",
      ],
    },
    {
      course: "MERN Stack Course",
      school: "Udemy",
      type: "Work in progress",
      period: "November 2022",
      description: [
        "Started to learn how to connect React-based front-end application with the back-end application using Express, NodeJS and Mongo DB, how to implement JSON web token for authentication and authorization and best practices for building front-end and server applications.",
      ],
    },

    {
      course: "React The Complete Guide",
      school: "Udemy",
      type: "Learnings applied thru projects",
      period: "November 2022",
      description: [
        "Learned the core basics of how React works, building components, props and dynamic data binding, use of hooks with React.",
      ],
    },
    {
      course: "Javascript Algorithms and Data Structures",
      school: "freeCodeCamp",
      type: "Certificate of Completion",
      period: "October 2022",
      description: [
        "Gained the fundamentals in Javascript programming concepts and application of Object Oriented Programming and Functional Programming.",
      ],
    },
  ];
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
          {contents.map(
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

          {education.map(
            ({ course, school, period, description, type }, index) => (
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
                  <p className="text-sm lg:text-base text-gray-500 py-1 lg:py-3">
                    {type}
                  </p>
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
