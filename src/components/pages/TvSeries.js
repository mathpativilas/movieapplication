import { Typography, Grid } from "@mui/material";
import axios from "axios";

import React from "react";
import Customchip from "../Customchip";
import useGenre from "./../Hooks/useGenre";
import TrendingConent from "./../TrendingConent";
import TrendingPagination from "./../pagination/TrendingPagination";

function TvSeries() {
  const [page, setpage] = React.useState(1);
  const [content, setcontent] = React.useState([]);
  const [numofpages, setnumofpages] = React.useState(500);
  const [selectedGenres, setselectedGenres] = React.useState([]);
  const [genres, setgenres] = React.useState([]);
  const genreforURL = useGenre(selectedGenres);

  React.useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`
      )
      .then((response) => {
        setcontent(response.data.results);
        setnumofpages(response.data.total_pages);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page, genreforURL]);

  return (
    <>
      <Typography
        sx={{
          color: "white",
          textAlign: "center",
          fontSize: { xs: "25px", sm: "40px" },
        }}
      >
        Discover Series
      </Typography>
      <Customchip
        type="tv"
        selectedGenres={selectedGenres}
        setselectedGenres={setselectedGenres}
        genres={genres}
        setgenres={setgenres}
        setpage={setpage}
      />
      <Grid container justifyContent="center">
        {content.map((item) => {
          return (
            <TrendingConent
              key={item.id}
              id={item.id}
              rating={item.vote_average}
              title={item.title || item.name}
              poster={item.poster_path}
              date={item.release_date || item.first_air_date}
              media="tv"
            />
          );
        })}
        <TrendingPagination numofpages={numofpages} setpage={setpage} />
      </Grid>
    </>
  );
}

export default TvSeries;
