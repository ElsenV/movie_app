import React, { useState, useEffect } from "react";
import SliderIndex from "./index";

const DiscoverMovie = () => {
  const [discoverData, setDiscoverData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getDiscoverMovieData = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=5&with_watch_monetization_types=flatrate`
        );
        const res2 = await res.json();
        setDiscoverData(res2.results);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getDiscoverMovieData();
  }, []);
  return (
    <>
      {!loading && (
        <SliderIndex sliderItems={discoverData} />
      )}
    </>
  );
};

export default DiscoverMovie;
