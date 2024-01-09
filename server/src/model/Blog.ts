import mongoose, { Schema, Document } from "mongoose";

export interface IBlog extends Document {
  title: string;
  content: string;
}

const blogSchema: Schema = new Schema({
  title: { type: String, required: true, trim: true, maxlength: 100 },
  content: { type: String, required: true, trim: true },
});

export default mongoose.model<IBlog>("Blog", blogSchema);
