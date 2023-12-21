import React from "react";
import { Box, Typography, Grid, styled, Button } from "@mui/material";
import TypeWriterEffect from "react-typewriter-effect";
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
      height="100vh"
      sx={{ backgroundColor: "#0BCEAF" }}
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
    >
      <Grid width="80%" container spacing={2}>
        <Grid item xs={6} height="50vh">
          <Box display="flex" justifyContent="center" alignItems="center">
            <img
              style={{ width: "400px", height: "400px" }}
              className="rounded-circle Profile-image"
              src="https://firebasestorage.googleapis.com/v0/b/my-portfolio-react-dc591.appspot.com/o/AnkitBisen.png?alt=media&token=228a3080-c19d-48db-9616-211803f1efae"
              alt="Ankit Bisen image"
            />
          </Box>
        </Grid>
        <Grid item xs={6} height="50vh">
          <Typography variant="h4" color="#fff">
            I'm
          </Typography>
          <Typography
            variant="h1"
            sx={{
              textTransform: "uppercase",
              color: "transparent",
              "-webkitTextStroke": "2px #fff",
            }}
          >
            Ankit Bisen
          </Typography>
          <TypeWriterEffect
            textStyle={{
              fontFamily: "Poppins,sans-serif",
              color: "#fff",
              fontWeight: 500,
              fontSize: "2.2em",
            }}
            startDelay={2000}
            cursorColor="#3F3D56"
            multiText={[
              "Frontend Developer",
              "Backend Developer",
              "Full Stack Developer",
            ]}
            multiTextDelay={1000}
            typeSpeed={150}
          />
          <Box width="100%" sx={{ margin: "2rem 0 0 0" }} height="50%" display="flex" flexDirection="row" alignItems="center" justifyContent="flex-start">
            <StyledButton
              variant="outlined"
              size="large"
              sx={{ margin: "2rem" }}
            >
              Download CV
            </StyledButton>
            <PlayCircleIcon
              style={{ color: "white", width: "5rem", height: "5rem" }}
            />
            <Typography variant="h6" fontWeight={500} color="white" padding={2}>Play Video</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Banner;
