import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import GenresList from "../components/sidenav/GenresList";
import SideNav from "../components/sidenav/index";
import GenreList from "../components/sidenav/GenreList";
import Trending from "../components/pages/Trending";
import SideMenu from "../components/sidenav/SideMenu";
import Home from "../components/pages/home/index";
const Routers = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="grid grid-cols-6 dark:bg-gray-700">
        <div className="col-span-1">
          <SideNav />
        </div>
        <div className="col-span-5">
          <Routes>
            {["/", "/home"].map((path) => (
              <Route path={path} element={<Home />} />
            ))}
            <Route path="genre/:genre" element={<GenresList />} />
            <Route path="/:genre/:name/:id/:page" element={<GenreList />} />
            <Route path="/trending" element={<Trending />} />
          </Routes>
        </div>
      </div>

      <Footer />
    </BrowserRouter>
  );
};

export default Routers;
