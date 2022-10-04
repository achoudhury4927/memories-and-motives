import React from "react";
import Post from "./Post/Post.js";
import styles from "./styles.js";

const Posts = () => {
  const classes = styles();
  return (
    <>
      <h1>POSTS</h1>
      <Post />
      <Post />
    </>
  );
};

export default Posts;
