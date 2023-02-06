import React, { useEffect, useState } from "react";
import SliderIndex from "./index";

const Trending = () => {
  const [trendingData, setTrendingData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getdiscoverData = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=2`
        );

        const res2 = await res.json();
        setTrendingData(() => [...res2.results]);
        setLoading(false);
      } catch (error) {
        console.log("hatali", error);
      }
    };
    getdiscoverData();
  }, []);
  return <>{!loading && <SliderIndex sliderItems={trendingData} />}</>;
};

export default Trending;
