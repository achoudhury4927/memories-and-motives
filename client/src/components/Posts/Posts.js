import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";
import Post from "./Post/Post.js";
import styles from "./styles.js";

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  const classes = styles();

  console.log(posts);

  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.mainContainer}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post) => (
        <Grid key={post.id} item xs={12} sm={6}>
          {<Post post={post} />}
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
