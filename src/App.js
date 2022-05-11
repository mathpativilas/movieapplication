import React from "react";
import Header from "./components/Header";

import "./App.css";
import SimpleBottomNavigation from "./components/SimpleBottomNavigation";
import Trending from "./components/pages/Trending";
import Movies from "./components/pages/Movies";
import TvSeries from "./components/pages/TvSeries";
import Search from "./components/pages/Search";
import { Stack } from "@mui/material";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="app">
      <Header />

      <Stack
        sx={{
          paddingTop: { xs: "80px", sm: "100px" },
          paddingBottom: "100px",
        }}
      >
        <Routes>
          <Route path="/" element={<Trending />} />
          <Route path="movies" element={<Movies />} />
          <Route path="tvseries" element={<TvSeries />} />
          <Route path="search" element={<Search />} />
        </Routes>
      </Stack>

      <SimpleBottomNavigation />
    </div>
  );
}

export default App;

