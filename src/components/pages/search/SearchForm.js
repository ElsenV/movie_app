import React, { useState } from "react";
import { Link } from "react-router-dom";

const SearchForm = () => {
  const [searchType, setSearchType] = useState("Movie");
  const [searchInput, setSearchInput] = useState("");
  return (
    <form>
      <div className="flex py-5 sm:p-10 ">
        <div
          id="dropdown"
          className="z-10   divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
        >
          <select
            className="inline-flex items-center py-2.5 px-2 sm:px-4 text-md font-lg text-center text-gray-900 bg-gray-100 border border-gray-300 dark:border-gray-700 dark:text-white rounded-l-lg hover:bg-gray-200  outline-none  dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800 w-full h-full cursor-pointer"
            aria-labelledby="dropdown-button "
            onChange={(e) => setSearchType(e.target.value)}
          >
            <option value="Movie">Movie</option>
            <option value="Tv">Tv</option>
            <option value="People">People</option>
          </select>
        </div>
        <div className="relative w-full">
          <input
            type="search"
            id="search-dropdown"
            className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-100 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
            placeholder="Search"
            required
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <Link to={`/search/${searchType}/${searchInput}/page=${1}`}>
            <button
              type="submit"
              className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
