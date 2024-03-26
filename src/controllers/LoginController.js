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
  tryLogin = tryCatch(async (req, res) => {
    const expiresTime = "1m";
    const { username, password } = req.body;

    const usersData = await axios.get("/api/users");
    const users = usersData.data;
    const user = users.find((u) => u.username === username);

    if (!user) throw new Error("Given username was not found...");
    const { error } = loginSchema.validate({ username, password });
    if (error) throw error;

    const accsessToken = jwt.sign(
      { user: user },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: expiresTime,
      }
    );
    res.cookie("accsessToken", accsessToken, {
      httpOnly: true,
      sameSite: "strict",
      expires: new Date(Date.now() + parseTimeDuration(expiresTime)),
    });
    res.send("Logged in successfully!");
  });
}
export default LoginController = new LoginController();
