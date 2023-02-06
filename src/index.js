//Call all functions inside services and log updated value/s
import { updateUser, getAllUsers, getUserById, addUser  } from "./services/users";
import { getPosts, getPostsByUser, getPostById, addPost, updatePostBody, updatePostTitle, updatePost, deletePostBy, deletePostsByUserId} from "./services/posts";
import { getCommentById, getCommentsByPostId, addComment, updateCommentBody, deleteCommentById, getAllComments } from "./services/comments";

console.log(getAllUsers());
updateUser(1, { email: "roger@77.com", website: "hilde-edit.org" });
console.log(getAllUsers());
console.log(getUserById());
console.log(addUser());

console.log(getPosts());
console.log(getPostById());
console.log(getPostsByUser());
console.log(addPost());
console.log(updatePostBody());
console.log(updatePostTitle());
console.log(updatePost());
console.log(deletePostBy());
console.log(deletePostsByUserId());


console.log(getCommentById());
console.log(getCommentsByPostId());
console.log(addComment());
console.log(updateCommentBody());
console.log(deleteCommentById());
console.log(getAllComments());


