import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";
import Post from "./Post/Post.js";
import styles from "./styles.js";

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  const classes = styles();

  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.mainContainer}
      container
      alignItems="stretch"
      spacing={3}
      data-testid="mainContainerGrid"
    >
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={6} md={6} data-testid="postsGrid">
          {<Post post={post} setCurrentId={setCurrentId} />}
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
