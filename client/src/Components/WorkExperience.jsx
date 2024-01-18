import React from "react";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import ApartmentIcon from "@mui/icons-material/Apartment";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export const WorkExperience = () => {
  return (
    <Box>
      <Typography variant="h3" letterSpacing={4} color="primary" fontWeight={600} mt={5}>
        Work Experience
      </Typography>
      <Grid
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        sx={{ backgroundColor: "gray", borderRadius: "15px" }}
        mt={5}
        padding={5}
      >
        <Grid item xs={6}>
          <Typography variant="h6" color="success" fontWeight={600}>
            Software Developer Intern
          </Typography>
          <Box display="flex" flexDirection="row">
            <Typography variant="subtitle2" color="primary">
              <ApartmentIcon />
              Info Origin Inc
            </Typography>
            <Typography variant="subtitle2" color="primary">
              <LocationOnIcon />
              Gondia
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
            Full Time
          </Button>
          <Typography variant="subtitle1" color="primary" fontWeight={600}>
            Sep 2022 - Jan 2023
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
