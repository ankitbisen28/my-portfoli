import { Request, Response } from "express";
import Blog from "../model/Blog";

export const getAllBlogs = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const createBlog = async (req: Request, res: Response) => {
  const { title, content } = req.body;

  // Validation
  if (!title || !content) {
    res.status(400).json({ message: "Title and content are required" });
    return;
  }

  const blog = new Blog({
    title,
    content,
  });

  try {
    const newBlog = await blog.save();
    res.status(201).json(newBlog);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a blog
export const updateBlog = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updatedBlog);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a blog
export const deleteBlog = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.json({ message: "Blog deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
