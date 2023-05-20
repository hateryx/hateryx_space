import react, { useState, useEffect } from "react";
import { SVG_close, CheckSVG } from "../assets/icons";
import select_project from "./constants/selectProject.js";

import git_hub from "../assets/images/port-github.svg";

const ProjectCard = (props) => {
  const clickHandler = () => {
    props.closeProjectCard();
  };

  useEffect(() => {
    setTimeout(() => {
      document.getElementById("projectcard").scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "center",
      });
    }, 200);
  }, []);

  let final_content = select_project(props.which_project);

  return (
    <div className="container shadow-lg">
      <div
        className="absolute inset-0 justify-center items-center z-3 shadow-xl bg-black bg-opacity-75"
        onClick={clickHandler}
      ></div>
      <div className="max-w-lg z-50 mx-auto px-8 py-10 bg-white shadow-lg rounded-md sm:max-w-xl relative">
        <div id="projectcard" className="absolute top-0 left-0"></div>
        <a href="#project" onClick={clickHandler}>
          <SVG_close />
        </a>
        <div className="w-full rounded-tr-lg bg-blue-900 h-8 mt-2"></div>
        <h1 className="text-2xl py-3 font-bold text-blue-900 mb-4 border-y-4 border-blue-900">
          {final_content.project}
        </h1>
        <p className="text-gray-800 font-light mb-4">
          {final_content.overview}
        </p>
        <h2 className="text-xl font-semibold text-gray-900 mb-2 ">Features</h2>
        <div className=" mb-4">
          {final_content.features.map((item, index) => (
            <div className="flex text-gray-800 font-light w-full">
              <CheckSVG className="w-1/5" />
              <div key={index} className="pl-3 w-full">
                {item}
              </div>
            </div>
          ))}
        </div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          Code Repository/ Deployment
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 bg-purple-200 rounded px-1 py-3 font-semibold text-black mb-3 text-xs items-center w-full space-y-2 md:space-y-0">
          <div className="px-5 grid grid-cols-2">
            <div className="flex items-center space-x-3">
              <a href={final_content.code_repo_link}>
                <img
                  src={git_hub}
                  className="object-contain items-center h-10 w-10 hover:border-4 rounded-full border-purple-900"
                ></img>
              </a>
              <p className="text-center">GitHub:</p>
            </div>
            <div className="px-2 mr-3 font-semibold text-blue-800 flex items-center">
              <a href={final_content.code_repo_link}>
                {final_content.code_repo}
              </a>
            </div>
          </div>
          <div className="px-5 grid grid-cols-2">
            <div className="flex items-center space-x-3">
              <a href={final_content.deployed_site}>
                <img
                  src={final_content.status_icon}
                  className="object-contain items-center h-10 w-10 hover:border-4 rounded-full border-green-800"
                ></img>
              </a>
              <p className="text-left">{final_content.status_key}</p>
            </div>
            <div className="px-2 font-semibold text-blue-800 flex items-center">
              <a href={final_content.deployed_site}>
                {final_content.deployed_key}
              </a>
            </div>
          </div>
        </div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          Tech/Libraries
        </h2>
        {final_content.tech.map(({ icon_source, lang, details }, index) => (
          <div
            key={index}
            className="bg-blue-100 rounded px-1 py-2 font-semibold text-black mb-3 text-xs md:text-sm items-center flex w-full space-x-4"
          >
            <div className="pl-2 md:pl-5 w-2/12">
              <img
                src={icon_source}
                className="object-contain items-center px-2"
              ></img>
              <div className="text-center">{lang}</div>
            </div>

            <div className="px-3 w-10/12 mr-3 font-light leading-tight transition-all duration-100 ease-in-out hover:leading-normal hover:px-2 hover:w-9/12">
              {" "}
              {details.split("<x>").map((elem, index) => (
                <p key={index} className="py-1 text-grey-800">
                  {elem}
                </p>
              ))}
            </div>
          </div>
        ))}

        <div className="flex flex-wrap justify-center mb-4"></div>
      </div>
    </div>
  );
};

export default ProjectCard;
