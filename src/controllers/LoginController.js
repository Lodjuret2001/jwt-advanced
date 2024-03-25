import "dotenv/config";
import tryCatch from "../utils/tryCatch.js";
import axios from "../config/axiosConfig.js";
import Joi from "joi";
import jwt from "jsonwebtoken";

const loginSchema = Joi.object({
  username: Joi.string().min(3).max(30).required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
});

class LoginController {
  tryLogin = tryCatch(async (req, res, next) => {
    console.log(req.body);
    const logInUser = req.body;
    const { error } = loginSchema.validate(logInUser);
    if (error) throw error;

    const user = await axios.get(`/api/users/${logInUser}`);
    const token = jwt.sign({ user: user }, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "1m",
    });
    res.send(token);
  });
}
export default LoginController = new LoginController();
