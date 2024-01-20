import React from "react";
import Banner from "../Components/Banner";
import { Technology } from "../Components/Technology";
import { Container } from "@mui/material";

export const Home = () => {
  return (
    <>
      <Banner />
      <Container>
        <Technology />
      </Container>
    </>
  );
};
