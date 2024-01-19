import { Container, Typography, Box } from "@mui/material";
import React from "react";
import { SearchComponent } from "../Components/SearchComponent";
import { BlogComponent } from "../Components/BlogComponent";

export const ArticlePage = () => {
  return (
    <>
      <Container>
        <Typography
          marginTop={4}
          variant="h3"
          color="primary"
          fontWeight={600}
          letterSpacing={3}
          padding={10}
        >
          Article
        </Typography>
        <Box display="flex" flexDirection="column" alignItems="center">
          <SearchComponent />
          <Box marginTop={3} padding={2}>
            <BlogComponent />
            <BlogComponent />
            <BlogComponent />
            <BlogComponent />
            <BlogComponent />
          </Box>
        </Box>
      </Container>
    </>
  );
};
