import { Chip, Box } from "@mui/material";
import axios from "axios";
import React from "react";

function Customchip({
  genres,
  setgenres,
  selectedGenres,
  setselectedGenres,
  type,
  setpage,
}) {
  const handleAdd = (genre) => {
    setselectedGenres([...selectedGenres, genre]);
    setgenres(genres.filter((g) => g.id !== genre.id));
    setpage(1);
  };

  const handleRemove = (genre) => {
    setselectedGenres(
      selectedGenres.filter((selected) => selected.id !== genre.id)
    );
    setgenres([...genres, genre]);
    setpage(1);
  };

  React.useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/genre/${type}/list?api_key=d2f787a93d81f91dcf7ae82ab9c8c145&language=en-US`
      )
      .then((response) => {
        setgenres(response.data.genres);
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line
  }, []);

  return (
    <Box direction="row" p={2} textAlign="center">
      {selectedGenres &&
        selectedGenres.map((genre) => {
          return (
            <Chip
              key={genre.id}
              clickable
              color="primary"
              onDelete={() => handleRemove(genre)}
              size="small"
              label={genre.name}
            />
          );
        })}

      {genres &&
        genres.map((genre) => {
          return (
            <Chip
              key={genre.id}
              clickable
              size="small"
              onClick={() => handleAdd(genre)}
              label={genre.name}
              sx={{
                color: "black",
                backgroundColor: "white",
                margin: "5px",
              }}
            />
          );
        })}
    </Box>
  );
}

export default Customchip;
