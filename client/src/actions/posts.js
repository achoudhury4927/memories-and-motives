import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  FETCH_WITH_SEARCH,
  FETCH_POST,
  START_LOADING,
  END_LOADING,
} from "../constants/actionTypes";
import * as api from "../api";

export const getPost = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchPost(id);
    dispatch({
      type: FETCH_POST,
      payload: data,
    });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log({ message: error.message });
  }
};

export const getPosts = (page) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const {
      data: { data, currentPage, totalNumberOfPages },
    } = await api.fetchPosts(page);
    dispatch({
      type: FETCH_ALL,
      payload: { data, currentPage, totalNumberOfPages },
    });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log({ message: error.message });
  }
};

export const getPostsBySearch = (searchQuery) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const {
      data: { data },
    } = await api.fetchPostsBySearch(searchQuery);
    dispatch({ type: FETCH_WITH_SEARCH, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log({ message: error.message });
  }
};

export const createPost = (post, history) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.createPost(post);
    dispatch({ type: CREATE, payload: data });
    dispatch({ type: END_LOADING });
    history.push(`/posts/${data._id}`);
  } catch (error) {
    console.log({ message: error.message });
  }
};

export const updatePost = (currentId, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(currentId, post);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log({ message: error.message });
  }
};

export const deletePost = (currentId) => async (dispatch) => {
  try {
    await api.deletePost(currentId);
    dispatch({ type: DELETE, payload: currentId });
  } catch (error) {
    console.log({ message: error.message });
  }
};

export const likePost = (currentId) => async (dispatch) => {
  const user = JSON.parse(localStorage.getItem("profile"));

  try {
    const { data } = await api.likePost(currentId, user?.token);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log({ message: error.message });
  }
};
