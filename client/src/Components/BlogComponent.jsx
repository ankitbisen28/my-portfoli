import styled from "@emotion/styled";
import { Box, Grid, Typography, Avatar, Button } from "@mui/material";
import React from "react";

export const BlogComponent = () => {
  return (
    <>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Grid
          container
          spacing={2}
          alignItems="center"
          // width= "32.375rem",
          width= {{xs:"27.375rem", md:"32.375rem"}}
          sx={{
            margin: "1rem",
            height: "10.375rem",
            paddingBottom:"1rem",
            flexShrink: "0",
            border: "1px solid gray",
            borderRadius: "0.75rem",
          }}
        >
          <Grid item xs={4} alignItems="center">
            <img
              src="https://avatars.githubusercontent.com/u/89366625?s=400&u=ba546ac312ff5d9d94c7b872d13fcc8b2e5256f7&v=4"
              style={{
                width: "122px",
                height: "111px",
                borderRadius: "10px",
                marginLeft: "10px",
              }}
            />
          </Grid>
          <Grid item xs={8}>
            <Box>
              <Typography
                sx={{
                  width: "223px",
                  color: "#1C1C1C",
                  fontFamily: "Inter",
                  fontSize: "11px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                The overlooked benefits of real Christmas trees
              </Typography>
              <Typography
                sx={{
                  width: "223px",
                  fontFamily: "Inter",
                  fontSize: "11px",
                  fontStyle: "normal",
                  lineHeight: "normal",
                  color: "#424242",
                  fontWeight: "400",
                }}
              >
                The overlooked benefits of real Christmas trees
              </Typography>
              <Box
                display="flex"
                mt={1}
                flexDirection="row"
                alignItems="center"
              >
                <Avatar
                  sx={{ width: 30, height: 30, paddingTop: "3px" }}
                  alt="Ankit Bisen"
                  src="https://avatars.githubusercontent.com/u/89366625?s=400&u=ba546ac312ff5d9d94c7b872d13fcc8b2e5256f7&v=4"
                />
                <Typography
                  color="primary"
                  sx={{ fontSize: "11px", paddingLeft: "5px" }}
                >
                  Ankit Bisen
                </Typography>
                <Button
                  size="small"
                  variant="contained"
                  sx={{ borderRadius: 5, marginLeft: 12, fontSize: 10 }}
                >
                  Read More
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
