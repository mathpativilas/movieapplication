import React from "react";
import { AppBar, Toolbar, styled, Typography, Stack } from "@mui/material";
import MovieIcon from "@mui/icons-material/Movie";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";

const MyToolbar = styled(Toolbar)({
  backgroundColor: "#39445a",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

function Header() {
  return (
    <Stack>
      <AppBar>
        <MyToolbar
          sx={{
            p: { xs: 1, sm: 2 },
          }}
        >
          <Typography
            onClick={() => window.scroll(0, 0)}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontFamily: "Ubuntu, sans-serif",

              cursor: "pointer",

              fontSize: {
                lg: 40,
                md: 35,
                sm: 30,
                xs: 25,
              },
            }}
          >
            <MovieIcon
              fontSize="30px"
              sx={{
                m: 1,
              }}
            />
            Entertainment Hub
            <VideoCameraBackIcon
              fontSize="30px"
              sx={{
                m: 1,
              }}
            />
          </Typography>
        </MyToolbar>
      </AppBar>
    </Stack>
  );
}

export default Header;
