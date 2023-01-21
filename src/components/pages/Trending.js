import React, { useEffect, useState } from "react";
import CardList from "../container/CardList";
const Trending = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`
        );
        const res2 = await res.json();
        console.log("trend", res2.results);
        setData(res2.results);
        setPage(res.total_pages);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  return (
    <div>
      Trending
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {data.map((item, i) => (
          <CardList item={item} key={i} />
        ))}
      </ul>
    </div>
  );
};

export default Trending;

//https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>
