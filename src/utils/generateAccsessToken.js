import "dotenv/config";
import jwt from "jsonwebtoken";

function generateAccsesToken (user, expireTime) {
  return jwt.sign({ user: user }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: expireTime,
  });
};

export default generateAccsesToken;