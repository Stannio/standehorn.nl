import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { projectReducer } from "./projects";

export default combineReducers({
  router: routerReducer,
  projects: projectReducer
});
