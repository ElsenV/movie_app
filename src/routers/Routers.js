import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../components/header/Header";
import Home from "../components/pages/home/index";
import Footer from "../components/footer/Footer";

import SideNav from "../components/sidenav/index";
import GenreList from "../components/sidenav/GenreList";
import GenresList from "../components/sidenav/GenresList";

import MovieDetails from "../components/container/MovieDetails";
import Trending from "../components/pages/Trending";
import Discover from "../components/pages/Discover";
import Search from "../components/pages/search/Search";
import MovieSearch from "../components/pages/search/MovieSearch";
import TvSearch from "../components/pages/search/TvSearch";
import PeopleSearch from "../components/pages/search/PeopleSearch";
import NotFound from "../components/pages/NotFound";
import AboutPeopleSearch from "../components/pages/search/AboutPeopleSearch";

const Routers = () => {
 
  return (
    <BrowserRouter>
      <Header />
      <div
        className="grid grid-cols-5 lg:grid-cols-6 dark:bg-gray-700 h-auto "
        id="container"
      >
        <div
          className="col-span-6 hidden lg:block sm:col-span-1  h-full w-full"
          id="sideNavigation"
        >
          <SideNav />
        </div>
        <div className="col-span-6 sm:col-span-5 overflow-hidden">
          <Routes>
            {["/", "/home"].map((path) => (
              <Route path={path} element={<Home />} />
            ))}
            <Route path="genre/:genre" element={<GenresList />} />
            <Route path="/:genre/:name/:id/:page" element={<GenreList />} />
            <Route path="/trending" element={<Trending />} />
            {["/:genre/:name/:id/details/:name", "/details/:name"].map(
              (path) => (
                <Route path={path} element={<MovieDetails />} />
              )
            )}
            <Route path={`/Discover`} element={<Discover />} />
            <Route path={"/search"} element={<Search />} />
            <Route
              path={"/search/Movie/:name/:page"}
              element={<MovieSearch />}
            />
            <Route path={"/search/Tv/:name/:page"} element={<TvSearch />} />
            <Route
              path={"/search/People/:name/:page"}
              element={<PeopleSearch />}
            />
            <Route path={"/about/:name"} element={<AboutPeopleSearch />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>

      <Footer />
    </BrowserRouter>
  );
};

export default Routers;
