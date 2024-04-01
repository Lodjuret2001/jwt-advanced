import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  _id: Number,
  title: String,
  content: String,
  author: { type: Number, ref: "Users" },
});

const Post = mongoose.model("Post", postSchema, "Posts");

export default Post;
