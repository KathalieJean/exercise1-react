//Call all functions inside services and log updated value/s
import { updateUser, getAllUsers, getUserById, addUser } from "./services/users";
import { getPosts, getPostsByUser, getPostById, addPost, deletePostsByUserId, updatePostBody, updatePost, updatePostTitle, deletePostBy } from "./services/posts";
import { getCommentById, getCommentsByPostId, addComment, updateCommentBody, deleteCommentById, getAllComments } from "./services/comments";
import { posts } from "./data/posts";
import { generatedId } from "./utils";
import { users } from "./data/users";
import { comments } from "./data/comments"

console.log(getAllUsers());
updateUser(1, { email: "roger@77.com", website: "hilde-edit.org" });
console.log(getAllUsers());
