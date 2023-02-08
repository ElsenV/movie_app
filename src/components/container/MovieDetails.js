import React from "react";
import { useSelector } from "react-redux";

const MovieDetails = () => {
  const item = useSelector((state) => state.details.item);
  console.log("details", item);
  return (
    <div>
      <div className=" w-full h-screen relative pb-4 lg:pb-0">
          <div
            className="flex justify-center items-center bg-center bg-cover w-full bg-gray-900 h-full  opacity-10 absolute"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w300/${
                item.backdrop_path || item.known_for.backdrop_path
              })`,
            }}
          ></div>

        <div className="w-full h-full flex absolute grid grid-cols-3 pt-1 lg:pt-10">
          {" "}
          <div className="  mx-auto  lg:ml-[10%]  opacity-90 col-span-3 lg:col-span-1  ">
            <img
              src={`https://image.tmdb.org/t/p/w780/${
                item.poster_path || item.profile_path
              }`}
              className="rounded-xl w-56 h-64 sm:w-72 sm:h-72 md:w-72 md:h-80 lg:w-auto lg:h-auto"
            />
          </div>{" "}
          <div className="text-gray-900 dark:text-gray-300 col-span-3 lg:col-span-2 mx-4 lg:mx-0 lg:pl-[5%]  lg:pr-16  ">
            <h1 className="text-2xl md:text-4xl lg:text-5xl pb-4 lg:pb-8 ">
              {item.title || item.original_name || item.name}
            </h1>
            <p className="pt-1 text-sm sm:text-lg ">
              Release date -
              <span className="dark:text-yellow-500 text-yellow-600">
                {" "}
                {item.release_date || item.first_air_date}
              </span>
            </p>
            <p className="pt-1 text-sm sm:text-lg">
              Vote Average -
              <span className="dark:text-yellow-500 text-yellow-600">
                {item.vote_average}
              </span>
            </p>
            <p className="pt-1 text-sm sm:text-lg ">
              Vote Count -{" "}
              <span className="dark:text-yellow-500 text-yellow-600">
                {item.vote_count}
              </span>
            </p>
            <p className="pt-1 text-sm sm:text-lg">
              Language -{" "}
              <span className="dark:text-yellow-500 text-yellow-600">
                {item.original_language || item.original_language}
              </span>
            </p>
            <p className="pt-1 text-sm sm:text-lg ">
              Popularity -{" "}
              <span className="dark:text-yellow-500 text-yellow-600">
                {item.popularity}
              </span>
            </p>
            <p className="pt-2 text-sm sm:text-lg  ">
              Overview -{" "}
              {item.overview ? item.overview.substring(0, 180) + " ..." : "N/A"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
