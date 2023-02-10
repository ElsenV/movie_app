import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import DarkModeSwitch from "./DarkModeSwitch";
import icon from "../../images/icon.png"
const Header = () => {
  const [clicked, setClicked] = useState(false);
  const sideNav = document.getElementById("sideNavigation");
  const container = document.getElementById("container");

  const controlSideMenu = () => {
    setClicked(!clicked);
  };

  useEffect(() => {
    try {
      if (clicked) {
        sideNav.classList.remove("hidden");
        container.classList.add("grid-cols-6");
      } else {
        sideNav.classList.add("hidden");
        container.classList.remove("grid-cols-6");
      }
    } catch (error) {
      console.log(error);
    }
  }, [clicked]);

  return (
    <nav className="bg-gray-200 border-gray-200 px-4 lg:px-6   py-2.5 dark:bg-slate-900">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <div className="flex">
          {" "}
          <Link to={"/"} className="flex items-center">
            <img
            
            src={icon}
              className="mr-3 h-5 sm:h-7"
              alt="Movie and series book"
            />
            <span className="self-center text-xl md:text-2xl lg:text-3xl font-semibold whitespace-nowrap dark:text-white">
              Films<span className="text-yellow-400 ">book</span>
              
            </span>
          </Link>
          <div
            className="hidden mx-5 items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            {/* <ul className="flex mx-5 flex-col mt-4 font-medium lg:flex-row lg:space-x-4 lg:mt-0 text-sm md:text-lg">
              <li>
                <Link
                  to={"/genre/movie"}
                  className="block py-2 pr-4 pl-3 text-dark rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                  aria-current="page"
                >
                  Movie
                </Link>
              </li>
              <li>
                <Link
                  to={"/genre/tv"}
                  className="block  py-2 pr-4 pl-3 text-dark rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                  aria-current="page"
                >
                  TV
                </Link>
              </li>
              <li>
                <Link
                  to={"/discover"}
                  className="block  py-2 pr-4 pl-3 text-dark rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                  aria-current="page"
                >
                  Discover
                </Link>
              </li>
              <li>
                <Link
                  to={"/trending"}
                  className="block  py-2 pr-4 pl-3 text-dark rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                  aria-current="page"
                >
                  Trending
                </Link>
              </li>
            </ul> */}
          </div>
        </div>
        {/* <div className="mb-5 hidden lg:block">
          <DarkModeSwitch />
        </div> */}

        {/*HAMBURGER MENU */}
        <div className="flex items-start lg:order-2">
          <button
            data-collapse-toggle="mobile-menu-2"
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
            onClick={() => controlSideMenu()}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
