import React from "react";
import { Link } from "react-router-dom";
import DarkModeSwitch from "../header/DarkModeSwitch";

const Index = () => {
  const genres = ["Movie", "Tv"];
  const sideMenu = ["Home", "Discover", "Trending", "Search"];
  return (
    <>
      <div className="bg-gray-100 dark:text-gray-200 dark:bg-slate-800 pl-2 sm:pl-4 md:pl-6 lg:pl-8 xl:pl-10 h-full text-md sm:text-lg md:text-xl lg:text-2xl w-full ">
        <ul>
          {sideMenu.map((item, i) => (
            <li className="pt-4 hover:bg-gray-200 dark:hover:bg-gray-700 dark:active:bg-gray-900">
              <Link to={`${item}`}>{item}</Link>
            </li>
          ))}
          {genres.map((genre, i) => (
            <li
              key={i}
              className="pt-4 hover:bg-gray-200 dark:active:bg-gray-900 dark:hover:bg-gray-700 sm:text-md md:text-lg lg:text-2xl "
            >
              <Link to={`genre/${genre}`} state={{ genre: genre }}>
                {genre}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Index;
