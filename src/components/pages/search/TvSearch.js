import React, { useEffect, useState } from "react";
import SearchForm from "./SearchForm";
import { Link, useParams } from "react-router-dom";
import CardList from "../../container/CardList";
import { sendDetails } from "../../../setup/actions/dataAction";
import { useDispatch } from "react-redux";

const TvSearch = () => {
  const dispatch = useDispatch();
  const [getData, setGetData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { name } = useParams();

  useEffect(() => {
    const getSearchedMovie = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/search/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${name}&page=3&include_adult=false `
        );
        const data = await res.json();
        setGetData(data.results);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getSearchedMovie();
  }, [name]);
  return (
    <div className={getData.length > 0 ? "h-full" : "h-screen"}>
      {!loading && (
        <div>
          <SearchForm />
          {!getData.length > 0 && (
            <h1 className="flex justify-center text-gray-900 dark:text-gray-200 text-lg md:text-2xl mt-10">
              Data Not Found
            </h1>
          )}
          <ul className="grid grid-cols-1 mx-5 my-10  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {getData.map((item, i) => (
              <Link
                to={`/details/${item.name || item.title || item.original_name}`}
                onClick={() => dispatch(sendDetails(item))}
              >
                {<CardList item={item} key={i} />}
              </Link>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TvSearch;

