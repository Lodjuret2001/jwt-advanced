import { users } from "../data.js";

class UserController {
  getUsers(req, res) {
    res.send(users);
  }
}
export default UserController = new UserController();
