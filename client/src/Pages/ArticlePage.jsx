import { Container, Typography, Box } from "@mui/material";
import React, { useEffect, useState, useContext } from "react";
import { SearchComponent } from "../Components/SearchComponent";
import { BlogComponent } from "../Components/BlogComponent";
import ArticleContext from "../context/Article";

export const ArticlePage = () => {
  const { blogData } = useContext(ArticleContext);
  // console.log(blogData)
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
          textAlign="center"
        >
          Article
        </Typography>
        <Box display="flex" flexDirection="column" alignItems="center">
          <SearchComponent />
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          flexWrap="wrap"
        >
          <BlogComponent blogData={blogData} />
        </Box>
      </Container>
    </>
  );
};
