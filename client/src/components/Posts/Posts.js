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
    >
      {posts.map((post) => (
        <Grid
          key={post._id}
          item
          xs={12}
          sm={12}
          md={6}
          lg={3}
          data-testid="postGrid"
        >
          {<Post post={post} setCurrentId={setCurrentId} />}
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
