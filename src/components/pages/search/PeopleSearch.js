import React, { useEffect, useState } from "react";
import SearchForm from "./SearchForm";
import { Link, useParams } from "react-router-dom";
import CardList from "../../container/CardList";
import { sendDetails } from "../../../setup/actions/dataAction";
import { useDispatch } from "react-redux";

const PeopleSearch = () => {
  const dispatch = useDispatch();
  const [getData, setGetData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { name } = useParams();

  useEffect(() => {
    const getSearchedMovie = async () => {
      try {
        const res = await fetch(
          ` https://api.themoviedb.org/3/search/person?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${name}&page=1&include_adult=false `
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
    <>
      <SearchForm />
      {!loading && !getData.length > 0 && (
        <h1 className="flex justify-center text-gray-900 dark:text-gray-200 text-lg md:text-2xl mt-10">
          Data Not Found
        </h1>
      )}
      <div
        className={`${
          getData.length > 0 ? "h-full" : "h-screen"
        } translate-y-[100%] ${
          getData.length > 0 &&
          `translate-y-1 transition-all duration-1000 ease-in-out`
        }`}
      >
        {!loading && (
          <div>
            {!getData.length > 0 && (
              <h1 className="flex justify-center text-gray-900 dark:text-gray-200 text-lg md:text-2xl mt-10">
                Data Not Found
              </h1>
            )}
            <ul
              className={`grid grid-cols-1 mx-5 my-10  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4`}
            >
              {getData.map((item, i) => (
                <Link
                  to={`/about/${item.name || item.title || item.original_name}`}
                  onClick={() => dispatch(sendDetails(item))}
                >
                  {<CardList item={item} key={i} />}
                </Link>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default PeopleSearch;
