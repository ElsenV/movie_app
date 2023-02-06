import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import CardList from "../container/CardList";
import Pagination from "../pages/Pagination";

import { useDispatch } from "react-redux";
import { sendDetails } from "../../setup/actions/dataAction";

const GenreList = () => {
  const dispatch = useDispatch();
  const { genre, name, id, page } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const newPage = page.split("=")[1];

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/discover/${genre}?api_key=${process.env.REACT_APP_API_KEY}&with_genres=${id}&page=${newPage}`
        );
        const res2 = await res.json();
        setData(res2.results);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [page, id]);
  return (
    <div className={!data.length > 0 ? "h-screen" : "h-full"}>
      {!loading && (
        <div>
          <ul className="grid grid-cols-1  mx-5 my-10 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {data.map((item, i) => (
              <Link
                to={`/${genre}/${name}/${id}/details/${item.title}`}
                onClick={() => dispatch(sendDetails(item))}
              >
                <CardList item={item} key={i} />
              </Link>
            ))}
          </ul>
          <div className="flex justify-center mb-10">
            {data.length > 0 && <Pagination page={newPage} />}
          </div>
        </div>
      )}
    </div>
  );
};

export default GenreList;

// https://api.themoviedb.org/3/discover/${genre}?api_key={recess.envREACT_APP_API_KEY}&with_genres=${id}

//`https://api.themoviedb.org/3/discover/${genre}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`

//https://api.themoviedb.org/3/discover/tv?api_key=<<api_key>>&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0
