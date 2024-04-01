import dbController from "../utils/dbFunctions.js";
import tryCatch from "../utils/tryCatch.js";

class UserController {
  getUser = tryCatch(async (req, res) => {
    const id = parseInt(req.params.id);
    const users = await dbController.getUsers();
    const user = users.find((u) => u._id === id);

    if (!user) throw new Error("Could not find a user with the given id");
    res.send(user);
  });
}
export default UserController = new UserController();
