import {
  TextField,
  Typography,
  Box,
  createTheme,
  ThemeProvider,
  Button,
  Tabs,
  Tab,
  Stack,
} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
function Search() {
  const [type, settype] = React.useState(0);
  const [page, setpage] = React.useState(1);
  const [searchtext, setsearchtext] = React.useState();
  const [content, setcontent] = React.useState();
  const [numofpage, setnumofpages] = React.useState();

  const darktheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#fff",
      },
    },
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
        SEARCH
      </Typography>
      <ThemeProvider theme={darktheme}>
        <Box display="flex" justifyContent="center" alignItems="center" pt={2}>
          <TextField
            className="searchBox"
            label="Search"
            variant="filled"
            sx={{
              width: "78%",
            }}
          />
          <Button
            variant="contained"
            sx={{
              marginLeft: "5px",
            }}
          >
            <SearchIcon
              sx={{
                fontSize: "42px",
              }}
            />
          </Button>
        </Box>

        <Tabs
          onChange={(event, newval) => {
            settype(newval);
            setpage(1);
          }}
          value={type}
          aria-label="basic tabs example"
          indicatorColor="primary"
          textColor="primary"
          sx={{
            marginLeft: { xs: "10px", sm: "20px", md: "170px" },
            paddingTop: "20px",
          }}
        >
          <Tab
            sx={{
              width: "50%",
            }}
            label="Search Movies"
          />
          <Tab
            sx={{
              width: "50%",
            }}
            label="Search Tv Series"
          />
        </Tabs>
      </ThemeProvider>
    </>
  );
}

export default Search;
