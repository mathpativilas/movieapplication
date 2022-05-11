import { Box, Stack, Typography, Badge } from "@mui/material";
import React from "react";
import { img_300 } from "./config";
import { unavailable } from "./config";
import ContentModal from "./Contentmodal/ContentModal";

function TrendingConent({ title, poster, id, media, rating, date }) {
  return (
    <>
      <ContentModal media={media} id={id}>
        <Box
          component="img"
          sx={{
            width: "100%",
            borderRadius: "10px",
          }}
          alt={title}
          src={poster ? `${img_300}/${poster}` : unavailable}
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
      </ContentModal>
    </>
  );
}

export default TrendingConent;
