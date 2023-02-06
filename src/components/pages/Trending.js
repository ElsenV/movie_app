import React, { useEffect, useState } from "react";
import CardList from "../container/CardList";
import { Link } from "react-router-dom";
import { sendDetails } from "../../setup/actions/dataAction";
import { useDispatch } from "react-redux";

const Trending = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`
        );
        const res2 = await res.json();
        setData(res2.results);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  return (
    <div className={data.length > 0 ? "h-full" : "h-screen"}>
      <ul className="grid grid-cols-1 mx-5 my-10  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {data.map((item, i) => (
          <Link
            to={`/details/${item.name || item.title || item.original_name}`}
            onClick={() => dispatch(sendDetails(item))}
          >
            <CardList item={item} key={i} />
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Trending;
