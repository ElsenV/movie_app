import React from "react";
import { Link } from "react-router-dom";

const Index = () => {
  const genres = ["Movie", "Tv"];
  const sideMenu = ["Home", "Discover", "Trending", "Search"];
  return (
    <div className="pl-4 md:pl-6 lg:pl-8 xl:pl-10">
      <ul>
        {sideMenu.map((item, i) => (
          <li>
            <Link to={`${item}`}>{item}</Link>
          </li>
        ))}
        {genres.map((genre, i) => (
          <li key={i}>
            <Link to={`genre/${genre}`} state={{ genre: genre }}>
              {genre}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Index;
