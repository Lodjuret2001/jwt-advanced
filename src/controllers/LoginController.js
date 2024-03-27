import "dotenv/config";
import tryCatch from "../utils/tryCatch.js";
import parseTimeDuration from "../utils/parseTimeDuration.js";
import axios from "../config/axiosConfig.js";
import Joi from "joi";
import jwt from "jsonwebtoken";

const loginSchema = Joi.object({
  username: Joi.string().min(3).max(30).required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
});

class LoginController {
  logIn = tryCatch(async (req, res) => {
    const expireTime = "1m";
    const { username, password } = req.body;

    const usersData = await axios.get("/api/mockdb/users");
    const users = usersData.data;
    const user = users.find((u) => u.username === username);

    if (!user) throw new Error("Given username was not found...");
    const { error } = loginSchema.validate({ username, password });
    if (error) throw error;

    const accsess_token = jwt.sign(
      { user: user },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: expireTime,
      }
    );
    res.cookie("accsess_token", accsess_token, {
      httpOnly: true,
      sameSite: "strict",
      expires: new Date(Date.now() + parseTimeDuration(expireTime)),
    });
    res.send("Logged in successfully!");
  });

  logOut = tryCatch(async (req, res) => {
    res.clearCookie("accsess_token", {
      httpOnly: true,
      strict: true,
    });
    res.send("You logged out! :)");
  });
}
export default LoginController = new LoginController();
