import "dotenv/config";
import jwt from "jsonwebtoken";

function verifyToken(req, res, next) {
  const token = req.cookies.accsessToken;
  if (!token) throw new Error("Unauthorized: Missing token");

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decodedUser) => {
    if (err) throw new Error("Forbidden: Invalid or expired token");
    req.user = decodedUser;
    next();
  });
}

export default verifyToken;
