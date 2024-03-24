import User from "./utils/User.js";
import Post from "./utils/Post.js";

const users = {
  user1: new User("Lodjuret2001", "123456789"),
  user2: new User("Lodjuret2001", "123456789"),
  user3: new User("Lodjuret2001", "123456789"),
  user4: new User("Lodjuret2001", "123456789"),
  user5: new User("Lodjuret2001", "123456789"),
};

const posts = {
  post1: new Post("Title 1", "Dummy content"),
  post2: new Post("Title 2", "Dummy content"),
  post3: new Post("Title 3", "Dummy content"),
  post4: new Post("Title 4", "Dummy content"),
  post5: new Post("Title 5", "Dummy content"),
};

export { users, posts };
