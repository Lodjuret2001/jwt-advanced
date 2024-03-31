import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  _id: Number,
  username: String,
  password: String,
  role: { type: String, enum: ["admin", "editor", "viewer"] },
});

const User = mongoose.model("User", userSchema, "Users");

export default User;
