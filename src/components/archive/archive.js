import React from "react";
import portpic_1 from "../assets/images/project1.svg";
import portpic_2 from "../assets/images/project2.svg";
import portpic_3 from "../assets/images/project3.svg";
import portpic_4 from "../assets/images/project4.svg";

const Portfolio = () => {
  
  return (
    <section className="bg-blue-600 py-8">
      <div className="container mx-auto">
        <h2 className="text-3xl text-blue-50 font-medium text-center mb-8">
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 mx-auto content-around items-center">
          <div className="bg-white rounded-lg shadow-md flex items-center">
            <div className="w-full max-w-sm">
              <img
                src={portpic_1}
                alt="Project 1"
                className="h-48 w-full object-cover"
              ></img>
              <div className="p-4">
                <h3 className="text-xl font-medium text-blue-800">Jobhunter</h3>
                <p className="text-gray-600 text-justify font-light">
                  Keep track of all your job applications in one place. Our app
                  allows you to easily see the status of each application, set
                  reminders for follow-up tasks and see thru a dashboard.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md flex items-center">
            <div className="w-full max-w-sm">
              <img
                src={portpic_2}
                alt="Project 2"
                className="h-48 w-full object-cover"
              ></img>
              <div className="p-4">
                <h3 className="text-xl font-medium text-blue-800">
                  Agri-Xchange
                </h3>
                <p className="text-gray-600 text-justify">
                  An e-marketplace for buying and selling gently used items,
                  which allows sellers to post their pre-loved items and enable
                  potential buyers to browse and purchase posted products.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md flex items-center">
            <div className="w-full max-w-sm">
              <img
                src={portpic_3}
                alt="Project 3"
                className="h-48 w-full object-cover"
              ></img>
              <div className="p-4">
                <h3 className="text-xl font-medium text-blue-800">
                  Taskmaster
                </h3>
                <p className="text-gray-600 text-justify">
                  A project management dashboard for teams who want to systemize
                  tasks in a reliable way. The app allows overview of manpower
                  resources, project milestone and deadlines.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md flex items-center">
            <div className="w-full max-w-sm">
              <img
                src={portpic_4}
                alt="Project 4"
                className="h-48 w-full object-cover"
              ></img>
              <div className="p-4">
                <h3 className="text-xl text-blue-800 font-medium">CV Hero</h3>
                <p className="text-gray-600 text-justify">
                  Builds, designs and prints professional resumes with
                  customizable templates and easy-to-use interface. Perfect for
                  job seekers who want to create an attractive resume quickly.
                </p>
              </div>
            </div>
          </div>
          {/**<!--Add more project boxes here-->**/}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
