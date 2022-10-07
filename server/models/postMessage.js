import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: String,
  description: String,
  location: String,
  selectedFile: String,
  tags: [String],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
