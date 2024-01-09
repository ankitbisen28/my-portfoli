import express from "express";
import { isAuthenticated, isOwner } from "../middleware";
import {
  createBlog,
  deleteBlog,
  getAllBlogs,
  updateBlog,
} from "../controller/BlogController";

export default (router: express.Router) => {
  router.get("/api/getBlogs", isAuthenticated, getAllBlogs);
  router.post("/api/createBlog", isAuthenticated, createBlog);
  router.patch("/api/blog/:id", isAuthenticated, updateBlog);
  router.delete("/api/blog/:id", isAuthenticated, deleteBlog);
};
