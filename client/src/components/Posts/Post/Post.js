import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";
import styles from "./styles.js";
import { useDispatch } from "react-redux";

import { deletePost, likePost } from "../../../actions/posts.js";

const Post = ({ post, setCurrentId }) => {
  const classes = styles();
  const dispatch = useDispatch();

  return (
    <Card className={classes.card} data-testid="singlePost">
      <CardMedia
        className={classes.media}
        image={post.selectedFile}
        title={post.title}
        data-testid="cardMedia"
      />
      <div className={classes.overlay}>
        <Typography variant="h6" data-testid="postCreator">
          {post.name}
        </Typography>
        <Typography variant="body2" data-testid="postMoment">
          {moment(post.createdAt).from()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        <Button
          style={{ color: "white" }}
          size="small"
          data-testid="buttonEdit"
          onClick={() => setCurrentId(post._id)}
        >
          <MoreHorizIcon fontSize="medium" />
        </Button>
      </div>
      <div className={classes.details}>
        <Typography
          variant="body2"
          color="textSecondary"
          data-testid="postTags"
        >
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      <Typography
        className={classes.title}
        variant="h5"
        gutterBottom
        data-testid="postTitle"
      >
        {post.title}
      </Typography>
      <CardContent>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          data-testid="postDescription"
        >
          {post.description}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          color="primary"
          data-testid="buttonLike"
          onClick={() => dispatch(likePost(post._id))}
        >
          <ThumbUpAltIcon fontSize="small" /> &nbsp; Like &nbsp;{post.likeCount}
        </Button>
        <Button
          size="small"
          color="primary"
          data-testid="buttonDelete"
          onClick={() => dispatch(deletePost(post._id))}
        >
          <DeleteIcon fontSize="small" />
          &nbsp; Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
