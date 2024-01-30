import React from "react";
import { useContext } from "react";
import ArticleContext from "../context/Article";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
import Markdown from "markdown-to-jsx";

const cardStyle = {
  maxWidth: 600,
  margin: "auto",
  marginTop: 80,
};

const mediaStyle = {
  height: 0,
  paddingTop: "56.25%", // 16:9
};

export const ArticleDetail = () => {
  const { blogData } = useContext(ArticleContext);
  let { id } = useParams();

  // // Find the selected blog by id
  const selectedBlog = blogData.filter((blog) => blog._id === id);
  // Check if selectedBlog is empty or not
  if (selectedBlog.length === 0) {
    return <div>Blog not found</div>;
  }

  const data = selectedBlog[0];
  console.log(data);
  return (
    <>
      <Card style={cardStyle}>
        <CardHeader title={data.title} />
        <CardMedia
          style={mediaStyle}
          image={data.imageUrl}
          title={data.title}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="div">
            <Markdown>{data.description}</Markdown>
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};
