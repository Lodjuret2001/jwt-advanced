import tryCatch from "../utils/tryCatch.js";
import parseTimeDuration from "../utils/parseTimeDuration.js";
import generateAccsessToken from "../utils/generateAccsessToken.js";
import generateRefreshToken from "../utils/generateRefreshToken.js";
import axios from "../config/axiosConfig.js";
import Joi from "joi";

const loginSchema = Joi.object({
  username: Joi.string().min(3).max(30).required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
});

class LoginController {
  expireTime = "30s";

  logIn = tryCatch(async (req, res) => {
    const { username, password } = req.body;

    const usersData = await axios.get("/api/mockdb/users");
    const users = usersData.data;
    const user = users.find((u) => u.username === username);

    if (!user) throw new Error("Given username was not found...");
    const { error } = loginSchema.validate({ username, password });
    if (error) throw error;

    const accsess_token = generateAccsessToken(user, this.expireTime);
    const refresh_token = generateRefreshToken(user);
    res.cookie("accsess_token", accsess_token, {
      httpOnly: true,
      sameSite: "strict",
      expires: new Date(Date.now() + parseTimeDuration(this.expireTime)),
    });
    res.cookie("refresh_token", refresh_token, {
      httpOnly: true,
      sameSite: "strict",
      expires: new Date(Date.now() + 7200000), //2 hours
    });
    res.send("Logged in successfully!");
  });

  logOut = tryCatch(async (req, res) => {
    res.clearCookie("accsess_token", {
      httpOnly: true,
      strict: true,
    });
    res.clearCookie("refresh_token", {
      httpOnly: true,
      strict: true,
    });
    res.send("You logged out! :)");
  });
}
export default LoginController = new LoginController();
