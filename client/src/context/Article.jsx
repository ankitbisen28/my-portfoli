import React, { createContext, useState, useEffect } from "react";
import client from "../sanityClient";

export const ArticleContext = createContext(null);

export const ArticleContextProvider = ({ children }) => {
  const [blogData, setBlogData] = useState([]);
  useEffect(() => {
    // Fetch data from Sanity using your query
    const fetchData = async () => {
      try {
        const response = await client.fetch(`
        *[_type == "blog"] {
          _id,
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
  const value = { blogData };

  return (
    <ArticleContext.Provider value={value}>{children}</ArticleContext.Provider>
  );
};

export default ArticleContext;
