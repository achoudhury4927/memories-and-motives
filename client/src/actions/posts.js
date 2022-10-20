import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  FETCH_WITH_SEARCH,
} from "../constants/actionTypes";
import * as api from "../api";

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getPostsBySearch = (searchQuery) => async (dispatch) => {
  try {
    const {
      data: { data },
    } = await api.fetchPostsBySearch(searchQuery);
    dispatch({ type: FETCH_WITH_SEARCH, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (currentId, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(currentId, post);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (currentId) => async (dispatch) => {
  try {
    await api.deletePost(currentId);
    dispatch({ type: DELETE, payload: currentId });
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (currentId) => async (dispatch) => {
  const user = JSON.parse(localStorage.getItem("profile"));

  try {
    const { data } = await api.likePost(currentId, user?.token);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
