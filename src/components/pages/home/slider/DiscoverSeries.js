import React, { useState, useEffect } from "react";
import SlicerIndex from "./index";

const DiscoverSeries = () => {
  const [discoverTv, setDiscoverTv] = useState([]);
  const [loading, setLoading] = useState(true);

 
  useEffect(() => {
    const getDiscoverSeriesData = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`
        );
        const res2 = await res.json();
        setDiscoverTv(res2.results);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getDiscoverSeriesData();
  }, []);
  return <>{!loading && <SlicerIndex sliderItems={discoverTv} />}</>;
};

export default DiscoverSeries;


