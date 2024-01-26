import { Container, Typography, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { SearchComponent } from "../Components/SearchComponent";
import { BlogComponent } from "../Components/BlogComponent";
import client from "../sanityClient";
// import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";

export const ArticlePage = () => {
  const [blogData, setBlogData] = useState([]);
  console.log(blogData);
  useEffect(() => {
    // Fetch data from Sanity using your query
    const fetchData = async () => {
      try {
        const response = await client.fetch(`
        *[_type == "blog"] {
          title,
          description,
          creationDate,
          "imageUrl":images.asset->url,
        }
        `);

        setBlogData(response);
      } catch (error) {
        console.error("Error fetching data from Sanity:", error);
      }
    };

    fetchData();
  }, []);

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
            <BlogComponent blogData={blogData} />
          </Box>
        </Box>
      </Container>
    </>
  );
};
