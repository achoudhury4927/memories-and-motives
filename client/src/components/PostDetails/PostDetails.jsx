import React, { useEffect } from "react";
import { Paper, Typography, CircularProgress, Divider } from "@material-ui/core/";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { useParams, useHistory } from "react-router-dom";

import CommentSection from "./CommentSection.jsx"
import { getPost, getPostsBySearch } from "../../actions/posts";
import styles from "./styles";

const PostDetails = () => {
  const { post, posts, isLoading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = styles();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPost(id));
  }, [id]);

  useEffect(() => {
    if (post) {
      dispatch(getPostsBySearch({ search: "none", tags: post?.tags.join(",") }));
    }
  }, [post]);

  if (!post) return null;

  if (isLoading) {
    return (
      <Paper elevation={6} className={classes.loadingPaper}>
        <CircularProgress size="7em" />
      </Paper>
    );
  }

  const openPost = (_id) => history.push(`/posts/${_id}`);
  const similarPosts = posts.filter(({ _id }) => _id !== post._id);

  return (
    <Paper style={{ padding: "20px", borderRadius: "15px" }} elevation={6}>
      <div className={classes.card}>
        <div className={classes.section}>
        <Typography variant="h3" component="h2" data-testid="postTitle">{post.title}</Typography>
        <Typography gutterBottom variant="h6" color="textSecondary" component="h2" data-testid="postTags">{post.tags.map((tag) => `#${tag} `)}</Typography>
        <Typography gutterBottom variant="body1" component="p" data-testid="postDescription">{post.description}</Typography>
        <Typography variant="h6" data-testid="postCreator">Created by: {post.name}</Typography>
        <Typography variant="body1" data-testid="postMoment">{moment(post.createdAt).fromNow()} at {post.location}</Typography>
        <Divider style={{ margin: "20px 0" }} />
        <CommentSection post={post}/>
        <Divider style={{ margin: "20px 0" }} />
      </div>
        <div className={classes.imageSection}>
          <img className={classes.media} src={post.selectedFile || "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"} alt={post.title} data-testid="postImage"/>
        </div>
      </div>
      {!!similarPosts.length && (
        <div className={classes.section}>
          <Typography gutterBottom variant="h5">You might also like:</Typography>
          <Divider />
          <div className={classes.similarPosts}>
            {similarPosts.map(({ title, name, description, likes, selectedFile, _id }) => (
              <div style={{ margin: "20px", cursor: "pointer" }} onClick={() => openPost(_id)} key={_id}>
                <Typography gutterBottom variant="h6" data-testid="similarPostTitle">{title}</Typography>
                <Typography gutterBottom variant="subtitle2" data-testid="similarPostName">{name}</Typography>
                <Typography gutterBottom variant="subtitle2" data-testid="similarPostDescription">{description}</Typography>
                <Typography gutterBottom variant="subtitle1" data-testid="similarPostLikes">Likes: {likes.length}</Typography>
                <img src={selectedFile} alt={title} width="200px" />
              </div>
            ))}
          </div>
        </div>
      )}
    </Paper>
  );
};

export default PostDetails;