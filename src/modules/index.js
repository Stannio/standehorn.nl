import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { projectReducer } from "./projects";
import { skillsReducer } from "./skills";

export default combineReducers({
  router: routerReducer,
  skills: skillsReducer,
  projects: projectReducer
});
