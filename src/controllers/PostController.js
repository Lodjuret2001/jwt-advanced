import { posts } from "../data.js";

class PostController {
  getPosts(req, res) {
    res.send(posts);
  }
}
export default PostController = new PostController();
