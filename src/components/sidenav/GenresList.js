import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const GenresList = () => {
  const page = useSelector((state) => state.page.value);
  const navigate = useNavigate();
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
    <div>
      <button onClick={() => navigate(-1)}>{"<"}</button>
      {data.map((genre) => (
        <ul>
          <li key={genre.id}>
            <Link to={`/${genreType}/${genre.name}/${genre.id}/page=${page}`}>
              {genre.name}
            </Link>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default GenresList;

// https://api.themoviedb.org/3/discover/movie?api_key=###&with_genres=28
