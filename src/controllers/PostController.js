import dbController from "../utils/dbFunctions.js";
import tryCatch from "../utils/tryCatch.js";

class PostController {
  getPost = tryCatch(async (req, res) => {
    const id = parseInt(req.params.id);
    const posts = await dbController.getPosts();
    const post = posts.find((p) => p._id === id);

    if (!post) throw new Error("Could not find a post with the given id");
    res.send(post);
  });

  getUserPosts = tryCatch(async (req, res) => {
    const id = req.user._id;
    const posts = await dbController.getPosts();

    const userPosts = posts.filter((p) => p.author === id);
    res.send(userPosts);
  });
}
export default PostController = new PostController();
