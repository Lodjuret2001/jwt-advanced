import axios from "../config/axiosConfig.js";
import tryCatch from "../utils/tryCatch.js";

class UserController {
  getUser = tryCatch(async (req, res) => {
    const id = parseInt(req.params.id);
    const usersData = await axios.get("/api/mockdb/users");
    const users = usersData.data;
    const user = users.find((u) => u.id === id);

    if (!user) throw new Error("Could not find a user with the given id");
    res.send(user);
  });
}
export default UserController = new UserController();
