import projects from "../data/projects";

const ACTION_HANDLERS = {};
const initialState = {
  projects: projects
};
export const projectReducer = (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
};
