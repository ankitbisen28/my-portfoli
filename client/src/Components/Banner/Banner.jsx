import React from "react";
import { Box, Typography, Grid, styled, Button } from "@mui/material";
import Typewriter from "typewriter-effect";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

const StyledButton = styled(Button)({
  color: "white",
  border: "1px solid white",
  borderRadius: "100px",
  "&:hover": {
    color: "#212121",
    backgroundColor: "white",
    border: "1px solid white",
  },
});

export const Banner = () => {
  return (
    <Box
      height={{ xs: "auto", md: "47rem" }}
      sx={{ backgroundColor: "#0BCEAF" }}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Grid
        container
        spacing={2}
        sx={{
          width: "100%",
          flexDirection: { xs: "column", md: "row" },
          alignItems: {
            xs: "center",
          },
        }}
      >
        <Grid item xs={12} md={6} height={{ xs: "auto", md: "50vh" }}>
          <Box
            display="flex"
            sx={{
              width: {
                xs: "15rem",
                sm: "20rem",
                md: "25rem",
              },
              height: {
                xs: "15rem",
                sm: "20rem",
                md: "25rem",
              },
              margin: "auto",
            }}
            justifyContent="center"
            alignItems="center"
            marginTop={{ xs: "4rem", md: "0" }}
          >
            <img
              style={{ minWidth: "100%", height: "100%" }}
              className="rounded-circle"
              src="https://firebasestorage.googleapis.com/v0/b/my-portfolio-react-dc591.appspot.com/o/AnkitBisen.png?alt=media&token=228a3080-c19d-48db-9616-211803f1efae"
              alt="Ankit Bisen image"
            />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          mt={{ md: 10 }}
          height={{ xs: "auto", md: "50vh" }}
        >
          <Typography variant="h4" color="#fff">
            I'm
          </Typography>
          <Typography
            variant="h1"
            sx={{
              textTransform: "uppercase",
              color: "transparent",
              WebkitTextStroke: "2px #fff",
              fontSize: {
                xs: "3rem",
                sm: "4rem",
              },
            }}
          >
            Ankit Bisen
          </Typography>

          <Typewriter
            component="h3"
            options={{
              strings: [
                "Frontend Developer",
                "Backend Developer",
                "Full Stack Developer",
                "Make Awesome Web App ",
              ],
              autoStart: true,
              loop: true,
            }}
          />
          <Box
            width="100%"
            sx={{
              margin: "2rem 0 0 0",
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: { xs: "center", md: "flex-start" },
              justifyContent: "flex-start",
            }}
            height={{ xs: "auto", md: "50%" }}
          >
            <StyledButton
              variant="outlined"
              size="large"
              sx={{ margin: { xs: "1rem", md: "2rem" } }}
            >
              Download CV
            </StyledButton>
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              justifyContent="flex-start"
              marginBottom={{ xs: "2rem" }}
            >
              <PlayCircleIcon
                sx={{
                  color: "white",
                  width: { xs: "3rem", sm: "5rem" },
                  height: { xs: "3rem", sm: "5rem" },
                }}
              />
              <Typography
                variant="h6"
                fontWeight={500}
                color="white"
                padding={2}
              >
                Play Video
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Banner;
