import React from "react";
import { Link } from "react-router-dom";

const CardList = ({ item }) => {
  console.log("item ", item);

  return (
    <li>
      {" "}
      <Link to={"/movie/details"}>
        
          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            {" "}
            <img
              src={`https://image.tmdb.org/t/p/w185/${item.poster_path}`}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              alt=""
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/80 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="font-dmserif text-3xl opacity-0  group-hover:opacity-100 font-bold text-white">
                {item.title}
              </h1>
            </div>
          </div>
        
      </Link>
      {/* <img src={`https://image.tmdb.org/t/p/w185/${item.poster_path}`} /> */}
    </li>
  );
};

export default CardList;

//https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg
//<img src={`https://image.tmdb.org/t/p/w300/${item.backdrop_path}`} />
