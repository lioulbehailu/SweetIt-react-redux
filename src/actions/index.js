import {
  FETCH_POST,
  LOAD_POST,
  CREATE_POST,
  CREATE_SUCCESS,
  EDIT_POST,
  DELETE_POST,
} from "./types";

// *********FETCH DATA FROM JSONPLACEHOLDER******************
export const fetchPosts = () => {
  return {
    type: FETCH_POST,
  };
};

export const loadPosts = (data) => {
  return {
    type: LOAD_POST,
    data: data,
  };
};

export const createPost = (data) => {
  return {
    type: CREATE_POST,
    payload: data,
  };
};
export const editPost = (data) => {
  return {
    type: EDIT_POST,
    payload: data,
  };
};
export const deletePost = (data) => {
  return {
    type: DELETE_POST,
    payload: data,
  };
};
