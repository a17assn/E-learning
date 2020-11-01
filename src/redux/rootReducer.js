import { combineReducers } from "redux";
import assignmentReducer from "./assignment/assignmentReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
  Assignment: assignmentReducer,
  auth: userReducer,
});

export default rootReducer;
