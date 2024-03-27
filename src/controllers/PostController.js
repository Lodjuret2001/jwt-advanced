import axios from "../config/axiosConfig.js";
import tryCatch from "../utils/tryCatch.js";

class PostController {
  getPost = tryCatch(async (req, res) => {
    const id = parseInt(req.params.id);
    const postsData = await axios.get("/api/mockdb/posts");
    const posts = postsData.data;
    const post = posts.find((p) => p.id === id);

    if (!post) throw new Error("Could not find a post with the given id");
    res.send(post);
  });

  getUserPosts = tryCatch(async (req, res) => {
    const username = req.user.username;
    const postsData = await axios.get("/api/mockdb/posts");
    const posts = postsData.data;

    const userPosts = posts.filter((p) => p.author === username);
    res.send(userPosts);
  });
}
export default PostController = new PostController();
