import { posts } from "../data.js";
import tryCatch from "../utils/tryCatch.js";

class PostController {
  getPosts = tryCatch(async (req, res) => {
    res.send(posts);
  });

  getPost = tryCatch(async (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find((p) => p.id === id);

    if (!post) throw new Error("Could not find a post with the given id");
    res.send(post);
  });
}
export default PostController = new PostController();
