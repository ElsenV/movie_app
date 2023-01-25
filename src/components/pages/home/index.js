import React from "react";
import Discover from "../Discover";
import Carousel from "./Carousel";

const index = () => {
  return (
    <div>
      <Carousel />
      <div>Trending Movies</div>
      <div>Discover Movies</div>
      <div>Discover Tv series</div>
      <Discover />
    </div>
  );
};

export default index;
