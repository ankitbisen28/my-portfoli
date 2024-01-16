import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import ApartmentIcon from "@mui/icons-material/Apartment";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Education } from "../Data/Education";

export const EducationComponent = () => {
  return (
    <>
      <Box>
        <Typography variant="h3" color="primary" fontWeight={600} mt={5}>
          Education
        </Typography>
        {Education.map((item, index) => {
          return (
            <Grid
              key={index}
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              sx={{ backgroundColor: "gray", borderRadius: "15px" }}
              mt={5}
              padding={5}
            >
              <Grid item xs={6}>
                <Typography variant="h6" color="success" fontWeight={600}>
                  {item.course}
                </Typography>
                <Box display="flex" flexDirection="row">
                  <Typography variant="subtitle2" color="primary">
                    <ApartmentIcon />
                    {item.from}
                  </Typography>
                  <Typography variant="subtitle2" color="primary">
                    <LocationOnIcon />
                    {item.location}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  sx={{ borderRadius: "15px" }}
                >
                  {item.courseType}
                </Button>
                <Typography
                  variant="subtitle1"
                  color="primary"
                  fontWeight={600}
                >
                  {item.coursePeriod}
                </Typography>
              </Grid>
            </Grid>
          );
        })}
      </Box>
    </>
  );
};
