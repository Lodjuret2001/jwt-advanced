import "dotenv/config";
import jwt from "jsonwebtoken";
import LoginController from "../controllers/LoginController.js";
import generateAccsessToken from "../utils/generateAccsessToken.js";
import parseTimeDuration from "../utils/parseTimeDuration.js";

function verifyToken(req, res, next) {
  const expireTime = LoginController.expireTime;
  let accsess_token = req.cookies.accsess_token;
  const refresh_token = req.cookies.refresh_token;

  if (!accsess_token && !refresh_token) {
    throw new Error(
      "Unauthorized: Cannot accsess this content without logging in."
    );
  }

  if (!accsess_token && refresh_token) {
    jwt.verify(
      refresh_token,
      process.env.REFRESH_TOKEN_SECRET,
      (err, decodedUser) => {
        if (err) throw new Error("Unauthorized: refresh_token invalid");
        accsess_token = generateAccsessToken(decodedUser.user, expireTime);
        res.cookie("accsess_token", accsess_token, {
          httpOnly: true,
          sameSite: "strict",
          expires: new Date(Date.now() + parseTimeDuration(expireTime)),
        });
        req.user = decodedUser.user;
        console.log("Generated new Accsess Token");
        return next();
      }
    );
  }

  jwt.verify(
    accsess_token,
    process.env.ACCESS_TOKEN_SECRET,
    (err, decodedUser) => {
      if (err) {
        throw new Error("Unauthorized: Not valid Accsess Token...");
      }
      req.user = decodedUser.user;
      return next();
    }
  );
}

export default verifyToken;
