import { Box, Grid, Typography, Avatar, Button } from "@mui/material";
import React from "react";

export const BlogComponent = ({ blogData }) => {
  return (
    <>
      {blogData.map((item, index) => {
        // console.log(item.imageUrl)
        return (
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            key={index}
          >
            <Grid
              container
              spacing={2}
              alignItems="center"
              // width= "32.375rem",
              width={{ xs: "20.375rem", sm: "27.375rem", md: "32.375rem" }}
              sx={{
                margin: "1rem",
                height: "10.375rem",
                paddingBottom: "1rem",
                flexShrink: "0",
                border: "1px solid gray",
                borderRadius: "0.75rem",
              }}
            >
              <Grid item xs={4} alignItems="center">
                <img
                  src={item.imageUrl}
                  style={{
                    width: "122px",
                    height: "111px",
                    borderRadius: "10px",
                  }}
                />
              </Grid>
              <Grid item xs={8}>
                <Box>
                  <Typography
                    margin={{ xs: "15px" }}
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
                    {item.title}
                  </Typography>
                  <Typography
                    margin={{ xs: "15px" }}
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
                    {item.description.length > 40
                      ? `${item.description.substring(0, 40)}...`
                      : item.description}
                  </Typography>
                  <Box
                    display="flex"
                    ml={{ xs: 3 }}
                    mt={{ xs: 1, sm: 3 }}
                    flexDirection="row"
                    alignItems="center"
                  >
                    <Avatar
                      sx={{ width: 30, height: 30 }}
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
                      sx={{
                        borderRadius: 5,
                        marginLeft: {xs: 1, lg: 12 },
                        fontSize: {xs:8, sm:10},
                      }}
                    >
                      Read More
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        );
      })}
    </>
  );
};
