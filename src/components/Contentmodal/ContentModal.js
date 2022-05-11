import React from "react";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import YouTubeIcon from "@mui/icons-material/YouTube";

import Typography from "@mui/material/Typography";
import { CardContent, Grid, styled, Card, Button } from "@mui/material";
import axios from "axios";
import { img_500 } from "../config";
import Carousel from "../Carousel/Carousel";

const Mybox = styled(Box)({
  width: "90%",
  height: "90%",
  backgroundColor: "#39445a",
  color: "white",
  borderRadius: "12px",
  border: "1px solid black ",
});

const MyModal = styled(Modal)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export default function ContentModal({ children, media, id }) {
  const [open, setOpen] = React.useState(false);
  const [content, setcontent] = React.useState([]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [video, setvideo] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/${media}/${id}?api_key=${process.env.REACT_APP_API_KEY}`
      )
      .then((response) => {
        setcontent(response.data);
      });

    // eslint-disable-next-line
  }, []);
  React.useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/${media}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}`
      )
      .then((response) => {
        setvideo(response.data.results[0]?.key);
      }) .catch((err) => {
        console.log(err);
      });

    // eslint-disable-next-line
  }, []);

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
        onClick={handleOpen}
      >
        {children}
      </Grid>
      <div>
        <MyModal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          sx={{
            padding: { xs: "40px", sm: "100px" },
          }}
        >
          <Fade in={open}>
            <Mybox
              sx={{
                padding: { xs: "40px", sm: "40px", md: "20px" },
              }}
            >
              <Box
                sx={{
                  display: "flex",

                  flexDirection: { xs: "column", sm: "column", md: "row" },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box display={{ xs: "none", sm: "none", md: "block" }}>
                    <img
                      src={`${img_500}/${content.poster_path}`}
                      alt=""
                      width="90%"
                    />
                  </Box>
                  <Box display={{ xs: "", sm: "", md: "none" }}>
                    <img
                      src={`${img_500}/${content.backdrop_path}`}
                      alt=""
                      width="90%"
                    />
                  </Box>
                </Box>

                <Box
                  ml={1}
                  width={{ sm: "100%", md: "60%" }}
                  sx={{
                    fontFamily: "Ubuntu, sans-serif",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "20px", sm: "29px" },
                    }}
                  >
                    {content.title || content.name} (
                    {(
                      content.first_air_date ||
                      content.release_date ||
                      "____"
                    ).substring(0, 4)}
                    )
                  </Typography>
                  <Typography pt={1} variant="body2">
                    {content.tagline}
                  </Typography>

                  <Card
                    sx={{
                      backgroundColor: "#39445a",
                      color: "white",
                      marginTop: "10px",
                      height: { xs: "100px", sm: "auto" },
                    }}
                  >
                    <CardContent
                      sx={{
                        fontSize: { sm: "10px", md: "18px" },
                      }}
                    >
                      {content.overview}
                    </CardContent>
                  </Card>

                  <Box mt={2}>
                    <Carousel media={media} id={id} />
                  </Box>

                  <Button
                    target="_blank"
                    fullWidth
                    variant="contained"
                    color="secondary"
                    startIcon={<YouTubeIcon />}
                    href={`https://www.youtube.com/watch?v=${video}`}
                  >
                    Watch The Trailer
                  </Button>
                </Box>
              </Box>
            </Mybox>
          </Fade>
        </MyModal>
      </div>
    </>
  );
}
