import React from "react";
import Carousel from "./Carousel";

import Trending from "./slider/Trending";
import DiscoverMovie from "./slider/DiscoverMovie";
import DiscoverSeries from "./slider/DiscoverSeries";
import Title from "./slider/Title";
const index = () => {
  return (
    <div className="my-8 h-full">
      <Carousel />

      <Title title={`Trending Movies`} />
      <Trending />

      <Title title={`Discover Movies`} />
      <DiscoverMovie />

      <Title title={`Discover Tv Series`} />
      <DiscoverSeries />
    </div>
  );
};

export default index;
