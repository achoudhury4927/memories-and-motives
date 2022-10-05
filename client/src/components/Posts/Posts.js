import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post/Post.js";
import styles from "./styles.js";

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  const classes = styles();

  console.log(posts);

  return (
    <>
      <h1>POSTS</h1>
      <Post />
      <Post />
    </>
  );
};

export default Posts;
