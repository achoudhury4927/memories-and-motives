import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/" });

export const fetchPosts = () => API.get("/posts");
export const createPost = (newPost) => API.post("/posts", newPost);
export const updatePost = (currentId, updatedPost) =>
  API.patch(`/posts/${currentId}`, updatedPost);
export const deletePost = (currentId) => API.delete(`/posts/${currentId}`);
export const likePost = (currentId) =>
  API.patch(`/posts/${currentId}/likePost`);

export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);
