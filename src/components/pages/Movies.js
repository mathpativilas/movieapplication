import { Grid, Typography } from "@mui/material";
import axios from "axios";
import React from "react";

import TrendingConent from "./../TrendingConent";
import TrendingPagination from "./../pagination/TrendingPagination";

function Movies() {
  const [page, setpage] = React.useState(1);
  const [content, setcontent] = React.useState([]);
  const [numofpages, setnumofpages] = React.useState(500);

  console.log(content);
  console.log(numofpages);

  React.useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
      )
      .then((response) => {
        setcontent(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page]);

  return (
    <>
      <Typography
        variant="h5"
        sx={{
          color: "white",
          textAlign: "center",
        }}
      >
        Movies
      </Typography>
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
              media="movies"
            />
          );
        })}
        <TrendingPagination numofpages={numofpages} setpage={setpage} />
      </Grid>
    </>
  );
}

export default Movies;
