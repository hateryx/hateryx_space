import React, { useState, useEffect } from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { SVG_eye } from "../assets/icons";

import portpic_investopia from "../assets/images/portpic_investopia.jpg";
import portpic_jobhunter from "../assets/images/portpic_jobhunter.jpg";
import portpic_hangman from "../assets/images/portpic_hangman.jpg";
import portpic_newspyscraper from "../assets/images/portpic_newspyscraper.jpg";
import portpic_nextaipsych from "../assets/images/portpic_nextaipsych.jpg"

import python from "../assets/images/port-python.svg";
import fastapi from "../assets/images/port-fastapi.svg"
import flask from "../assets/images/port-flask.svg";
import mysql from "../assets/images/port-mysql.svg";
import javascript from "../assets/images/port-javascript.svg";
import htmlcss from "../assets/images/port-htmlcss.svg";
import reactjs from "../assets/images/port-reactjs.svg";
import nextjs from "../assets/images/port-nextjs.svg"
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
      picture: portpic_investopia,
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
      project: "Next AI Psych",
      picture: portpic_nextaipsych,
      description:
        "Get to know more of yourself by answering questions and let the power of Open AI's Chat GPT 3.5 Turbo Model to give you an objective glance of your personality by its assessment of your answers.",
      tech: [
        { icon_source: reactjs, lang: "ReactJS" },
        { icon_source: nextjs, lang: "NextJS" },
        { icon_source: python, lang: "Python" },
        { icon_source: fastapi, lang: "Fast API" },
      ],
    },
    {
      project: "Job Hunter",
      picture: portpic_jobhunter,
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
      picture: portpic_newspyscraper,
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
      picture: portpic_hangman,
      description:
        "A classic word guessing game built using vanilla HTML, CSS and Javascript. The player is given a question as hint for the answer, which are randomly generated therefrom using API Ninjas.",
      tech: [
        { icon_source: htmlcss, lang: "HTML CSS" },
        { icon_source: javascript, lang: "Javascript" },
        { icon_source: api_icon, lang: "API Ninjas" },
      ],
    },
  ];

  const SliderSettings = {
    className: "center",
    dots: true,
    speed: 400,
    slidesToShow: 2,
    infinite: true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

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
          <div className="grid grid-cols-1 content-around items-center container">
            <Slider {...SliderSettings}>
            {content.map(({ project, picture, description, tech }, index) => (
              <div
                id={project}
                key={index}
                onClick={clickHandler}
                className="bg-white rounded-t-lg flex items-center px-3 sm:px-3 md:px-0 lg:px-0 xl:px-0 z-8" 
              >
                <div className="w-full max-w-m border-2 shadow-md rounded-lg">
                  <div className="w-full rounded-t-lg bg-blue-900 h-10 pl-2 flex items-center">
                    <img src={openCard} className="h-6 w-6"></img>
                  </div>
                  <h3 className="mx-4 my-3 py-2 text-center text-xl font-bold text-blue-800 border-y-2 border-blue-700">
                      {project}
                    </h3>
                  <div className="portpic-window items-center flex justify-center h-[500px]">
                    <img
                      src={picture}
                      alt="Project 1"
                      className="p-1"
                    ></img>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-600 text-justify font-light py-2">
                      {description}
                    </p>
                    <div className="bg-blue-900 rounded-t-lg my-5">
                      <div className="p-2 bg-yellow-400 rounded-t-lg">
                        <p className="text-gray-600 text-justify font-semibold">
                          Tech/Libraries Used:
                        </p>
                      </div>
                      <div className="px-3 py-4 pb-2 grid grid-cols-2 items-center gap-2">
                        {tech.map(({ icon_source, lang }, index) => (
                          <div
                            key={index}
                            className="bg-gray-200 rounded-full px-1 py-2 font-semibold text-gray-700 mb-3 text-xs items-center flex w-full gap-3"
                          >
                            <div className="h-[50px] w-[48px]">
                            <img src={icon_source} className="w-full min-h-full object-cover items-center"></img>
                            </div>
                            <div key={index}>{lang}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
