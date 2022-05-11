import {
  TextField,
  Typography,
  Box,
  Grid,
  createTheme,
  ThemeProvider,
  Button,
  Tabs,
  Tab,
} from "@mui/material";
import React from "react";

import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import TrendingConent from "./../TrendingConent";
import TrendingPagination from "./../pagination/TrendingPagination";
function Search() {
  const [type, settype] = React.useState(0);
  const [page, setpage] = React.useState(1);
  const [searchtext, setsearchtext] = React.useState("");
  const [content, setcontent] = React.useState([]);
  const [numofpages, setnumofpages] = React.useState();

  const darktheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#fff",
      },
    },
  });

  const fetchSearch = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${
          process.env.REACT_APP_API_KEY
        }&language=en-US&query=${searchtext}&page=${page}`
      );
      setcontent(data.results);
      setnumofpages(data.total_pages);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    window.scroll(0, 0);
    fetchSearch();
    // eslint-disable-next-line
  }, [type, page]);

  return (
    <>
      <Typography
        sx={{
          color: "white",
          textAlign: "center",
          fontSize: { xs: "25px", sm: "40px" },
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
            onChange={(e) => setsearchtext(e.target.value)}
          />
          <Button
            variant="contained"
            onClick={fetchSearch}
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
      <Grid container justifyContent="center">
        {content &&
          content.map((item) => {
            return (
              <TrendingConent
                key={item.id}
                id={item.id}
                rating={item.vote_average}
                title={item.title || item.name}
                poster={item.poster_path}
                date={item.release_date || item.first_air_date}
                media={type ? "tv" : "movie"}
              />
            );
          })}
      </Grid>

      {searchtext && !content && <h2>No Series Found</h2>}
      {numofpages > 1 && (
        <TrendingPagination setPage={setpage} numOfPages={numofpages} />
      )}
    </>
  );
}

export default Search;
