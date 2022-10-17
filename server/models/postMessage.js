import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  creator: String,
  title: String,
  description: String,
  location: String,
  selectedFile: String,
  tags: [String],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  likes: {
    type: [String],
    default: [],
  },
});

const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
