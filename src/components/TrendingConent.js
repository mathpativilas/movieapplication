import { Box, Stack, Typography, Grid, Badge } from "@mui/material";
import React from "react";
import { img_300 } from "./config";

function TrendingConent({ title, poster, id, media, rating, date }) {
  return (
    <>
      <Grid
        item
        lg={2}
        md={3}
        sm={4}
        xs={5}
        m={1}
        sx={{
          fontFamily: "Montserrat ,sans-serif",
          backgroundColor: "#2d313a",
          borderRadius: "10px",
          marginTop: "10px",
          padding: "5px",
          position: "relative",
          color: "#fff",
          " &:hover": {
            transition: "0.5s ease",
            backgroundColor: "white",
            color: "black",
          },
        }}
      >
        <Box
          component="img"
          sx={{
            width: "100%",
            borderRadius: "10px",
          }}
          alt={title}
          src={`${img_300}/${poster}`}
        />
        <Badge
          badgeContent={rating}
          color={rating > 6 ? "primary" : "secondary"}
          sx={{
            position: "absolute",
            left: 0,
            right: 0,
          }}
        />
        <Typography
          sx={{
            fontSize: { xs: "17px", sm: "20px" },
          }}
          fontWeight={400}
          textAlign="center"
        >
          {title}
        </Typography>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mt={1}
          sx={{
            padding: "0 15px",
          }}
        >
          <span>{media === "tv" ? "Tv Serirs" : "Movie"}</span>
          <span>{date}</span>
        </Stack>
      </Grid>
    </>
  );
}

export default TrendingConent;
