import {
  FETCH_POST,
  LOAD_POST,
  CREATE_POST,
  CREATE_SUCCESS,
  EDIT_POST,
  DELETE_POST,
  NETWORK_ERROR,
  EDIT_SUCCESS,
  DELETE_SUCCESS,
} from "../actions/types";

const initialState = {
  posts: [],
  deletePost: {},
  loading: false,
};

const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POST:
      return {
        ...state,
        loading: true,
      };
    case LOAD_POST:
      return {
        ...state,
        posts: action.data,
        loading: false,
      };
    case CREATE_POST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_SUCCESS:
      return {
        ...state,
        ...state.posts.unshift(action.payload),
        loading: false,
      };
    case EDIT_POST:
      return {
        ...state,
        loading: true,
      };
    case EDIT_SUCCESS:
      return {
        ...state,

        ...state.posts.map((item) => {
          if (item.id === action.payload.id) {
            item.id = action.payload.id;
            item.title = action.payload.title;
            item.body = action.payload.body;
          }
        }),

        loading: false,
      };
    case DELETE_POST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_SUCCESS:
      return {
        ...state,
        ...state.posts.map((item, index) => {
          if (item.id == action.payload) {
            state.posts.splice(index, 1);
          }
        }),
        loading: false,
      };
    case NETWORK_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default PostReducer;
