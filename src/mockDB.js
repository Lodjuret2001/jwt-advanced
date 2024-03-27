import User from "./utils/User.js";
import Post from "./utils/Post.js";

const users = [
  new User(1, "Lodjuret2001", "SuccsessPassword"),
  new User(2, "Lodjuret2002", 123),
  new User(3, 2003, "ValidationError"),
];

const posts = [
  new Post(1, "Title 1", "Lodjuret2001", "Dummy content"),
  new Post(2, "Title 2", "Lodjuret2001", "Dummy content"),
  new Post(3, "Title 3", "Lodjuret2002", "Dummy content"),
  new Post(4, "Title 4", "Lodjuret2001", "Dummy content"),
  new Post(5, "Title 5", "Lodjuret2002", "Dummy content"),
];

export { users, posts };
