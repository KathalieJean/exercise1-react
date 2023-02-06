//Call all functions inside services and log updated value/s
import { updateUser, getAllUsers, getUserById, addUser  } from "./services/users";
import { getPosts, getPostsByUser, getPostById, addPost, deletePostsByUserId, updatePostBody, updatePost, updatePostTitle, deletePostBy } from "./services/posts";
import { getCommentById, getCommentsByPostId, addComment, updateCommentBody, deleteCommentById, getAllComments } from "./services/comments";
import { posts } from "./data/posts";
import { generatedId } from "./utils";
import { users } from "./data/users";
import { comments } from "./data/comments";

console.log(getAllUsers());
updateUser(1, { email: "roger@77.com", website: "hilde-edit.org" });
console.log(getAllUsers());

users
console.log(getAllUsers());

updateUser(2, { email: "karrogante77@global.biz", website: "katdrive.org" });
console.log(getUserById(1));

addUser({
    id: generatedId(users),
    name: "Kathalie Jean",
    username: "KathalieJean",
    email: "karrogante@77global.biz",
    address: {
      street: "J.P Rizal Street",
      suite: "#002",
      city: "Batangas",
      zipcode: "4228",
    },
    phone: "0916 492 5675",
    website: "katdrive.org",
    company: {
      name: "KathalieJean Org",
      catchPhrase: "Believe in yourself.",
      bs: "Claim it.",
    },
  });
    console.log(getAllUsers());


POST
console.log(getPosts());
console.log(getPostById(3));

getPostsByUser(id)
let postsByUser1 = getPostsByUser(1);
console.log(postsByUser1);

addPost({
    userId: generateId(posts),
    id: generateId(posts),
    title: "update",
    body: "Update ",
  });
  console.log(getPosts());

updatePostBody(1, {body: "Updated body"});
console.log(getPostById(1));

updatePost(1, {post: "Updated post"});
console.log(getPostById(1));

updatePostTitle(1, {title: "Updated title"});
console.log(getPostById(1));


console.log(deletePostBy(2));

console.log(deletePostsByUserId(2));

comments
console.log(getCommentById(1));
console.log(getCommentsByPostId(1));

updateCommentBody(1, {body: 'Updated body'});
console.log(getAllComments(1)); 

console.log(updateCommentBody(1, {body: 'Updated body'}));

console.log(deleteCommentById(1));

addComment({
    postId: generateId(comments),
    id: generateId(comments),
    name: "Added name",
    email: "karrogante77@global.biz",
    body: "Added comment body",
  
})

console.log(getAllComments());