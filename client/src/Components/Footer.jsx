import { Box, Typography } from "@mui/material";
import React from "react";

export const Footer = () => {
  return (
    <>
      <Box padding={5} marginTop={4} width={{ lg: "100%" }} height={{lg:"5rem"}} sx={{ backgroundColor: "#3D3B40" }}>
        <Typography textAlign='center' color='secondary' variant='body1' fontWeight={400}> © 2024 Ankit Bisen. All rights reserved </Typography>
      </Box>
    </>
  );
};
