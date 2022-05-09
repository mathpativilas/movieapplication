import { Grid, Typography } from "@mui/material";
import axios from "axios";
import React from "react";
import TrendingPagination from "../pagination/TrendingPagination";
import TrendingConent from "../TrendingConent";

function Trending() {
  const [content, setcontent] = React.useState([]);
  const [page, setpage] = React.useState(1);
  React.useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
      )
      .then((response) => {
        setcontent(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page]);

  const some = content.map((item) => {
    return (
      <TrendingConent
        key={item.id}
        id={item.id}
        rating={item.vote_average}
        title={item.title || item.name}
        poster={item.poster_path}
        date={item.release_date || item.first_air_date}
        media={item.media_type}
      />
    );
  });

  return (
    <>
      <Typography
        variant="h5"
        sx={{
          color: "white",
          textAlign: "center",
        }}
      >
        Trendings
      </Typography>

      <Grid container justifyContent="center">
        {some}
      </Grid>
      <TrendingPagination setpage={setpage} />
    </>
  );
}

export default Trending;

// `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`
