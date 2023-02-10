import React from "react";
import { Link } from "react-router-dom";
import DarkModeSwitch from "../header/DarkModeSwitch";
import { BiMoviePlay, BiTrendingUp } from "react-icons/bi";
import { SlScreenDesktop } from "react-icons/sl";
import { TfiHome, TfiSearch } from "react-icons/tfi";
import { RiCompassDiscoverLine } from "react-icons/ri";
const Index = () => {
  const genres = [
    { name: "Movie", icon: <BiMoviePlay /> },
    { name: "Tv", icon: <SlScreenDesktop /> },
  ];
  const sideMenu = [
    { name: "Home", icon: <TfiHome /> },
    { name: "Discover", icon: <RiCompassDiscoverLine /> },
    { name: "Trending", icon: <BiTrendingUp /> },
    { name: "Search", icon: <TfiSearch /> },
  ];
  return (
    <>
      <div className="bg-gray-100 dark:text-gray-200 dark:bg-slate-800 pl-2 sm:pl-1 md:pl-3 lg:pl-6 xl:pl-8 h-full text-md sm:text-lg md:text-xl lg:text-2xl w-full ">
        <ul className="relative pt-4">
          {sideMenu.map((item, i) => (
            <li className="mb-5 cursor-pointer hover:bg-gray-200 dark:active:bg-gray-900 dark:hover:bg-gray-700 sm:text-md md:text-lg lg:text-2xl ">
              <Link to={`${item.name}`}>
                {console.log(item.name)}
                <div className="flex items-center ">
                  <div className="text-lg sm:text-xl  lg:text-2xl pr-1.5 md:pr-3">
                    {item.icon}
                  </div>
                  <div>{item.name}</div>
                </div>
              </Link>
            </li>
          ))}
          {genres.map((genre, i) => (
            <li
              key={i}
              className=" mb-5 cursor-pointer hover:bg-gray-200 dark:active:bg-gray-900 dark:hover:bg-gray-700 sm:text-md md:text-lg lg:text-2xl "
            >
              <Link to={`genre/${genre.name}`} state={{ genre: genre }}>
                <div className="flex items-center ">
                  <div className="text-lg sm:text-xl  lg:text-2xl pr-1.5 md:pr-3">
                    {genre.icon}
                  </div>
                  <div>{genre.name}</div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Index;

{
  /* <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
	<div class="relative py-3 sm:max-w-xl sm:mx-auto">
		<a href="#" class="font-display max-w-sm text-2xl font-bold leading-tight">
			<span class="link link-underline link-underline-black text-black"> Hover to See the Effect </span>
		</a>
	</div>
</div>


<style>
	.link-underline {
		border-bottom-width: 0;
		background-image: linear-gradient(transparent, transparent), linear-gradient(#fff, #fff);
		background-size: 0 3px;
		background-position: 0 100%;
		background-repeat: no-repeat;
		transition: background-size .5s ease-in-out;
	}

	.link-underline-black {
		background-image: linear-gradient(transparent, transparent), linear-gradient(#F2C, #F2C)
	}

	.link-underline:hover {
		background-size: 100% 3px;
		background-position: 0 100%
	}
</style> */
}
