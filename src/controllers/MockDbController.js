import { users, posts } from "../mockDB.js";
import tryCatch from "../utils/tryCatch.js";

class MockDbController {
  getPosts = tryCatch(async (req, res) => {
    res.send(posts);
  });

  getUsers = tryCatch(async (req, res) => {
    res.send(users);
  });
}

export default MockDbController = new MockDbController();
