import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/header/Header";
import GenresList from "../components/sidenav/GenresList";
import SideNav from "../components/sidenav/index";
import GenreList from "../components/sidenav/GenreList";
import Trending from "../components/pages/Trending";
const Routers = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<SideNav />} />
        <Route path="genre/:genre" element={<GenresList />} />
        <Route path="/:genre/:name/:id" element={<GenreList />} />
        <Route path="/trending" element={<Trending />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
