import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CardList from "../container/CardList";
import Pagination from "../pages/Pagination";
import { useSelector } from "react-redux";

const GenreList = () => {
  const page = useSelector((state) => state.page.value);
  console.log("GENRE  LIST", page);
  const { genre, name, id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/discover/${genre}?api_key=${process.env.REACT_APP_API_KEY}&with_genres=${id}&page=${page}`
        );
        const res2 = await res.json();
        setData(res2.results);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [page]);
  return (
    <>
      <div>
        <ul className="grid grid-cols-1 mb-10 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {data.map((item, i) => (
            <CardList item={item} key={i} />
          ))}
        </ul>
        <div className="flex justify-center mb-10">
          <Pagination />
        </div>
      </div>
    </>
  );
};

export default GenreList;

// https://api.themoviedb.org/3/discover/${genre}?api_key={recess.envREACT_APP_API_KEY}&with_genres=${id}

//`https://api.themoviedb.org/3/discover/${genre}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`

//https://api.themoviedb.org/3/discover/tv?api_key=<<api_key>>&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0
