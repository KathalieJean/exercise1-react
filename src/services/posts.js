import { posts as data } from "../data/posts";

//private
let posts = [...data];

function getPosts() {
  //get all posts
  return [...posts];
}

function getPostsByUser(userId) {
  //get all posts by userId
  return posts.filter(post => post.userId === userId);
}

function getPostById(id) {
  //get a single post by id
  return posts.find(post => post.id === id);
}

function addPost(post) {
  //add new post to BEGINNING of posts array
  // use generateId function and pass posts array as the argument to generate a unique id.
  return posts.unshift(post);
}

function updatePostTitle(id, title) {
  //update post title
  updatePost.forEach((item, index) => {
    if (item.id === id) {
      updatePost[index].title = title;
    }
  });
  return updatePost;
}

function updatePostBody(id, body) {
  //update post body
  posts.forEach((item, index) => {
    if (item.id === id) {
      posts[index].body = body;
    }
  });
  return posts;
};