import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const GenresList = () => {
  const genreName = useParams();
  const genreType = genreName.genre.toLowerCase();
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/genre/${genreType}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
        );
        const res2 = await res.json();
        setData(res2.genres);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [genreType]);

  return (
    <div
      className={`${
         "h-full"
      } -translate-y-[100%] ${
        data.length > 0 &&
        `-translate-y-1 transition-all duration-1000 ease-in-out`
      } py-4`}
    >
      {data.map((genre) => (
        <ul>
          <li
            key={genre.id}
            className="pt-2 mx-10  dark:text-white  lg:text-lg relative inline-block  before:absolute before:content-[''] before:left-0 before:bottom-0 before:w-0 before:h-0.5 before:bg-yellow-500 dark:before:bg-yellow-400 hover:before:w-[100%] before:transition-all before:duration-200 before:ease-out"
          >
            <Link to={`/${genreType}/${genre.name}/${genre.id}/page=${1}`}>
              {genre.name}
            </Link>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default GenresList;
