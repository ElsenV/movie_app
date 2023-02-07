import React from "react";

const CardList = ({ item }) => {

  return (
    <div className="w-full bg-center  bg-cover">
      <div className="group overflow-hidden relative cursor-pointer items-center justify-center  transition-shadow hover:shadow-xl hover:shadow-black/30  max-w-full h-full rounded-sm ">
        <img
          src={`https://image.tmdb.org/t/p/w185/${
            item.poster_path || item.profile_path
          }`}
          className="h-full w-full"
          alt={item.title || item.name}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/80 group-hover:to-black/70"></div>
        <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <h1 className="font-dmserif text-xl  opacity-0  group-hover:opacity-100 font-bold text-white">
            {item.title || item.name}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CardList;
