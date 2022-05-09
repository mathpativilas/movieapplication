import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import MovieIcon from "@mui/icons-material/Movie";
import SearchIcon from "@mui/icons-material/Search";
import TvIcon from "@mui/icons-material/Tv";
import React from "react";
import { Link } from "react-router-dom";

function SimpleBottomNavigation() {
  return (
    <BottomNavigation
      showLabels
      sx={{
        zIndex: 100,
        width: "100%",
        position: "fixed",
        bottom: 0,
        left: 0,
        backgroundColor: "#2d313a",
      }}
    >
      <BottomNavigationAction
        component={Link}
        to="/"
        label="Trendings"
        value="recents"
        sx={{
          color: "white",
        }}
        icon={<WhatshotIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to="movies"
        label="Movies"
        value="favorites"
        sx={{
          color: "white",
        }}
        icon={<MovieIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to="tvseries"
        label="Tv Series"
        value="nearby"
        sx={{
          color: "white",
        }}
        icon={<TvIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to="search"
        label="Search"
        sx={{
          color: "white",
        }}
        icon={<SearchIcon />}
      />
    </BottomNavigation>
  );
}

export default SimpleBottomNavigation;
