import User from "../models/userModel.js";
import Post from "../models/postModel.js";

class dbController {
  async getPosts() {
    return await Post.find();
  }

  async getUsers() {
    return await User.find();
  }
}

export default dbController = new dbController();
