import User from "./utils/User.js";
import Post from "./utils/Post.js";

const users = [
  new User(1, "Lodjuret2001", "123456789"),
  new User(2, "Lodjuret2001", "123456789"),
  new User(3, "Lodjuret2001", "123456789"),
  new User(4, "Lodjuret2001", "123456789"),
  new User(5, "Lodjuret2001", "123456789"),
];

const posts = [
  new Post(1, "Title 1", "Dummy content"),
  new Post(2, "Title 2", "Dummy content"),
  new Post(3, "Title 3", "Dummy content"),
  new Post(4, "Title 4", "Dummy content"),
  new Post(5, "Title 5", "Dummy content"),
];

export { users, posts };
