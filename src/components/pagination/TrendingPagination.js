import { createTheme, Pagination, Stack, ThemeProvider } from "@mui/material";
import React from "react";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

function TrendingPagination({ setpage, numofpages = 10 }) {
  const handlechange = (event, newval) => {
    setpage(newval);
    window.scroll(0, 0);
  };
  return (
    <Stack justifyContent="center" alignItems="center" mt={3}>
      <ThemeProvider theme={theme}>
        <Pagination
          count={numofpages}
          onChange={handlechange}
          size="large"
          hideNextButton
          hidePrevButton
          color="primary"
        />
      </ThemeProvider>
    </Stack>
  );
}

export default TrendingPagination;
