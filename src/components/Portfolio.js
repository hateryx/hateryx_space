import React, { useState, useEffect } from "react";
import { SVG_eye } from "../assets/icons";

import portpic_1 from "../assets/images/project1.svg";
import portpic_2 from "../assets/images/project2.svg";
import portpic_3 from "../assets/images/project3.svg";
import portpic_4 from "../assets/images/project4.svg";

import python from "../assets/images/port-python.svg";
import flask from "../assets/images/port-flask.svg";
import mysql from "../assets/images/port-mysql.svg";
import javascript from "../assets/images/port-javascript.svg";
import htmlcss from "../assets/images/port-htmlcss.svg";
import reactjs from "../assets/images/port-reactjs.svg";
import mongodb from "../assets/images/port-mongodb.svg";
import nodejs from "../assets/images/port-nodejs.svg";
import expressjs from "../assets/images/port-expressjs.svg";
import api_icon from "../assets/images/port-api.png";
import lib_icon from "../assets/images/port-lib.png";
import reportlab from "../assets/images/port-reportlab.png";
import openCard from "../assets/images/openCard.svg";

import ProjectCard from "./ProjectCard";

const Portfolio = () => {
  const content = [
    {
      project: "Investopia",
      picture: portpic_4,
      description:
        "Practice stock trading and portfolio management thru this app. Inspired from CS50, the app enables the user to see his/her equities value, real-time profit/loss and transaction history.",
      tech: [
        { icon_source: htmlcss, lang: "HTML CSS" },
        { icon_source: python, lang: "Python" },
        { icon_source: flask, lang: "Flask" },
        { icon_source: mysql, lang: "SQL" },
      ],
    },
    {
      project: "Job Hunter",
      picture: portpic_2,
      description:
        "Keep track of all your job applications in one place. The app allows you to easily see the status of each application, set reminders for follow-up tasks and see thru a dashboard.",
      tech: [
        { icon_source: reactjs, lang: "ReactJS" },
        { icon_source: expressjs, lang: "ExpressJS" },
        { icon_source: nodejs, lang: "NodeJS" },
        { icon_source: mongodb, lang: "MongoDB" },
      ],
    },
    {
      project: "News PyScraper",
      picture: portpic_1,
      description:
        "Select a news report category (e.g. headline news, business, sport, etc) and the app will instantly scrape and deliver in PDF format the latest articles from a news website.",
      tech: [
        { icon_source: python, lang: "Python" },
        { icon_source: lib_icon, lang: "Beautiful Soup" },
        { icon_source: reportlab, lang: "Report Lab" },
      ],
    },
    {
      project: "Hangman Game",
      picture: portpic_3,
      description:
        "A classic word guessing game built using vanilla HTML, CSS and Javascript. The player is given a question as hint for the answer, which are randomly generated therefrom using API Ninjas.",
      tech: [
        { icon_source: htmlcss, lang: "HTML CSS" },
        { icon_source: javascript, lang: "Javascript" },
        { icon_source: api_icon, lang: "API Ninjas" },
      ],
    },
  ];

  const [showProjectCard, setShowProjectCard] = useState(false);

  const [pickProject, setPickProject] = useState("");

  let which_project = "";

  function clickHandler(event) {
    which_project = event.currentTarget.id;
    setPickProject(which_project);

    openProjectCard();
  }

  function openProjectCard() {
    setShowProjectCard(true);
  }

  function closeProjectCard() {
    setShowProjectCard(false);
  }

  return (
    <div className="relative z-8" id="project">
      <div className="xl:w-3/5 md:w-full bg-blue-900 h-5 transform origin-bottom-right skew-x-12 rounded-tr"></div>
      <div className="xl:w-3/5 md:w-full bg-yellow-400 h-2"></div>
      <div className="xl:w-2/5 md:w-full bg-blue-900 h-2"></div>
      <section className="py-7 sm:py-7 md:py-16 bg-geo-image bg-contain bg-no-repeat sm:bg-repeat md:bg-no-repeat min-h-screen">
        <div className="container mx-auto">
          <div className="flex justify-center">
            <div className="bg-blue-900 rounded-full w-4/5 sm:w-4/5 md:w-2/5 mb-12">
              <p className=" text-yellow-400 tracking-widest font-medium text-center py-5 sm:py-5 md:py-7 text-xl sm:text-xl md:text-2xl">
                Projects
              </p>
            </div>
          </div>
          {showProjectCard && (
            <ProjectCard
              closeProjectCard={closeProjectCard}
              which_project={pickProject}
            />
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 mx-auto content-around items-center">
            {content.map(({ project, picture, description, tech }, index) => (
              <div
                id={project}
                key={index}
                onClick={clickHandler}
                className="bg-white rounded-t-lg flex items-center px-6 sm:px-6 md:px-0 lg:px-0 xl:px-0 z-8"
              >
                <div className="w-full max-w-m border-2 shadow-md rounded-lg">
                  <div className="w-full rounded-t-lg bg-blue-900 h-10 pl-2 flex items-center">
                    <img src={openCard} className="h-6 w-6"></img>
                  </div>
                  <img
                    src={picture}
                    alt="Project 1"
                    className="h-48 w-full p-3"
                  ></img>
                  <div className="p-4">
                    <h3 className="text-xl font-medium text-blue-800 border-y-2 border-blue-700">
                      {project}
                    </h3>
                    <p className="text-gray-600 text-justify font-light py-2">
                      {description}
                    </p>
                    <div className="bg-blue-900 rounded-t-lg">
                      <div className="p-2 bg-yellow-400 rounded-t-lg">
                        <p className="text-gray-600 text-justify font-semibold">
                          Tech/Libraries:
                        </p>
                      </div>
                      <div className="px-3 py-4 pb-2 grid grid-cols-2 items-center gap-2">
                        {tech.map(({ icon_source, lang }, index) => (
                          <div
                            key={index}
                            className="bg-gray-200 rounded-full px-1 py-2 font-semibold text-gray-700 mb-3 text-xs items-center flex w-full"
                          >
                            <img src={icon_source}></img>
                            <div key={index}>{lang}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
