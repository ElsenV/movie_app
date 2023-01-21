import React from "react";
import Routers from "./routers/Routers";

const App = () => {
  return (
    <div className="mx-4 mx-auto">
      <Routers />
    </div>
  );
};

export default App;

// API Anahtarı (v3 auth)  ea7296564f967d1269ba327e2cc5d408
// https://api.themoviedb.org/3/movie/550?api_key=ea7296564f967d1269ba327e2cc5d408

// API Okuma Erişim Jetonu (v4 auth)
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYTcyOTY1NjRmOTY3ZDEyNjliYTMyN2UyY2M1ZDQwOCIsInN1YiI6IjYyM2NiODdlNTU0MWZhMDA5MjY0NWU1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Y5EgcmE1do87Xh5WCoZCSQxShS7G2FHn8eBozb77PoQ
