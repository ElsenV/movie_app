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
    <div className="h-screen">
      {data.map((genre) => (
        <ul>
          <li
            key={genre.id}
            className="pt-1.5 mx-10 hover:bg-gray-200 dark:hover:bg-gray-500 dark:text-white  lg:text-lg"
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
