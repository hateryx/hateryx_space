import { useState, useEffect } from "react";
import icon from "../assets/images/icon.jpg";
import x from "../assets/images/X.svg";
import navbar from "../assets/css/navbar.css";

const NavBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const [isFixed, setIsFixed] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  useEffect(() => {
    function scrollHandler() {
      setIsHidden(true);
      setIsFixed(window.scrollY > 250);

      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      setTimeoutId(
        setTimeout(() => {
          setIsHidden(false);
        }, 1000)
      );
    }

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
      clearTimeout(timeoutId);
    };
  }, [timeoutId]);

  const clickHandler = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav
      className={`${
        isFixed ? "fixed top-0 inset-x-0 z-10 bg-white shadow" : ""
      } ${
        isHidden ? "-translate-y-full" : "translate-y-0"
      } transition-all duration-300 ease-in-out`}
    >
      <nav className="flex items-center justify-between flex-wrap border-b-2 q border-blue-900 p-6">
        <div className="flex items-center flex-shrink-0 text-gray-800 mr-6 bg-white">
          <img
            src={icon}
            alt="icon"
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-20 lg:h-20"
          ></img>
          <span className="font-semibold text-xl tracking-widest text-blue-900">
            Hateryx
          </span>
        </div>
        <div className="block lg:hidden">
          <button
            className="flex items-center px-3 py-2 border rounded border-blue-60 mr-3"
            onClick={clickHandler}
          >
            <svg
              className={`fill-current h-3 w-3 ${isCollapsed ? "" : "hidden"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            <img
              src={x}
              className={`${isCollapsed ? "hidden" : ""} w-3 h-3`}
            ></img>
          </button>
        </div>
        <div className="w-full flex-grow lg:flex md:hidden sm:hidden min-[320px]: hidden lg:items-center lg:text-right lg:w-auto  ">
          <div className="text-md tracking-tight lg:flex-grow">
            <a
              href="#about"
              onClick={() => {
                setIsHidden(true);
              }}
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-blue-400 mr-8 sm:hidden"
            >
              About Me
            </a>
            <a
              href="#project"
              onClick={() => {
                setIsHidden(true);
              }}
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-blue-400 mr-8"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={() => {
                setIsHidden(true);
              }}
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-blue-400 mr-8"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
      <ul
        className={`menu ${
          isCollapsed
            ? "text-center space-y-20 w-full h-0 transition-all ease-in-out duration-750 font-light text-xl tracking-widest"
            : "text-center pt-24 space-y-20 w-full h-screen transition-all ease-in-out duration-1000  font-light text-xl tracking-widest"
        }`}
        onClick={clickHandler}
      >
        <li>
          <a
            href="#about"
            onClick={() => {
              setIsHidden(true);
            }}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#project"
            onClick={() => {
              setIsHidden(true);
            }}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={() => {
              setIsHidden(true);
            }}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
