import "dotenv/config";
import jwt from "jsonwebtoken";

function generateRefreshToken(user) {
  return jwt.sign({ user: user }, process.env.REFRESH_TOKEN_SECRET);
}

export default generateRefreshToken;
