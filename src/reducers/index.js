import { combineReducers } from "redux";
import PostReducer from "./PostReducers";

const allReducers = combineReducers({
  PostReducer,
});

export default allReducers;
