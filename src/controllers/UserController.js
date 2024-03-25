import axios from "../config/axiosConfig.js";
import { users } from "../data.js";
import tryCatch from "../utils/tryCatch.js";

class UserController {
  getUsers = tryCatch(async (req, res) => {
    res.send(users);
  });

  getUser = tryCatch(async (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find((u) => u.id === id);
    
    if (!user) throw new Error("Could not find a user with the given id");
    res.send(user);
  });
}
export default UserController = new UserController();
